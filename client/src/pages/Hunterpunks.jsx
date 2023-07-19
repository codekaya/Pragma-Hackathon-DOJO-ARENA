import GameTopInfo from './game-top-info/index'
import CurrentPlayerInfo from './current-player-info/index'
import GameArea from './game-area/index'
import GameHistory from './game-history/index'

import CharacterPopup from './character-popup'
import { useDispatch, useSelector } from 'react-redux'

import { create_history } from '../../utils/history'
import { createCurrentPlayer, createRandomPlayers } from '../../utils/player'
import { connectWallet } from '../web3/Wallet'
import { useCallback, useEffect } from 'react'
import { LOCAL_WALLET_CONNECTED } from '../../utils/constants'
import {
  setPlayers,
  setCurrentPlayerInfo,
  setHistory,
  setAccounts,
  setWalletConnected,
  fetchGameWithId,
  fetchAllGame,
  fetchPlayerAliveWithGameId,
  fetchGameAttacksWithGameId,
  fetchGameHidingWithGameId,
  fetchGameHuntingWithGameId,
} from '../../stores/game-store'
import { useParams } from 'react-router-dom'

export default function HunterPunks() {
  const { gameId } = useParams()

  const dispatch = useDispatch()

  const gameState = useSelector((state) => state.game)
  const {
    current_game: { result: current_game },
    current_game: { inProgress: current_game_inprogress },
    players_alive: { result: players_alive },
    players_alive: { inProgress: players_alive_inprogress },
    game_attacks: { result: game_attacks },
    game_attacks: { inProgress: game_attacks_inprogress },
    game_hiding: { result: game_hiding },
    game_hiding: { inProgress: game_hiding_inprogress },
    game_hunting: { result: game_hunting },
    game_hunting: { inProgress: game_hunting_inprogress },
  } = useSelector((state) => state.game)

  let didInit = false

  const getPlayers = (playersLength) => {
    const c_player = createCurrentPlayer()

    return {
      tmpPlayers: [...createRandomPlayers(playersLength), c_player],
      currentPlayer: c_player,
    }
  }

  const initPlayers = useCallback(
    (playersLength = 10) => {
      const { tmpPlayers, currentPlayer } = getPlayers(playersLength)

      dispatch(setPlayers(tmpPlayers))
      dispatch(setCurrentPlayerInfo(currentPlayer))
    },
    [dispatch],
  )

  const initHistory = useCallback(() => {
    const tmpHistory = create_history({
      players: gameState.players,
    })

    dispatch(setHistory(tmpHistory))
  }, [dispatch, gameState.players])

  useEffect(() => {
    if (current_game && !current_game.length && !current_game_inprogress) {
      dispatch(fetchGameWithId(gameId && gameId))
      // dispatch(fetchAllGame())
    }

    if (players_alive && !players_alive.length && !players_alive_inprogress) {
      dispatch(fetchPlayerAliveWithGameId(gameId && gameId))
    }

    if (game_attacks && !game_attacks.length && !game_attacks_inprogress) {
      dispatch(fetchGameAttacksWithGameId(gameId && gameId))
    }

    if (game_hiding && !game_hiding.length && !game_hiding_inprogress) {
      dispatch(fetchGameHidingWithGameId(gameId && gameId))
    }

    if (game_hunting && !game_hunting.length && !game_hunting_inprogress) {
      dispatch(fetchGameHuntingWithGameId(gameId && gameId))
    }
  }, [])

  //temporary generate players
  useEffect(() => {
    //console.log("useEffect - initPlayers");
    if (!didInit) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      didInit = true

      initPlayers()
    }
  }, [])

  useEffect(() => {
    //console.log("useEffect - initHistory");
    if (!didInit) {
      initHistory()
    }
  }, [initHistory, didInit])

  //console.log("MainGame render");

  const handleConnectWallet = async () => {
    if (gameState.accounts.length > 0 && gameState.wallet_connected) {
      alert('Wallet is already connected')
      return
    }

    const accounts = await connectWallet()

    if (accounts && accounts?.length > 0) {
      dispatch(setAccounts(accounts))
      dispatch(setWalletConnected(true))

      localStorage.setItem(LOCAL_WALLET_CONNECTED, 'true')
    } else {
      alert("Couldn't connect")
    }
  }

  return (
    <div className='flex h-full justify-center items-center'>
      <div className='fixed top-0 left-0 w-full h-full '>
        <img
          src='/main-bg.png'
          className='absolute min-h-[100vh] min-w-[100vw] left-0 top-0 right-0 bottom-0 text-transparent main-bg-img after:main-bg-after'
          alt='Background Image'
        />

        <div className='absolute min-h-[100vh] min-w-[100vw] left-0 top-0 right-0 bottom-0 text-transparent main-bg-after'></div>
      </div>

      <div className='flex justify-center items-start gap-[10px] relative z-40 mt-20'>
        <div className='w-[273px] shrink-0'>
          <CurrentPlayerInfo />
          {/* <button onClick={handleConnectWallet}>Connect wallet</button> */}
          <button
            onClick={() =>
              getAllEvents(
                web3Obj.ctc,
                8211050,
                web3Obj.provider && web3Obj.provider.getBlockNumber(),
              )
            }
          >
            Test getEvents
          </button>
          <br />
          <br />
          <br />
          <br />

          <div>
            <button onClick={() => initPlayers(1000)}>
              Reset with 1000 players <br />
              (future real player count)
            </button>
          </div>
          <div>
            <button onClick={() => initPlayers(100)}>Reset with 100 players</button>
          </div>
          <div>
            <button onClick={() => initPlayers(10)}>Reset with 10 players</button>
          </div>
        </div>
        <div className='w-[640px] flex-shrink-0'>
          <GameTopInfo data={current_game?.user} />
          <GameArea />
          <div className='game-actions'>
            {' '}
            <div className='game-top-buttons'></div>
            <div className='game-attack-input'></div>
          </div>
        </div>
        <div className='w-[271px]'>
          <GameHistory />
        </div>
      </div>
      <CharacterPopup />
    </div>
  )
}

//TODO redux entegrasyonu ve func kisimlari tamamlanacak

//TODO 3 divin css tanimi eksik (ana repoda) --> game-actions-game-top-buttons-game-attack-input
