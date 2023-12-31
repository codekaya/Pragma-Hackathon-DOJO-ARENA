
# DOJO Arena

![Github Actions][gha-badge]

[gha-badge]: https://img.shields.io/github/actions/workflow/status/cartridge-gg/rollyourown/test.yml?branch=main

DOJO Arena is a survivor game among nft collections, built on Starknet using the [Dojo Engine](https://github.com/dojoengine/dojo).

### Development

Install the latest Dojo toolchain from [releases](https://github.com/dojoengine/dojo/releases) or follow the [installation guide](https://book.dojoengine.org/getting-started/installation.html)

```bash
# Start Katana
katana --seed 0

# Build the game
sozo build

# Migrate the world, this will declare/deploy contracts to katana,
# update the world address in Scarb.toml
sozo migrate

# Create a game, execute calldata params are defined in SpawnGame system
sozo execute CreateGame --calldata 1686521389,2,30,1

# View the schema of the Game Component
sozo component schema Game
> struct Game {
>    start_time: u64
>    max_players: usize
>    num_players: usize
>    max_turns: usize
>    is_finished: bool
>    creator: u250
> }

# Start indexer, graphql endpoint at http://localhost:8080
torii --world-address 0x7f1d6c1b15e03673062d8356dc1174d5d85c310479ec49fe781e8bf89e4c4f8 --manifest path_to_target/manifest.json

```
Sozo will eventually contain all commands required to interact with your world. However, CLIs like [starknet-probe](https://github.com/kariy/starknet-probe) or [starkli](https://github.com/xJonathanLEI/starkli) can also be used to interact directly with Katana. Due to JSON-RPC spec differences starknetpy may have issues.



#### Future improvements

- VRF system will be added for randomness
- Games will be created for only NFT collections
- More importantly even NFT collections on L1 will be able to participate to the games with herodotus
- Front-end connection with torii
- More complex data structures
- Damage system will be updated