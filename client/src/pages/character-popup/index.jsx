import { DiscordIcon, HeartIcon, TwitterIcon } from '@/components/icons'
import { useAppDispatch, useAppSelector } from '@/store'
import { gameActions } from '@/store/reducers/game-slice'
import CardBgStyled from '@/styles/card-bg.styled'
import { getPlayerById } from '@/utils/player.util'
import Image from 'next/image'
import React, { useEffect, useMemo, useRef } from 'react'
import InfoTooltip from '../info-tooltip'
import { CharacterPopupStlyed } from './style'
import Button from '../../styles/button'

const CharacterPopup = () => {
  const { character_popup: popupState, players } = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()
  const popupRef = useRef(null)
  const popupOpenRef = useRef(popupState?.open)

  //const [popupPlayerData, setPopupPlayerData] = useState<PlayerType>();
  const popupPlayerData = useMemo(() => {
    return getPlayerById(players, popupState?.player_id)
  }, [players, popupState?.player_id])

  useEffect(() => {
    setTimeout(() => {
      popupOpenRef.current = popupState?.open
    }, 300)
  }, [popupState?.open])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event?.target === true || !popupOpenRef?.current) return false

      console.log('popup outside click check')

      if (event.target?.getAttribute('data-player-id')) {
        console.log('clicked another player')
        return true
      }

      if (!popupRef?.current?.contains(event.target)) {
        dispatch(
          gameActions.setCharacterPopupInfo({
            open: false,
            player_id: '',
            position: {
              x: 0,
              y: 0,
            },
          }),
        )
      }
    }

    //console.log("handleClickOutside - add event listener");
    window.addEventListener('click', handleClickOutside)

    return () => {
      //console.log("handleClickOutside - remove event listener");
      window.removeEventListener('click', handleClickOutside)
    }
  }, [dispatch])

  return !popupState?.open ? (
    <></>
  ) : (
    <div
      className='absolute w-[238px] pt-[14px] px-[15px] pb-[17px] text-white z-[60] translate-x-[30px] translate-y-[-30%]'
      ref={popupRef}
      style={{
        left: popupState?.position?.x + 'px',
        top: popupState?.position?.y + 'px',
      }}
    >
      <div className='cardBgStyledCharacterpopup opacity-80' />
      <div className='text-center text-[12px] font-bold mb-[6px]'>
        HunterPunker#{popupPlayerData?.player_id}
      </div>
      <div className='flex items-center justify-between shadow-[0px_12px_13px_-5px_#163048] mb-2.5 px-2.5 py-[5px] rounded-md border-2 border-solid border-[#246cbd] '>
        <div className='character-image'>
          {popupPlayerData?.character_image && (
            <img
              src={popupPlayerData?.character_image}
              width={29}
              height={34}
              alt='Character Image'
            />
          )}
        </div>
        <div className='text-center font-semibold text-[12px] grow'>
          {popupPlayerData?.name || 'Not Setted'}
        </div>
      </div>
      <div className='mb-3'>
        <div className='c-detail-group'>
          <div className='c-detail-title'>
            <HeartIcon />
            Health
          </div>
          <div className='c-detail-value'>{popupPlayerData?.player_hp}/4000</div>
        </div>
        <div className='c-detail-group'>
          <div className='c-detail-title'>
            <DiscordIcon />
            Discord
          </div>
          <div className='c-detail-value'>{popupPlayerData?.discord || 'Not Setted'}</div>
        </div>
        <div className='c-detail-group'>
          <div className='c-detail-title'>
            <TwitterIcon />
            Twitter
          </div>
          <div className='c-detail-value'>{popupPlayerData?.twitter || 'Not Setted'}</div>
        </div>
      </div>
      <div className='flex flex-col gap-[11px]'>
        <Button mode='popup' color='red'>
          <InfoTooltip
            content='attack'
            position={{
              x: 'left',
              y: 'center',
            }}
          />
          Attack!
        </Button>
        <Button mode='popup'>Go To Profile</Button>
      </div>
    </div>
  )
}

export default CharacterPopup
