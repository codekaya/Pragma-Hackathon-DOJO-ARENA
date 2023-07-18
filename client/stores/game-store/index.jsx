import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'
import { seperatePlayersByState } from '../../utils/player'
import { headers, urlFetchAllGame, urlFetchGameWithId } from '../../services/configurl'

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
}

export const fetchGameWithId = createAsyncThunk('game/fetchGameWithId', async (game_id) => {
  const url = urlFetchGameWithId()
  const res = await Axios.post(url, { game_id }, headers())
  // console.log('RESSS', res.data)

  return res.data
})

export const fetchAllGame = createAsyncThunk('game/fetchAllGame', async () => {
  const url = urlFetchAllGame()
  const res = await Axios.get(url, headers())
  console.log('RESSS', res.data)

  return res.data
})

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
        console.log('Hata:', action.error.message) // Hata mesajını konsola yazdırabilirsiniz
      })

    builder.addCase(fetchAllGame.fulfilled, (state, action) => {
      state.all_game = { result: action.payload, inProgress: false }
    }),
      builder.addCase(fetchAllGame.pending, (state, action) => {
        state.all_game = { ...state.all_game, inProgress: true }
      }),
      builder.addCase(fetchAllGame.rejected, (state, action) => {
        state.all_game = { ...state.all_game, inProgress: false }
        console.log('Hata:', action.error.message) // Hata mesajını konsola yazdırabilirsiniz
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
