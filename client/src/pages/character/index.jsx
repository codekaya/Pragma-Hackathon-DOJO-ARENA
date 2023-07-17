import { useAppDispatch } from "@/store"
import { gameActions } from "@/store/reducers/game-slice"
import Image from "next/image"
import React from "react"
import clsx from 'clsx'

const Character = ({ character_image, player_data }) => {
  const dispatch = useAppDispatch()

  const hp_bar =
    player_data?.player_hp > 2400
      ? "high"
      : player_data?.player_hp > 1000
      ? "medium"
      : player_data?.player_hp > 0
      ? "low"
      : "dead" // dead

  // TODO: hp bar design for dead

  const handleCharacterClick = elm => {
    const playerId = elm?.currentTarget?.getAttribute("data-player-id")

    if (!playerId) {
      console.error("player id doesn't exists")
      return false
    }

    const elmPositions = elm?.currentTarget?.getBoundingClientRect()

    dispatch(
      gameActions.setCharacterPopupInfo({
        open: true,
        player_id: playerId,
        position: {
          x: elmPositions.x,
          y: elmPositions.y
        }
      })
    )

    //const playerInfo = getPlayerById(players, playerId);

    //if (!playerInfo) { console.error("player info doesn't exists");return false;}

    //alert("Player info: " + JSON.stringify(playerInfo, null, 1));
  }

  return (
    <div className="chracterStyled"
      data-player-id={player_data?.player_id}
      hp_bar={hp_bar}
      onClick={handleCharacterClick}
    >
      <Image
        src={character_image}
        width={20}
        height={28}
        alt="Character image"
      />
      <div
            className={clsx(
              'w-full h-[5px] border-[3px] pointer-events-none',
              {
                'hp-bar-high': hp_bar === "high",
                'hp-bar-medium': hp_bar === "medium",
                'hp-bar-low': hp_bar === "low",
              },
            )}
       ></div>
    </div>
  )
}

export default Character
