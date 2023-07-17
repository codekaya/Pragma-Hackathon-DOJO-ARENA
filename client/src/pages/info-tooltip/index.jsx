import React from 'react'
import { InfoIcon } from '../../components/Icons'
import clsx from 'clsx'

const tooltipContents = {
  attack: {
    title: 'Attack',
    infos: [
      '%50 600 damage',
      '%20 nothing happens',
      '%5 you dead',
      '%5 you lose 600 Hp',
      '%15 player killed',
      '%5 player killed + 500 Hp',
    ],
  },
  hide: {
    title: 'Hide',
    infos: ['This action is absolute movement and enables for next turn.'],
  },
  hunt: {
    title: 'Hunt',
    infos: ['%50 +900 Hp', '%20 +450 Hp', '%20 -200 Hp', '%10  you dead'],
  },
}

const InfoTooltip = ({ content, position }) => {
  return (
    <div
      className='absolute top-0 left-0 w-full h-full text-white'
      position={{
        x: position?.x || 'right',
        y: position?.y || 'bottom',
      }}
    >
      <div
        className={clsx('tooltip-container', {
          '!top-[10px]': position?.y === 'bottom',
          '!tooltip-position-y-center': position?.y === 'center',
          '!bottom-0': position?.y !== 'bottom' && position?.y !== 'center',
          '!tooltip-position-x-right': position?.x === 'right',
          '!tooltip-position-x-not-right': position?.x !== 'right',
        })}
      >
        <div className='cardBgStyledCharacterpopup opacity-90' />
        <div className='tooltip-head'>
          <div className='flex w-[17px] h-[17px]'>
            <InfoIcon />
          </div>
          <div className='text-[18px] text-center flex-[1]'>{tooltipContents[content]?.title}</div>
        </div>
        <div className='text-left text-[11px] font-light leading-[1.1rem]'>
          Chances when you use &quot;{tooltipContents[content]?.title}&quot;
          <div className='pt-[2px] pl-3'>
            {tooltipContents[content]?.infos?.map((info, index) => (
              <div key={'info-' + content + '_' + index}>{info}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip
