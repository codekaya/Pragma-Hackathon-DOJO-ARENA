export const REST_URL = 'https://dojoarena.onrender.com'
// export const RPC_URL = config.RPC_URL

export const headers = () => {
  return {
    headers: {
      Accept: 'application/json, text/plain, */*',
      Connection: 'keep-alive',
    },
  }
}

export const urlFetchGameWithId = () => `${REST_URL}/game`
export const urlFetchAllGame = () => `${REST_URL}/games/get`
export const urlFetchPlayerAliveGameWithId = () => `${REST_URL}/players/alive`
export const urlFetchGameAttacksWithId = () => `${REST_URL}/game/attacks`
export const urlFetchGameHidingWithId = () => `${REST_URL}/game/hides`
export const urlFetchGameHuntingWithId = () => `${REST_URL}/game/hunts`
