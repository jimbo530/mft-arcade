# MfT Arcade

**Play-for-impact gaming portal on Base.** Live games powered by $MfT — every action routes value into deflationary tokenomics and locked liquidity for the underlying NFT collections.

> Arcade: https://tasern.quest/ — Network: Base (chain 8453)

## Games

| Game | Status | Modes | Wager |
|------|--------|-------|-------|
| [**Baselings**](https://tasern.quest/baseling/) | live | campaign | no |
| **Ooze Battle** | live | campaign · online-pvp | yes |

### Baselings
Tamagotchi-meets-DeFi. Hatch eggs, feed baselings, grow your POOP garden. Every feed permanently locks LP into a baseling vault; swap fees accrue to the holder forever. See [`baselings-mcp`](../baselings-mcp) for the AI-agent SDK.

### Ooze Battle
Fantasy puzzle battle — match oozes, chain combos, bury your opponent. Campaign + online PvP with wagers. Lives at [`games/ooze-battle/`](./games/ooze-battle/).

## Supported NFT collections

The arcade reads `arcade.json` to know which Base NFTs play. As of this commit:

- **Baseling** — `0xFCb825491490284189C75fD330Fd08Df5E9217b9`
- **Tales of Tasern Character** — `0x9de88faa0dbcfc75534d1b4fd277dadffcc4fd30`
- **Dreadmane Ravager** — `0xfaf9a6b6409b3e69f7d3b38099b41c45bbc29ba5`
- **Sir Garrick Lionheart** — `0xea39112525f9169038435cF22f82e5436e0BCC4F`
- **Captain Brinebeak** — `0x691e4bEF9A83C00f8A35ed601090E42A8b953c77`
- **Bunrick** — `0x63a9c72C90860eaa64A39A31E1A4B00305aA3974`
- **Vaelrith** — `0x4A35B948F49A169976FCCC96220676692c987A57`
- **Kira Emberstep** — `0x26CE8466eC418b7D42d8789476642cdFbB5e8aab`
- **Tharion Rootkeeper** — `0x76D50Fbc46a31aC21855b2b8218F4F642991c25e`
- **Rook Highbranch** — `0xB9c37Ce29A0966f83B29c905c434905301435D9d`
- **Captain Blackfeather** — `0x716AdcbEd9Ef58CCf11434Aa7962b0f200A030af`
- **Mason Ironhorn** — `0x412495cde08733715C2478c6EE00876ABF5e6CE8`

## Repository layout

```
arcade.json         — Registry: games, NFT contracts, status flags.
index.html          — Arcade front-end.
games/              — One subdirectory per game.
  ooze-battle/      — Self-contained puzzle game.
js/                 — Shared front-end utilities.
assets/             — Shared images / fonts / audio.
```

## Adding a game

1. Drop game files under `games/<your-game-id>/`.
2. Add an entry to `arcade.json` with `id`, `name`, `description`, `path`, `thumbnail`, `modes`, `wager`, `status`.
3. (Optional) Register any new NFT contracts in `arcade.json#nftContracts`.

## License

MIT
