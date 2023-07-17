import React, { useEffect, useMemo, useState } from "react"
import { EditIcon } from "../../components/Icons"
import { useAppDispatch, useAppSelector } from "@/store"
import { gameActions } from "@/store/reducers/game-slice"

const MAX_HP = 4000
const HP_BAR_COUNT = 20
const HP_PER_BAR = MAX_HP / HP_BAR_COUNT

const CurrentPlayerInfo = () => {
  const [playerName, setPlayerName] = useState("")

  const dispatch = useAppDispatch()
  const currentPlayer = useAppSelector(state => state.game.current_player)

  useEffect(() => {
    if (currentPlayer?.player_data?.name) {
      setPlayerName(currentPlayer?.player_data?.name)
    }
  }, [currentPlayer?.player_data?.name])

  const handleCurrentPlayerNameChange = () => {
    if (playerName?.length > 0 && !currentPlayer?.player_data?.name) {
      dispatch(gameActions.setCurrentPlayerName(playerName))
    }
  }

  const handleNameInputChange = e =>
    setPlayerName(e?.currentTarget?.value || "")

  // calculate and render hp active bars of current player
  const renderHpBars = useMemo(() => {
    if (!currentPlayer?.player_data?.player_hp) return <></>
    //console.log("render hp bars");
    let user_hp_bar_active_count =
      (currentPlayer?.player_data?.player_hp || 0) / HP_PER_BAR

    return Array.from({ length: 5 }).map((e, groupIndex) => {
      return (
        <div
          className="player-hp-square-group"
          key={"player-hp-group-" + groupIndex}
        >
          {Array.from({ length: 4 }).map((k, barIndex) => {
            const active = user_hp_bar_active_count > 0
            if (active) {
              user_hp_bar_active_count--
            }
            return (
              <div
                className={"player-hp-square" + (active ? " active" : "")}
                key={"player-hp-bar-" + groupIndex + "_" + barIndex}
              ></div>
            )
          })}
        </div>
      )
    })
  }, [currentPlayer?.player_data?.player_hp])

  return (
    <>
      <div className="h-[62px] flex jst-center items-center ">
        <img
          src="/public/logo.png"
          width={222}
          height={34}
          alt="HunterPunks Logo"
          priority
        />
      </div>
      <div className="flex relative w-full h-[151px] items-center jst-center ">
        <div className="cardBgStyledIcon " />
        {currentPlayer?.player_data?.character_image && (
          <image
            src={currentPlayer?.player_data?.character_image}
            width={80}
            height={90}
            alt="Player Icon"
            priority
          />
        )}
      </div>
      <div className="relative w-full h-[34px] mt-[21px]">
        <div className="cardBgStyledEmpty" />
        <input
          className="w-full h-full text-[14px] text-white border-none pl-3  name-input placeholder:text-[ffffff99] disabled:name-input-disabled"
          placeholder="Name Your Champion"
          value={playerName}
          onChange={handleNameInputChange}
          disabled={Boolean(currentPlayer?.player_data?.name)}
        />
        {!currentPlayer?.player_data?.name && (
          <div className="absolute h-[21px] right-[14px] top-1 cursor-pointer opacity-10 hover:opacity-100 edit-icon" onClick={handleCurrentPlayerNameChange}>
            <EditIcon />
          </div>
        )}
      </div>
      <div className="relative mt-[27px]">
        <div className="text-white flex justify-between opacity-[85] text-[15px] pb-[2px] pl-1 pr-[11px]">
          <span>HP</span>
          <span>{currentPlayer?.player_data?.player_hp} / 4000</span>
        </div>
        <div className="flex relative w-full h-6 justify-center gap-[5.5px] items-center">
        <div className="cardBgStyledEmpty" />
          {renderHpBars}
        </div>
      </div>
      <div className="player-socials"></div> //TODO bu kisim tanimlanmamis
    </>
  )
}

export default CurrentPlayerInfo
