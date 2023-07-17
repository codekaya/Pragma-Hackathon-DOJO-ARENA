import React from 'react'
import InfoTooltip from '../info-tooltip'
import Button from '../../styles/button'

const AttackInput = () => {
  return (
    <div className='mt-[10px] relative h-[63px] flex items-center py-3 px-[15px]'>
      <div className='cardBgStyledEmpty' />
      <input
        className='attack-input'
        placeholder='To Attack Select a Champion / Enter Token ID / Name'
      />
      <Button mode='attack-input'>
        <InfoTooltip content='attack' position={{ x: 'right', y: 'top' }} />
        Attack!
      </Button>
    </div>
  )
}

export default AttackInput
