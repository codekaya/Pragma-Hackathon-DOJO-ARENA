export const create_history = ({ players }) => {
  const tmp_history = {
    attacks: [
      {
        time: '12:04',
        player1: players[8],
        player1_hp_change: -600,
        player2: players[1],
        player2_hp_change: -600,
      },
      {
        time: '12:03',
        player1: players[2],
        player2: players[3],
        player2_hp_change: 'waiting',
      },
      {
        time: '10:57',
        player1: players[4],
        player2: players[1],
        player2_hp_change: 'killed',
      },
      {
        time: '10:35',
        player1: players[5],
        player2: players[3],
        player2_hp_change: 'fail',
      },
    ],
    hides: [
      {
        time: '10:30',
        player: players[3],
      },
      {
        time: '10:20',
        player: players[1],
      },
    ],
    hunts: [
      {
        time: '15:50',
        player: players[0],
        player_hp_change: 450,
      },
      {
        time: '14:20',
        player: players[4],
        player_hp_change: -200,
      },
      {
        time: '14:10',
        player: players[3],
        player_hp_change: 900,
      },
      {
        time: '14:00',
        player: players[5],
        player_hp_change: 'dead',
      },
    ],
  }

  return tmp_history
}
