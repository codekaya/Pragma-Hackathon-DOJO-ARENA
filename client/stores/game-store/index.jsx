import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'
import { seperatePlayersByState } from '../../utils/player'
import {
  headers,
  urlFetchAllGame,
  urlFetchGameAttacksWithId,
  urlFetchGameHidingWithId,
  urlFetchGameHuntingWithId,
  urlFetchGameWithId,
  urlFetchPlayerAliveGameWithId,
} from '../../services/configurl'

const initialState = {
  current_player: {},
  players: [],
  players_by_states: {
    attacking: [],
    hiding: [],
    hunting: [],
    playing: [],
  },
  character_popup: {
    open: false,
    player_id: '',
    position: {
      x: 0,
      y: 0,
    },
  },
  history: {
    hunts: [],
    hides: [],
    attacks: [],
  },
  accounts: [],
  wallet_connected: false,
  current_game: {
    result: {},
    inProgress: false,
  },

  all_game: {
    result: {},
    inProgress: false,
  },
  players_alive: {
    result: {},
    inProgress: false,
  },

  game_attacks: {
    result: {},
    inProgress: false,
  },

  game_hiding: {
    result: {},
    inProgress: false,
  },

  game_hunting: {
    result: {},
    inProgress: false,
  },
}

export const fetchGameWithId = createAsyncThunk('game/fetchGameWithId', async (gameId) => {
  const url = urlFetchGameWithId()
  const res = await Axios.post(url, { game_id: gameId }, headers())

  return res.data
})

export const fetchAllGame = createAsyncThunk('game/fetchAllGame', async () => {
  const url = urlFetchAllGame()
  const res = await Axios.get(url, headers())

  return res
})

export const fetchPlayerAliveWithGameId = createAsyncThunk(
  'game/fetchPlayerAliveWithGameId',
  async (gameId) => {
    const url = urlFetchPlayerAliveGameWithId()
    const res = await Axios.post(url, { game_id: gameId }, headers())

    return res?.data?.user
  },
)

export const fetchGameAttacksWithGameId = createAsyncThunk(
  'game/fetchGameAttacksWithGameId',
  async (gameId) => {
    const url = urlFetchGameAttacksWithId()
    const res = await Axios.post(url, { game_id: gameId }, headers())

    return res?.data?.user
  },
)

export const fetchGameHidingWithGameId = createAsyncThunk(
  'game/fetchGameHidingWithGameId',
  async (gameId) => {
    const url = urlFetchGameHidingWithId()
    const res = await Axios.post(url, { game_id: gameId }, headers())

    return res?.data?.user
  },
)

export const fetchGameHuntingWithGameId = createAsyncThunk(
  'game/fetchGameHuntingWithGameId',
  async (gameId) => {
    const url = urlFetchGameHuntingWithId()
    const res = await Axios.post(url, { game_id: gameId }, headers())

    return res?.data?.user
  },
)

export const { reducer, actions } = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      return {
        ...state,
        players: action.payload,
        players_by_states: seperatePlayersByState(action.payload),
      }
    },
    setCurrentPlayerInfo: (state, action) => {
      if (state?.current_player) {
        state.current_player.player_data = action.payload
      }
    },
    setCurrentPlayerName: (state, action) => {
      if (!action?.payload) return state

      if (state?.current_player?.player_data) {
        state.current_player.player_data.name = action.payload

        const playerIndex = state.players.findIndex(
          (elm) => elm?.player_id === state?.current_player?.player_data?.player_id,
        )

        state.players[playerIndex].name = action?.payload
      }
    },
    setCharacterPopupInfo: (state, action) => {
      state.character_popup = action.payload
    },
    setHistory: (state, action) => {
      return {
        ...state,
        history: {
          ...state.history,
          attacks: action.payload.attacks ? action.payload.attacks : state.history.attacks,
          hides: action.payload.hides ? action.payload.hides : state.history.hides,
          hunts: action.payload.hunts ? action.payload.hunts : state.history.hunts,
        },
      }
    },
    setAccounts: (state, action) => {
      state.accounts = action.payload
    },
    setWalletConnected: (state, action) => {
      state.wallet_connected = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameWithId.fulfilled, (state, action) => {
      state.current_game = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchGameWithId.pending, (state, action) => {
        state.current_game = { ...state.current_game, inProgress: true }
      }),
      builder.addCase(fetchGameWithId.rejected, (state, action) => {
        state.current_game = { ...state.current_game, inProgress: false }
      })

    builder.addCase(fetchAllGame.fulfilled, (state, action) => {
      state.all_game = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchAllGame.pending, (state, action) => {
        state.all_game = { ...state.all_game, inProgress: true }
      }),
      builder.addCase(fetchAllGame.rejected, (state, action) => {
        state.all_game = { ...state.all_game, inProgress: false }
      })

    builder.addCase(fetchPlayerAliveWithGameId.fulfilled, (state, action) => {
      state.players_alive = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchPlayerAliveWithGameId.pending, (state, action) => {
        state.players_alive = { ...state.players_alive, inProgress: true }
      }),
      builder.addCase(fetchPlayerAliveWithGameId.rejected, (state, action) => {
        state.players_alive = { ...state.players_alive, inProgress: false }
      })

    builder.addCase(fetchGameAttacksWithGameId.fulfilled, (state, action) => {
      state.game_attacks = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchGameAttacksWithGameId.pending, (state, action) => {
        state.game_attacks = { ...state.game_attacks, inProgress: true }
      }),
      builder.addCase(fetchGameAttacksWithGameId.rejected, (state, action) => {
        state.game_attacks = { ...state.game_attacks, inProgress: false }
      })

    builder.addCase(fetchGameHidingWithGameId.fulfilled, (state, action) => {
      state.game_hiding = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchGameHidingWithGameId.pending, (state, action) => {
        state.game_hiding = { ...state.game_hiding, inProgress: true }
      }),
      builder.addCase(fetchGameHidingWithGameId.rejected, (state, action) => {
        state.game_hiding = { ...state.game_hiding, inProgress: false }
      })

    builder.addCase(fetchGameHuntingWithGameId.fulfilled, (state, action) => {
      state.game_hunting = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchGameHuntingWithGameId.pending, (state, action) => {
        state.game_hunting = { ...state.game_hunting, inProgress: true }
      }),
      builder.addCase(fetchGameHuntingWithGameId.rejected, (state, action) => {
        state.game_hunting = { ...state.game_hunting, inProgress: false }
      })
  },
})

export const {
  setPlayers,
  setCurrentPlayerInfo,
  setCurrentPlayerName,
  setCharacterPopupInfo,
  setHistory,
  setAccounts,
  setWalletConnected,
} = actions
