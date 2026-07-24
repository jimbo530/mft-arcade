// ============================================================
// MfT Arcade — Wallet & NFT Gate Module
// ============================================================
// Shared by the portal and all games. Include ethers.js before this.
//
// Usage:
//   await MftWallet.connect();
//   const hasAccess = await MftWallet.checkAccess();
//   const balance = await MftWallet.getMftBalance();
// ============================================================

const MftWallet = (() => {
  const BASE_CHAIN_ID = '0x2105'; // 8453
  // rotate this key in Alchemy + restrict to your domains
  // Client-side RPC: any key here is public at runtime, so it MUST be domain-locked in Alchemy.
  // To use a private endpoint, set: BASE_RPC = 'https://base-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'
  // Default is the public Base RPC so the NFT gate keeps working with no secret in source.
  const BASE_RPC = 'https://mainnet.base.org';
  const MFT_TOKEN = '0x8fb87d13b40b1a67b22ed1a17e2835fe7e3a9ba3';

  const ERC20_ABI = [
    'function balanceOf(address) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function allowance(address owner, address spender) view returns (uint256)',
  ];

  const ERC721_ABI = [
    'function balanceOf(address) view returns (uint256)',
  ];

  const ERC1155_ABI = [
    'function balanceOf(address, uint256) view returns (uint256)',
  ];

  let provider = null;
  let signer = null;
  let account = null;
  let arcadeConfig = null;

  // Load arcade config
  async function loadConfig() {
    if (arcadeConfig) return arcadeConfig;
    try {
      const res = await fetch('arcade.json');
      arcadeConfig = await res.json();
    } catch {
      // If loaded from a game subfolder, try parent
      try {
        const res = await fetch('../../arcade.json');
        arcadeConfig = await res.json();
      } catch {
        arcadeConfig = { nftContracts: [], games: [] };
      }
    }
    return arcadeConfig;
  }

  async function connect() {
    if (!window.ethereum) {
      throw new Error('No wallet found. Install MetaMask or another Web3 wallet.');
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    signer = await provider.getSigner();
    account = await signer.getAddress();

    // Switch to Base if needed
    const network = await provider.getNetwork();
    if (network.chainId !== 8453n) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: BASE_CHAIN_ID }]
        });
      } catch (e) {
        if (e.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: BASE_CHAIN_ID,
              chainName: 'Base',
              rpcUrls: ['https://mainnet.base.org'],
              nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
              blockExplorerUrls: ['https://basescan.org']
            }]
          });
        } else throw e;
      }
      // Re-init after chain switch
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
    }

    // Listen for account/chain changes
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) { account = null; signer = null; }
      else { account = accounts[0]; window.location.reload(); }
    });
    window.ethereum.on('chainChanged', () => window.location.reload());

    return account;
  }

  function getAccount() { return account; }
  function getProvider() { return provider; }
  function getSigner() { return signer; }
  function isConnected() { return !!account; }

  function shortAddress(addr) {
    if (!addr) return '';
    return addr.slice(0, 6) + '...' + addr.slice(-4);
  }

  // Check if wallet owns any registered NFT
  async function checkAccess() {
    if (!account) return false;
    const config = await loadConfig();
    const readProvider = new ethers.JsonRpcProvider(BASE_RPC);

    for (const nft of config.nftContracts) {
      try {
        if (nft.type === 'ERC1155') {
          const contract = new ethers.Contract(nft.address, ERC1155_ABI, readProvider);
          // Check token IDs if specified, otherwise check ID 0
          const ids = nft.tokenIds || [0];
          for (const id of ids) {
            const bal = await contract.balanceOf(account, id);
            if (bal > 0n) return true;
          }
        } else {
          // Default ERC721
          const contract = new ethers.Contract(nft.address, ERC721_ABI, readProvider);
          const bal = await contract.balanceOf(account);
          if (bal > 0n) return true;
        }
      } catch (e) {
        console.warn(`Failed to check NFT ${nft.name}:`, e.message);
      }
    }
    return false;
  }

  // Get MfT token balance (formatted)
  async function getMftBalance() {
    if (!account) return '0';
    const readProvider = new ethers.JsonRpcProvider(BASE_RPC);
    const mft = new ethers.Contract(MFT_TOKEN, ERC20_ABI, readProvider);
    const bal = await mft.balanceOf(account);
    const dec = await mft.decimals();
    return ethers.formatUnits(bal, dec);
  }

  // Get MfT contract instance (for approve, etc.)
  function getMftContract() {
    if (!signer) throw new Error('Wallet not connected');
    return new ethers.Contract(MFT_TOKEN, ERC20_ABI, signer);
  }

  return {
    connect,
    getAccount,
    getProvider,
    getSigner,
    isConnected,
    shortAddress,
    checkAccess,
    getMftBalance,
    getMftContract,
    loadConfig,
    MFT_TOKEN,
    BASE_CHAIN_ID,
    BASE_RPC,
  };
})();
