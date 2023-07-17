import { RightIcon } from '../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Button from '../../styles/button'
import dead_icon from '../../../public/icons/character-dead-icon.svg'
const GameHistory = () => {
  const { history } = useSelector((state) => state.game)

  const [activeTab, setActiveTab] = useState('attacks')

  const renderAttacksHistory = (items) => {
    return items?.map((item, index) => {
      const p1_hp_positive = item?.player1_hp_change
        ? item?.player1_hp_change > 0
          ? true
          : item?.player1_hp_change < 0
          ? false
          : null
        : null

      return (
        <tr key={'history-attack-item_' + index} className='h-item-attack'>
          {' '}
          <td className='time'>{item?.time}</td>
          <td className={'hp-change-1' + (p1_hp_positive ? ' green' : ' red')}>
            {(p1_hp_positive ? '+' : '') + (item?.player1_hp_change || '')}
          </td>
          <td className='player-1'>
            <div className='player-wrapper first'>
              {item?.player1?.character_image && (
                <img
                  src={item?.player1?.character_image}
                  width={13}
                  height={17}
                  alt='Character Icon'
                />
              )}
              {item?.player1?.name || item?.player1?.player_id}
            </div>
          </td>
          <td className='arrow'>
            <RightIcon />
          </td>
          <td className='player-2'>
            <div
              className={
                'player-wrapper second' + (item?.player2_hp_change === 'killed' ? ' dead' : '')
              }
            >
              {item?.player2?.character_image && (
                <img
                  src={
                    item?.player2_hp_change === 'killed'
                      ? dead_icon
                      : item?.player2?.character_image
                  }
                  width={12.24}
                  height={16}
                  alt='Character Icon'
                />
              )}
              {item?.player2?.name || item?.player2?.player_id}
            </div>
          </td>
          <td className='hp-change-2'>
            {item?.player2_hp_change !== 'killed' ? item?.player2_hp_change : ''}
          </td>
        </tr>
      )
    })
  }

  const renderHides = (items) => {
    return items?.map((item, index) => {
      return (
        <tr key={'history-hide-item_' + index} className='h-item-hide'>
          <td className='time'>{item?.time}</td>
          <td className='hp-change-1'></td>
          <td>
            <div className='player-wrapper'>
              {item?.player?.character_image && (
                <img
                  src={item?.player?.character_image}
                  width={13}
                  height={17}
                  alt='Character Icon'
                />
              )}
              {item?.player?.name || item?.player?.player_id}
            </div>
          </td>
        </tr>
      )
    })
  }

  const renderHunts = (items) => {
    return items?.map((item, index) => {
      return (
        <tr key={'history-hide-item_' + index} className='h-item-hide'>
          <td className='time'>{item?.time}</td>
          <td className={'hp-change-1' + (item?.player_hp_change > 0 ? ' green' : ' red')}>
            {item?.player_hp_change !== 'dead'
              ? (item?.player_hp_change > 0 ? '+' : '') + item?.player_hp_change
              : ''}
          </td>
          <td>
            <div className={'player-wrapper ' + (item?.player_hp_change === 'dead' ? ' dead' : '')}>
              {item?.player?.character_image && (
                <img
                  src={
                    item?.player_hp_change === 'dead'
                      ? '/public/icons/character-dead-icon.svg'
                      : item?.player?.character_image
                  }
                  width={12.24}
                  height={16}
                  alt='Character Icon'
                />
              )}
              {item?.player?.name || item?.player?.player_id}
            </div>
          </td>
        </tr>
      )
    })
  }

  const renderHistory = () => {
    if (activeTab === 'attacks') {
      return renderAttacksHistory(history['attacks'])
    } else if (activeTab === 'hides') {
      return renderHides(history['hides'])
    } else if (activeTab === 'hunts') {
      return renderHunts(history['hunts'])
    }
    return <></>
  }

  return (
    <div className='relative flex w-full flex-col h-[467px]'>
      <div className='cardBgStyledEmpty' />
      <div className='text-[20px] text-white text-opacity-[85] text-center font-bold pt-4'>
        Game History
      </div>

      <div className='flex gap-[6px] mx-[9px] mt-6 mb-0'>
        <Button mode='history' active={activeTab === 'hunts'} onClick={() => setActiveTab('hunts')}>
          Hunts
        </Button>
        <Button mode='history' active={activeTab === 'hides'} onClick={() => setActiveTab('hides')}>
          Hides
        </Button>
        <Button
          mode='history'
          active={activeTab === 'attacks'}
          onClick={() => setActiveTab('attacks')}
        >
          Attacks!
        </Button>
      </div>

      <div className='relative w-full h-full text-white flex overflow-hidden mt-2'>
        <div className='history-content'>
          <table>
            <tbody>{renderHistory()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GameHistory

//TODO empty css  h-item-attack
