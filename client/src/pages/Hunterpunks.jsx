// import CurrentPlayerInfo from './current-player-info/index'
import GameTopInfo from './game-top-info/index'
// import GameArea from './game-area/index'
export default function HunterPunks() {
  return (
  // <iframe
  // src="https://glowing-madeleine-270b4e.netlify.app/demo"
  // className="absolute top-0 left-0 w-[100vw] h-[100vh]"
  // width="100vw"
  // height="100vh"
  // frameBorder="0"
  // scrolling="no"
  // allowfullscreen="true"
  // webkitallowfullscreen="true"
  // mozallowfullscreen="true"
  // ></iframe>
  
      <div className="flex h-full justify-center items-center">
  
        <div className="fixed top-0 left-0 w-full h-full ">
  
  <img     src="/main-bg.png"
  className="absolute min-h-[100vh] min-w-[100vw] left-0 top-0 right-0 bottom-0 text-transparent main-bg-img after:main-bg-after"
            fill
            alt="Background Image"
            priority />
  
        <div className="absolute min-h-[100vh] min-w-[100vw] left-0 top-0 right-0 bottom-0 text-transparent main-bg-after">
  
        </div>
        </div>
  
  <div className="flex justify-center items-start gap-[10px] relative z-40 ">
  <div className="w-[273px] shrink-0">
  {/* <CurrentPlayerInfo /> */} 
          {/* <button onClick={handleConnectWallet}>Connect wallet</button> */}
          <button
            onClick={() =>
              getAllEvents(
                web3Obj.ctc,
                8211050,
                web3Obj.provider && web3Obj.provider.getBlockNumber()
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
            <button onClick={() => initPlayers(100)}>
              Reset with 100 players
            </button>
          </div>
          <div>
            <button onClick={() => initPlayers(10)}>
              Reset with 10 players
            </button>
          </div>
        </div>
        <div className="w-[640px] flex-shrink-0">
          <GameTopInfo />
          {/* <GameArea /> */}
          <div className="game-actions"> //TODO 3 divin css tanimi eksik (ana repoda)
            <div className="game-top-buttons"></div>
            <div className="game-attack-input"></div>
          </div>
        </div>
        <div className="w-[271px]">
        <GameHistory />
  </div>
  </div>
  <CharacterPopup />

      </div>
    );
  }
  

  //TODO redux entegrasyonu ve func kisimlari tamamlanacak