#[derive(Serde, Copy, Drop, PartialEq)]
enum Action {
    Attack: (),
    Hide: (),
    Hunt: (),
}

#[system]
mod Attack {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::Into;
    use super::Action;

    

    use enter_the_dojo::components::game::{Game, GameTrait};
    use rollyourown::components::player::{ Stats, StatsTrait};
    use enter_the_dojo::constants::{
        ATTACK_DAMAGE, ATTACK_CHANCE, HIDE_POINT, HIDE_HEAL_CHANCE, HUNT_POINT, HUNT_DAMAGE, HUNT_CHANCE
    };

    #[event]
    fn PlayerAttacked(
        game_id: u32, player_id: felt252, opponent_id: felt252, action: Action, damage: u8, 
    ) {}

    #[event]
    fn GameOver(game_id: u32, winner: felt252 ) {}

    fn execute(ctx: Context, game_id: u32, action: Action, attack_to: felt252) {
        // gets player address
        let player_id: felt252 = ctx.caller_account.into();

        // read game entity
        let game_sk: Query = game_id.into();
        let game = commands::<Game>::entity(game_sk);

        // game condition checking
        assert(!game.is_finished, 'game is finished');
        assert(game.max_players > game.num_players, 'game is full');
        assert(game.start_time >= block_info.block_timestamp, 'already started');

        
        let player_sk: Query = (game_id, player_id).into();
        let special = commands::<Stats>::entity(player_sk);

        assert(Stats.turns_remaining > 0, 'no turn remained');

        commands::set_entity(
            player_sk, // player storage key
                (Stats { turns_remaining: Stats.turns_remaining - 1 })
        );
        

        // calculating outcome, use VRF for seed in the future
        let seed = starknet::get_tx_info().unbox().transaction_hash;
        let mut damage = calculate_damage(seed, action);
//-------------------------------
        // opposing player
        let opponent_id = if game.player_one == player_id {
            game.player_two
        } else {
            game.player_one
        };
        // only retrieve health for opponent player as their 
        // special component does not get updated
        let opponent_sk: Query = (game_id, opponent_id).into();
        let health = commands::<Health>::entity(opponent_sk);

        // check if killing blow
        let killing_blow = if damage >= health.amount {
            damage = health.amount;
            true
        } else {
            false
        };

        // update opponent health
        commands::set_entity(
            opponent_sk, // opponent storage key
             (Health { amount: health.amount - damage })
        );

        // update game state
        commands::set_entity(
            game_sk,
            (Game {
                player_one: game.player_one,
                player_two: game.player_two,
                next_to_move: opponent_id,
                num_moves: game.num_moves + 1,
                winner: if killing_blow {
                    player_id
                } else {
                    0
                }
            })
        );

        PlayerAttacked(game_id, player_id, opponent_id, action, damage);

        if killing_blow {
            GameOver(game_id, player_id, opponent_id);
        }
    }
//--------------------------------
    fn calculate_damage(seed: felt252, action: Action) -> u8 {
        match action {
            Action::Attack(()) => chance_hit(seed, ATTACK_CHANCE, ATTACK_DAMAGE),
            Action::Hide(()) => chance_hit(seed, HIDE_HEAL_CHANCE, HIDE_POINT),
            Action::Hunt(()) => chance_hit(seed, HUNT_CHANCE, HUNT_POINT),
        }
    }

    fn chance_hit(seed: felt252, likelihood: u8, damage: u8) -> u8 {
        let seed: u256 = seed.into();
        let result: u128 = seed.low % 100;

        if result <= likelihood.into() {
            damage
        } else {
            damage = damage * -1
            damage
        }
    }
}