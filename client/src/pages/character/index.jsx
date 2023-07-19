import { useDispatch, useSelector } from 'react-redux'
import { setCharacterPopupInfo } from '../../../stores/game-store'
import React from 'react'
import clsx from 'clsx'

const Character = ({ character_image, player_data }) => {
  const dispatch = useDispatch()

  const hp_bar =
    player_data?.health > 2400
      ? 'high'
      : player_data?.health > 1000
      ? 'medium'
      : player_data?.health > 0
      ? 'low'
      : 'dead' // dead

  const handleCharacterClick = (elm) => {
    const playerId = elm?.currentTarget?.getAttribute('data-player-id')

    if (!playerId) {
      console.error("player id doesn't exists")
      return false
    }

    const elmPositions = elm?.currentTarget?.getBoundingClientRect()

    dispatch(
      setCharacterPopupInfo({
        open: true,
        player_id: playerId,
        position: {
          x: elmPositions.x,
          y: elmPositions.y,
        },
      }),
    )

    //const playerInfo = getPlayerById(players, playerId);

    //if (!playerInfo) { console.error("player info doesn't exists");return false;}

    //alert("Player info: " + JSON.stringify(playerInfo, null, 1));
  }

  return (
    <div
      className='chracterStyled'
      data-player-id={player_data?.player_id}
      // hp_bar={hp_bar}
      onClick={handleCharacterClick}
    >
      <img src={character_image} alt='Character image' className='w-[28px] h-[28px]' />
      <div
        className={clsx('w-full h-[5px] border-[3px] pointer-events-none', {
          'hp-bar-high': hp_bar === 'high',
          'hp-bar-medium': hp_bar === 'medium',
          'hp-bar-low': hp_bar === 'low',
        })}
      ></div>
    </div>
  )
}

export default Character

// TODO: hp bar design for dead
