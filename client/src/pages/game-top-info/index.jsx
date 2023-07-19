import React, { useEffect, useState } from 'react'

const GameTopInfo = ({ data }) => {
  const [remainingTime, setRemainingTime] = useState('')

  useEffect(() => {
    if (data && data.current_tour && data.start_time && data.turn_duration) {
      function calculateRemainingTime(startTime, currentTour, turnDuration) {
        const currentTime = Math.floor(Date.now() / 1000)
        const remainingSeconds =
          parseInt(startTime) + parseInt(currentTour) * parseInt(turnDuration) - currentTime

        if (remainingSeconds <= 0) {
          return '0:00'
        }

        const minutes = Math.floor(remainingSeconds / 60)
        const seconds = remainingSeconds % 60

        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`
        return formattedTime
      }

      function updateRemainingTime(startTime, currentTour, turnDuration) {
        const formattedTime = calculateRemainingTime(startTime, currentTour, turnDuration)
        setRemainingTime(formattedTime)

        if (formattedTime !== '0:00') {
          setTimeout(() => {
            updateRemainingTime(startTime, currentTour, turnDuration)
          }, 1000) // Update every second
        }
      }

      updateRemainingTime(data.start_time, data.current_tour, data.turn_duration)
    }
  }, [data])

  return (
    <div className='relative w-full h-14 mb-[5px] flex justify-center items-center gap-[54px]'>
      <div className='cardBgStyledEmpty' />
      <div className='text-center'>
        <div className='info-title'>Survivors</div>
        <div className='info-value'>800 / 1000</div>
      </div>
      <div className='text-center'>
        <div className='info-title'>Current turn</div>
        <div className='info-value'>12</div>
      </div>
      <div className='text-center'>
        <div className='info-title'>Remaining Time</div>
        <div className='info-value'>{remainingTime ? remainingTime : '0:00'}</div>
      </div>
      <div className='text-center'>
        <div className='info-title'>Total Prize</div>
        <div className='info-value'>${data?.prize}</div>
      </div>
    </div>
  )
}

export default GameTopInfo
