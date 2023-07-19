import Layout from '../components/Layout'
import { useState } from 'react'
import games_data from '../assets/games.json'
import { useAccount, useConnectors } from '@starknet-react/core'
import { Link } from 'react-router-dom'
import SurvivorGame from '/survivor_game.png'
import WalletModal from '../components/WalletModal'

const parseTimestamp = (timestamp) => {
  let seconds = Math.floor(timestamp / 1000) % 60
  let minutes = Math.floor(timestamp / (1000 * 60)) % 60
  let hours = Math.floor(timestamp / (1000 * 60 * 60)) % 24
  let days = Math.floor(timestamp / (1000 * 60 * 60 * 24))

  let result = ''

  if (days > 0) {
    result += days + ' D '
  }
  if (hours > 0) {
    result += hours + ' H '
  }
  if (minutes > 0) {
    result += minutes + ' M '
  }
  if (seconds > 0) {
    result += seconds + ' S '
  }

  return result.trim()
}

function Tooltip({ header, label }) {
  return (
    <div className='absolute bg-[#040810] -right-[6rem] px-4 py-2 top-0 flex flex-col justify-between border border-[#477f90] w-[10rem] '>
      <h2 className='text-[15px] font-bold text-center'>{header}</h2>
      <hr className='border-[#4FCDF2] mt-2' />
      <label className='text-[12px] text-white mt-1'>{label}</label>
    </div>
  )
}

const ToggleSwitch = ({ leftLabel, rightLabel, onToggle }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    const newState = !isChecked
    setIsChecked(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <label className='relative w-[16rem] h-8 flex flex-row cursor-pointer select-none bg-[#02040A] border border-[#00CCFF] rounded-full'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleToggle}
        className='hidden appearance-none transition-colors cursor-pointer w-[14px] h-[10px] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500'
      />
      <span
        className={`w-[8rem] h-8 my-auto rounded-full transform transition-transform shadow-border_1 bg-[#1E3249] border border-white ${
          isChecked ? '' : 'translate-x-[8rem]'
        }`}
      />
      <span className='absolute font-medium text-xs left-3 top-[6px] text-white'>{leftLabel}</span>
      <span className='absolute font-medium text-xs right-12 top-[6px] text-white'>
        {rightLabel}
      </span>
    </label>
  )
}

function Intro() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:space-x-10'>
      <img src={SurvivorGame} alt='Lobby' className='w-[80vw] lg:w-[20rem] rounded-3xl' />
      <div className='flex flex-col space-y-2 lg:mt-0 mt-10'>
        <h2>Game 1# : Hunter Punks Survival Game</h2>
        <p className='text-[12px]'>Be the last survivor and earn all of the entry fees.</p>
        <p className='text-[12px]'>
          To survive you need to increase your health with hunting, you can attack opponents and you
          can hide from attacks.
        </p>
        <p className='text-[12px]'>check out notion for more info</p>
        <div className='flex flex-row space-x-2'>
          <Link
            to='/start'
            className='text-[9px] bg-[#2275CF] text-white font-bold py-2 px-4 rounded-lg'
          >
            Create Your Own Room
          </Link>
          <button className='text-[9px] bg-[#1C4169] text-[#58ABDA] font-bold py-2 px-4 rounded-lg'>
            Register Your NFT Collection
          </button>
        </div>
      </div>
    </div>
  )
}

function Filters(props) {
  const names = ['Upcoming Games', 'Ongoing Games', 'Past Games']
  const [leaderboardHover, setLeaderboardHover] = useState(false)
  const { selected, setSelected } = props

  return (
    <div className='flex flex-row ml-0 mr-auto mt-10'>
      {names.map((name) => (
        <div
          className='bg-[#02040A77] px-5 py-2 cursor-pointer duration-300'
          key={name}
          style={{
            border: selected === name ? '2px solid #4FCDF2' : 'none',
            boxShadow: selected === name ? '0px 0px 3px rgba(0,231,255, 0.819083)' : 'none',
            color: selected === name ? '#FFFFFF' : '#609CAD',
          }}
          onClick={() => setSelected(name)}
        >
          <h2>{name}</h2>
        </div>
      ))}
      <div
        className='hidden md:block relative bg-[#02040A77] ml-64 px-5 py-2 cursor-pointer duration-300'
        onMouseEnter={() => setTimeout(() => setLeaderboardHover(true), 200)}
        onMouseLeave={() => setTimeout(() => setLeaderboardHover(false), 200)}
        style={{
          border: selected === name ? '2px solid #4FCDF2' : 'none',
          boxShadow: selected === name ? '0px 0px 3px rgba(0,231,255, 0.819083)' : 'none',
          color: selected === name ? '#FFFFFF' : '#609CAD',
        }}
        onClick={() => setSelected('Leaderboard')}
      >
        {leaderboardHover && (
          <Tooltip header={'Not Yet'} label={'This feature is not available yet.'} />
        )}
        <h2>🏆 Leaderboard</h2>
      </div>
    </div>
  )
}

function GameCard(props) {
  const {
    image,
    title,
    description,
    creator,
    player,
    capacity,
    fee,
    reward,
    time,
    status,
    has_nf,
    participant,
    winner,
    setShowModal,
  } = props

  const { status: wallet_status } = useAccount()

  return (
    <div className='flex flex-row justify-between items-center border-2 border-[#246CBD] bg-[#000000] rounded-md pr-4'>
      <img src={image} alt={title} className='w-[5rem] aspect-square' />
      <div className='relative flex flex-col space-y-2 md:w-[12rem]'>
        <h2>{title}</h2>
        <p className='text-[12px]'>{description}</p>
        <p className='text-[12px]'>by {creator}</p>
      </div>
      <div className='relative flex flex-col space-y-2'>
        <span className='text-[12px]'>
          {player} / {capacity}
        </span>
        {/* {first && (
          <span className="absolute -top-16 left-0 text-[12px]">Capacity</span>
        )} */}
      </div>
      <span className='hidden md:block w-[5rem] relative text-[12px] text-right'>{fee} ETH</span>
      <span className='hidden md:block w-[5rem] relative text-[12px] text-right'>{reward} ETH</span>
      <span className='hidden md:block w-[8rem] text-[12px] text-right'>
        {parseTimestamp(time)}
      </span>
      {wallet_status === 'connected' && (
        <>
          {has_nf && status === 'Upcoming' && (
            <button className='text-[14px] hidden sm:block md:w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300'>
              Register {fee} ETH
            </button>
          )}
          {!has_nf && status === 'Upcoming' && (
            <button className='text-[14px] hidden sm:block md:w-[15rem] bg-[#2B1753] text-white border-2 border-[#E74A98] font-bold py-2 px-4 rounded-full hover:shadow-button_2 duration-300'>
              You Need To Buy This NFT
            </button>
          )}

          {status === 'Ongoing' && participant && (
            <Link
              to='/dojosurvivors'
              className='text-[14px] text-center hidden sm:block md:w-[15rem] bg-[#17532C] border border-[#4AE7A7] shadow-border_1 text-white font-bold py-2 px-4 rounded-full hover:bg-[#40F880] hover:border-white hover:text-white hover:shadow-button_2 active:bg-[#225E37] active:border-[#4AE7A7] active:text-[#63F275] duration-300'
            >
              Continue To Play
            </Link>
          )}
          {status === 'Ongoing' && !participant && (
            <button className='text-[14px] hidden sm:block md:w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300'>
              Observe
            </button>
          )}

          {status === 'Past' && winner && (
            <button className='text-[14px] hidden sm:block md:w-[15rem] bg-[#17532C] border border-[#4AE7A7] shadow-border_1 text-white font-bold py-2 px-4 rounded-full hover:bg-[#40F880] hover:border-white hover:text-white hover:shadow-button_2 active:bg-[#225E37] active:border-[#4AE7A7] active:text-[#63F275] duration-300'>
              Claim Your Reward
            </button>
          )}

          {status === 'Past' && !winner && (
            <button className='text-[14px] hidden sm:block md:w-[15rem] bg-[#3072A7] text-white border border-[#628EAB] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300'>
              See Winners
            </button>
          )}
        </>
      )}
      {wallet_status !== 'connected' && (
        <button
          className='text-[14px] hidden sm:block md:w-[15rem] text-white border border-[#A2DAFF] font-bold py-2 px-4 rounded-full hover:bg-[#C0E3FF] hover:text-[#2D3D89] hover:shadow-button_2 duration-300'
          style={{ boxShadow: '0px 0px 14px 4px rgba(169,207,255, 0.638822)' }}
          onClick={() => setShowModal(true)}
        >
          Connect Your Wallet
        </button>
      )}
    </div>
  )
}

function RoomType(props) {
  const { type, count, value } = props
  const [selected, setSelected] = useState(() => value)

  return (
    <div
      className='flex flex-row items-center space-x-2 cursor-pointer px-2 py-1 rounded-md'
      style={{
        color: selected ? '#246CBD' : '#FFFFFF',
        backgroundColor: selected ? '#FFFFFF' : '#50818F',
        opacity: selected ? 1 : 0.5,
      }}
      onClick={() => setSelected(!selected)}
    >
      <span>{selected}</span>
      {/* <div
        className="w-[1rem] h-[1rem] rounded-full border border-[#4FCDF2]"
        style={{
          backgroundColor: selected ? "#4FCDF2" : "#02040A",
        }}
      /> */}
      <h2 className='text-[12px]'>{type}</h2>
      <h2 className='text-[12px]'>({count})</h2>
    </div>
  )
}

function GameList(props) {
  const { selected, showModal, setShowModal } = props
  const [checked, setChecked] = useState(false)

  return (
    <div className='w-[100vw] bg-[#02040A77] border border-[#4FCDF2] shadow-border_2 py-2'>
      <div className='lg:w-dojo mx-auto pt-4 pb-20 space-y-4 px-4'>
        <ToggleSwitch
          leftLabel={selected === 'Upcoming Games' ? 'Briq Collections' : 'You Participated'}
          rightLabel={'All '}
          onToggle={(newState) => setChecked(newState)}
        />
        <div className='hidden md:flex flex-row space-x-2 items-center justify-start'>
          <RoomType type={'Ducks Everywhere'} count={5} value={true} />
          <RoomType type={'Pixel Heroes'} count={2} value={true} />
          <RoomType type={'Stark Guardians'} count={5} value={false} />
          <RoomType type={'Stark Punks'} count={5} value={false} />
          <RoomType type={'Early Starkers'} count={3} value={false} />
        </div>

        {games_data
          .filter((game) => game.status + ' Games' === selected)
          .filter((game) =>
            checked ? (game.status === 'Upcoming' ? game.isBriq : game.participated) : true,
          )
          .map((game, index) => {
            return (
              <GameCard
                key={index}
                image={game.image_link}
                title={game.collection_name}
                description={game.room_name}
                creator={game.room_master}
                player={game.player}
                capacity={game.capacity}
                fee={game.entry_fee}
                reward={game.total_reward}
                time={game.timestamp}
                status={game.status}
                has_nf={game.has_nft}
                participant={game.participated}
                winner={game.winner}
                first={game.first}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )
          })}
      </div>
    </div>
  )
}

export default function Games() {
  const [selected, setSelected] = useState('Upcoming Games')
  const [showModal, setShowModal] = useState(false)
  const { connectors, connect } = useConnectors()

  return (
    <Layout bg_url='/menu-bg.png'>
      {showModal && (
        <WalletModal setShowModal={setShowModal} connectors={connectors} connect={connect} />
      )}
      <Intro />
      <Filters selected={selected} setSelected={setSelected} />
      <GameList selected={selected} showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  )
}
