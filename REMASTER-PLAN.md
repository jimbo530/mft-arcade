# Sea Remaster Plan — our arcade games, reskinned with art we already own

**Goal:** turn the arcade games we already built into a **Seize the Seas** pack, by
**swapping the art, not rebuilding the game**. We own ~100 finished arcade games and a
full set of pirate/sea sprites. Most of these remasters are a **30–60 minute art swap**.

**The whole pack needs only 3 brand-new pictures from you:** a **ship**, a **cannon**, and
a **cannonball**. Everything else — barrels, crates, chests, gold, gems, fish, nets, crabs,
serpents, docks, decks, the crew — **already exists on disk**. Paths are listed under each
game so anyone can find them.

Two important folders (the art lives in a **different place** than the games):
- **Crew, props, enemies:** `C:/Users/bigji/Documents/MfT-Launch/site/games/art/acorn/`
- **Treasure, gear, room scenes:** `C:/Users/bigji/Documents/MfT-Launch/game/art/`
- **The games:** `C:/Users/bigji/Documents/MfT-Launch/site/games/`

> **One plumbing step per game:** the games load art from inside `site/games/`. The treasure
> icons live in the other tree (`game/art/`). So for each remaster, **copy the few icons you
> use into a new `site/games/art/sea/` folder** and point the game at them. Five minutes.

---

## ⭐ DO FIRST — three games that need ZERO new art

Ship these three first. They reuse a finished game **and** finished sprites, so they are a
pure swap — no waiting on art.

1. **Cross the Docks** (lane-crossing) — every piece it needs already exists. **Best first pick.**
2. **Treasure Grab** (maze-chase) — built on `poop-powers`, one of our reference remasters.
3. **Sea-Floor Salvage** (dig-and-drop) — built on `tunnel-bug`, also a reference remaster.

Then do **Sea Serpent** and **Powder Keg** (also near-zero art), then the two cannon games
once you've drawn the ship + cannon + cannonball.

---

## The picks

### 1. Cross the Docks  — (lane-crossing)  · DO FIRST · zero new art
- **Mechanic:** hop a crew member up the screen across lanes of **rolling barrels** and
  patrolling **carts**, then ride **floating logs and crates** over open water to safe
  moorings. Carry cargo for a bonus.
- **Theme:** crossing a busy harbor — dodge the dock traffic, raft the channel.
- **Reuses (all on disk):**
  - Player: `site/games/art/acorn/acornboy.png`, `acorngirl.png`
  - Rideables: `site/games/art/acorn/log.png`, `crate.png`
  - Road hazards: `site/games/art/acorn/barrel.png`, `minecart.png`
  - Water lanes: `site/games/art/acorn/water.png`
  - Backdrop: `game/art/rooms/job-str-docks.png`
  - Carry-bonus icon: `game/art/gear/cargo-crate.png`
- **New art:** **none.**
- **Build:** reskin `site/games/swamp-hop.html`. Standard engine, follow `REMASTER-GUIDE.md`.
  **Effort: quick (under 1 hour).**

### 2. Treasure Grab  — (maze-chase)  · DO FIRST · zero new art
- **Mechanic:** steer a crew member through a **dock maze** hoovering up **gold-coin** pips.
  Grab a **grog-barrel** power-pellet to briefly turn the chasing **crabs** edible. A
  **treasure-chest** is the bonus "fruit."
- **Theme:** raiding the wharf storehouse before the guards catch you.
- **Reuses (all on disk):**
  - Player: `site/games/art/acorn/acornboy.png`, `acorngirl.png`
  - Pips: `game/art/gear/gold-coins.png`
  - Bonus: `game/art/gear/treasure-chest.png`, `gem-ruby.png`
  - Power-pellet: `site/games/art/acorn/barrel.png`
  - Chasers: `site/games/art/acorn/scarab-walk1.png` / `scarab-walk2.png` (crabs),
    `enemy-beetle.png`
  - Maze tint / HUD: `game/art/rooms/deck.png`
- **New art:** **none** (optional: recolor the maze walls to dock planks).
- **Build:** reskin `site/games/poop-powers.html` — it's a **reference remaster**, so the
  pattern is already proven. AI for the chasers is untouched, art only.
  **Effort: quick (under 1 hour).**

### 3. Sea-Floor Salvage  — (dig-and-drop)  · DO FIRST · zero new art
- **Mechanic:** dig tunnels through the **seabed** to reach **buried treasure**, while
  inflating/popping **eels** and **crabs** and dropping **rocks** on them.
- **Theme:** a diver digging the sea floor for sunken loot.
- **Reuses (all on disk):**
  - Diver: `site/games/art/acorn/acornboy.png`
  - Enemies: `site/games/art/acorn/enemy-snake.png` (eel),
    `scarab-walk1.png` / `scarab-walk2.png` (crab)
  - Droppable boulder: `site/games/art/acorn/rock.png`
  - Buried loot: `game/art/gear/treasure-chest.png`, `gold-coins.png`, `pearl.png`
  - Seabed backdrop: `site/games/art/scenery/cave/bg.png`
- **New art:** **none** (optional: recolor existing `crystal.png` into an air bubble).
- **Build:** reskin `site/games/tunnel-bug.html`. This is a **bespoke-engine (Type B)** game
  and a reference remaster — the guide's Step-0 note covers it; **don't bolt on the shared
  engine.** Art swap only. **Effort: quick (under 1 hour).**

### 4. Sea Serpent  — (growing-serpent grid)  · near-zero art
- **Mechanic:** a **sea serpent** slithers the grid eating **fish** and treasure, growing a
  longer tail. Hit a wall or your own body and the run ends; speed rises with length.
- **Theme:** the harbor monster, fed on fish and gold.
- **Reuses (all on disk):**
  - Body/tail segments: `site/games/art/acorn/enemy-snake.png` (tiles cleanly)
  - Food: `game/art/gear/fish.png`, `gold-coins.png`, `gem-emerald.png`
  - Board tile: `site/games/art/acorn/water.png`
  - Frame/backdrop: `game/art/rooms/job-dex-nets.png`
- **New art:** at most **one serpent HEAD frame** — or just reuse the existing
  `site/games/art/enemies/enemy-wyrm.jpg` as the head. So realistically **none.**
- **Build:** reskin `site/games/spore-serpent.html`. Tile the snake sprite as segments, point
  a head sprite by direction, swap the food. **Effort: quick (under 1 hour).**

### 5. Powder Keg  — (blast-maze)  · zero new art
- **Mechanic:** a grid maze; drop **powder kegs** that blast in a cross to clear **crate**
  walls and catch **raiders**. Broken crates spill treasure and chain-blast upgrades.
- **Theme:** blowing open the smugglers' crate-stacked hold.
- **Reuses (all on disk):**
  - Player: `site/games/art/acorn/acornboy.png`, `acorngirl.png`
  - Destructible walls: `site/games/art/acorn/crate.png`
  - Bombs/kegs: `site/games/art/acorn/barrel.png`
  - Raiders: `site/games/art/acorn/enemy-beetle.png`, `scarab-walk1.png` / `scarab-walk2.png`
  - Loot from crates: `game/art/gear/gold-coins.png`, `gem-emerald.png`
- **New art:** **none** (a lit-fuse version of `barrel.png` is a nice-to-have, not required).
- **Build:** reskin `site/games/poop-bomber.html`. Art swap only. **Effort: quick (under 1 hour).**

### 6. Hull Breaker  — (paddle brick-smash)  · wager game · ~zero new art
- **Mechanic:** a **raft paddle** bounces a **cannonball** up to smash a wall of enemy
  **hull-planks** and stacked **cargo crates**. Gems and gold spill from broken cargo;
  iron-banded crates take two hits.
- **Theme:** battering an enemy ship's hull apart, plank by plank.
- **Reuses (all on disk):**
  - Brick wall / hull: `site/games/art/acorn/crate.png`, `barrel.png`,
    `game/art/gear/cargo-crate.png`
  - Power-up drops: `game/art/gear/gem-diamond.png`, `gold-coins.png`, `pearl.png`
  - Backdrop: `game/art/rooms/shipyard.jpg` or `deck.png`
- **New art:** ideally a **cannonball** (ball) and a **raft** (paddle) — **but you can ship
  with zero new art** by using `site/games/art/acorn/acorn-coin.png` as the ball and
  `crate.png` as the paddle, then upgrade later.
- **Build:** reskin `site/games/spore-breaker.html`. This is a **Type B + wager** game —
  keep the wager wiring and use `getMults({ pvp:true })` per the guide. **Effort: quick
  (under 1 hour)** with stand-ins; a bit more once the real ball/paddle art arrives.

### 7. Cannon Volley  — (fixed-cannon wave shooter)  · needs the core new art
- **Mechanic:** a **deck cannon** slides left/right firing **cannonballs UP** at descending
  rows of **raider ships/birds**. Destructible **cargo stacks** shield you. Cleared waves
  **drop treasure.**
- **Theme:** holding the deck against a sky full of raiders.
- **Reuses (all on disk):**
  - Bunkers/shields: `site/games/art/acorn/barrel.png`, `crate.png`
  - Raider rows: `site/games/art/acorn/enemy-wasp.png`, `enemy-beetle.png`, `enemy-snake.png`
  - Wave-clear drops: `game/art/gear/gold-coins.png`, `gem-diamond.png`
  - Backdrop: `game/art/rooms/port.jpg` or `deck.png`
- **New art (the important set):**
  - **Cannon turret** (the player)
  - **Cannonball** (the shot)
  - *(optional)* one **raider airship** — or just scale up `enemy-wasp.png`
- **Build:** reskin `site/games/spore-swarm.html` (shared engine). Player → cannon, bullet
  → cannonball, alien rows → raiders, bunkers → crate/barrel. **Effort: quick reskin once the
  cannon + cannonball art exists (~1 hour of code).**

### 8. Sky Raiders  — (diving-swarm shooter)  · needs ship + cannonball · most code
- **Mechanic:** your **ship** holds the bottom; raider **birds/skiffs** fly in, form up, then
  **peel off in diving swoops**. Shoot them on the dive; rescue a captured crewmate for a
  twin-gun bonus.
- **Theme:** the deluxe version of Cannon Volley — swooping attackers, captured crew.
- **Reuses (all on disk):**
  - Diving raiders: `site/games/art/acorn/enemy-wasp.png`; escorts `enemy-beetle.png`
  - Drops: `game/art/gear/gem-ruby.png`, `gold-coins.png`
  - Capturable crewmate: `site/games/art/acorn/acornboy.png`
  - Backdrop: `game/art/rooms/port.jpg`
- **New art:** **player ship** + **cannonball** — *the same two pieces drawn for Cannon
  Volley, reused here.* Optional distinct raider-airship (else reuse `enemy-wasp.png`).
- **Build:** start from `site/games/spore-swarm.html` and borrow the dive/drift movement
  already written in `site/games/spore-storm.html` (same engine family). **Effort: half-day —
  more than a pure reskin because you're merging two behaviors.** Do it **after** Cannon
  Volley so the ship/cannonball art already exists.

---

## Stretch pick (later)

### Barrel Drift  — (drift-and-shoot debris field)
- **Mechanic:** a **top-down ship** rotates and thrusts with screen-wrap, firing
  **cannonballs** that shatter drifting **barrels/crates** into smaller debris. Floating
  **chests** split into gold; a **kraken** hunts you.
- **Reuses:** `site/games/art/acorn/barrel.png`, `crate.png`, `rock.png` (the drifting debris);
  `game/art/gear/treasure-chest.png`, `gold-coins.png`; kraken = `enemy-snake.png` tentacle +
  `site/games/art/enemies/enemy-wyrm.jpg` head.
- **New art:** a **top-down ship** + the **cannonball** (the recurring two).
- **Build:** **we have no drift-and-shoot game yet**, so this is the one that needs a **fresh small
  build** (lift the debris-spawning from `spore-storm.html` and the rotate-and-fire math from
  `spore-force.html`). **Effort: about a day.** Lowest priority — save it for last.

---

## Art shopping list for the founder

The entire 8-game pack collapses to **three must-draw sprites**, plus two optional ones.
Match the chunky pixel style of the acorn art (see `D:/grok-sprites/acorn/INVENTORY.md`).

**Must draw (unlocks the two cannon games):**
1. **Player ship** — two angles ideally: a **side/deck cannon** view (for Cannon Volley) and
   a **top-down** view (for Sky Raiders + Barrel Drift). One good top-down can cover all three
   at a pinch.
2. **Cannon turret** — the player's firing piece for Cannon Volley.
3. **Cannonball** — small round projectile, reused by every cannon game.

**Optional (nice-to-have, each has a working stand-in already):**
4. **Raider airship** — or we just scale up `enemy-wasp.png`.
5. **Kraken head** — or we reuse `site/games/art/enemies/enemy-wyrm.jpg`.

**You do NOT need to draw:** barrels, crates, chests, gold, gems, pearls, fish, nets,
amphoras, crabs, beetles, snakes/eels, wasps, the crew, docks, decks, the shipyard, or water.
**All of that is already on disk** and cited above.

---

## How each remaster gets built (the recipe)

Every game above follows the existing **`site/games/REMASTER-GUIDE.md`** (a 30–60 minute,
step-by-step recipe). The short version:
1. **Copy** the handful of icons the game uses into a new `site/games/art/sea/` folder.
2. **Swap** the sprite references in the game's HTML to the sea art (player, enemies, props,
   pickups, background).
3. **Keep** everything else — the engine, the NFT gate, the wager hooks, the baseling stat
   wiring, touch controls, and audio are **untouched**.
4. **Test** over http and confirm zero console errors (the guide's Step 8 checklist).

Two engine notes from the guide that matter here:
- **`tunnel-bug` and `spore-breaker` are "Type B"** (bespoke engines) — the recipe handles
  them; just **don't** add the shared `tasern-engine.js` to those two.
- **`spore-breaker` (Hull Breaker) is a wager game** — keep the wager wiring and call
  `getMults({ pvp:true })`.

---

## Order of operations (summary)

| # | Game | Mechanic | Reskin file | New art | Effort |
|---|------|---------|-------------|---------|--------|
| 1 | Cross the Docks | lane-crossing | `swamp-hop.html` | none | quick |
| 2 | Treasure Grab | maze-chase | `poop-powers.html` | none | quick |
| 3 | Sea-Floor Salvage | dig-and-drop | `tunnel-bug.html` | none | quick |
| 4 | Sea Serpent | growing-serpent grid | `spore-serpent.html` | ~none (reuse wyrm) | quick |
| 5 | Powder Keg | blast-maze | `poop-bomber.html` | none | quick |
| 6 | Hull Breaker | paddle brick-smash | `spore-breaker.html` | ship w/ stand-ins | quick |
| 7 | Cannon Volley | fixed-cannon waves | `spore-swarm.html` | **cannon + cannonball** | quick* |
| 8 | Sky Raiders | diving swarm | `spore-swarm.html` + `spore-storm.html` | **ship + cannonball** | half-day |
| — | Barrel Drift | drift-and-shoot | fresh build | **ship + cannonball** | ~1 day |

\* quick **once the cannon + cannonball art exists.**

**Do the first 5 now (no art blocked).** Draw the **ship, cannon, cannonball** in parallel,
then knock out 6–8.
