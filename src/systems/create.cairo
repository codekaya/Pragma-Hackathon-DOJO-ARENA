#[system]
mod CreateGame {
    use array::ArrayTrait;
    use traits::Into;

    use rollyourown::components::game::Game;
    use rollyourown::components::player::Stats;

    #[event]
    fn GameCreated(
        game_id: u32,
        creator: felt252,
        start_time: u64,
        max_turns: usize,
        max_players: usize,
    ) {}

    fn execute(
        ctx: Context, start_time: u64, max_players: usize, max_turns: usize
    ) -> (u32, felt252) {
        let player_id: felt252 = ctx.caller_account.into();

        let game_id = commands::uuid();
        commands::set_entity(
            game_id.into(),
            (Game {
                start_time,
                max_players,
                num_players: 1,
                max_turns,
                is_finished: false,
                creator: player_id,
            })
        );

        commands::set_entity(
            (game_id, player_id).into(),
            (
                Stats {
                    health: 100, turns_remaining: max_turns
                    },  
            )
        );

        GameCreated(game_id, player_id, start_time, max_players, max_turns);
        (game_id, player_id)
    }
}