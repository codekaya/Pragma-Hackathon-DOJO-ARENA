
const GameTopInfo = () => {
  return (
    <div className="relative w-full h-14 mb-[5px] flex justify-center items-center gap-[54px]">
      <div className="cardBgStyledEmpty" />
      <div className="text-center">
        <div className="info-title">Survivors</div>
        <div className="info-value">800 / 1000</div>
      </div>
      <div className="text-center">
        <div className="info-title">Current turn</div>
        <div className="info-value">12</div>
      </div>
      <div className="text-center">
        <div className="info-title">Remaining Time</div>
        <div className="info-value">3:42.05</div>
      </div>
      <div className="text-center">
        <div className="info-title">Total Prize</div>
        <div className="info-value">$10.000</div>
      </div>
    </div>
  );
};

export default GameTopInfo;
