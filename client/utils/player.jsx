const rand_character_image = () =>
  [
    '/public/characters/albert.png',
    '/public/characters/blondie.png',
    '/public/characters/clown.png',
    '/public/characters/david.png',
    '/public/characters/developer.png',
    '/public/characters/doctor.png',
    '/public/characters/dummy.png',
    '/public/characters/gray.png',
    '/public/characters/guy.png',
    '/public/characters/Layer 22.png',
    '/public/characters/liberty.png',
    '/public/characters/playboy.png',
  ][Math.floor(Math.random() * 12)]

const rand_current_state = () =>
  ['hunting', 'attacking', 'hiding', 'playing'][Math.floor(Math.random() * 4)]

const rand_hp = () => Math.floor(Math.random() * 4000)

export const createRandomPlayers = (length) => {
  return Array.from({ length }).map((e, index) => {
    return createRandomPlayer(index)
  })
}

export const createCurrentPlayer = () => {
  const c_player = createRandomPlayer(100000)

  c_player.name = ''

  return c_player
}

const createRandomPlayer = (id) => {
  return {
    name: 'hunter' + id,
    character_image: rand_character_image(),
    current_state: rand_current_state(),
    player_hp: rand_hp(),
    player_id: id + '',
  }
}

// PLAYER HELPERS

const sortPlayersByHp = (players) => {
  return players.sort((a, b) => b?.player_hp - a?.player_hp)
}

export const seperatePlayersByState = (players) => {
  let seperatedPlayers = {
    attacking: [],
    hiding: [],
    hunting: [],
    playing: [],
  }

  players?.forEach((player) => {
    if (seperatedPlayers[player?.current_state]) {
      seperatedPlayers[player.current_state].push(player)
    }
  })

  seperatedPlayers.attacking = sortPlayersByHp(seperatedPlayers.attacking)
  seperatedPlayers.hiding = sortPlayersByHp(seperatedPlayers.hiding)
  seperatedPlayers.hunting = sortPlayersByHp(seperatedPlayers.hunting)
  seperatedPlayers.playing = sortPlayersByHp(seperatedPlayers.playing)

  return seperatedPlayers
}

export const getPlayerById = (players, player_id) => {
  return players.find((elm) => elm?.player_id === player_id)
}
