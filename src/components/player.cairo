
#[derive(Component, Copy, Drop, Serde)]
struct Stats {
    health: u8,
    turns_remaining: usize,
}

trait StatsTrait {
    fn can_continue(self: @Stats) -> bool;
}

impl StatsImpl of StatsTrait {
    fn can_continue(self: @Stats) -> bool {
        if *self.health == 0 {
            return false;
        }
        if *self.turns_remaining == 0 {
            return false;
        }

        true
    }
}
