#[system]
mod JoinGame {
    use traits::Into;
    use box::BoxTrait;
    use array::ArrayTrait;

    use dojoarena::components::{game::Game, player::{Stats,StatsTrait}};
    use dojoarena::constants::MAX_HEALTH;

    #[event]
    fn PlayerJoined(game_id: u32, player_id: felt252) {}

    fn execute(ctx: Context, game_id: u32) -> felt252 {
        let block_info = starknet::get_block_info().unbox();
        let player_id: felt252 = ctx.caller_account.into();

        let game_sk: Query = game_id.into();
        let game = commands::<Game>::entity(game_sk);
        assert(!game.is_finished, 'game is finished');
        assert(game.max_players > game.num_players, 'game is full');
        assert(game.start_time <= block_info.block_timestamp, 'already started');

        commands::set_entity(
            (game_id, player_id).into(),
            (
                Stats {
                    health: MAX_HEALTH, turns_remaining: game.max_turns
                    },
            )
        );
        commands::set_entity(
            game_sk,
            (Game {
                start_time: game.start_time,
                max_players: game.max_players,
                num_players: game.num_players + 1,
                max_turns: game.max_turns,
                is_finished: false,
                creator: game.creator,
            })
        );

        PlayerJoined(game_id, player_id);
        player_id
    }
}
