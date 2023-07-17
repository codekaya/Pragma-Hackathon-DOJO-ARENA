import React from 'react';

const Button = ({ width, mode, color, active, children }) => {
  let baseClasses = `base-button ${width ? `w-[${width}px]` : 'w-full'}`;
  let hoverClasses = 'hover:base-button-hover';
  let activeClasses = 'active:base-button-active';
  let modeClasses = '';
  let colorClasses = '';


  if (mode === 'contact') {
    modeClasses += '!base-button-mode-contact';
  } else if (mode === 'popup') {
    modeClasses += '!h-[41px] !text-[16px]';
  } else if (mode === 'attack-input') {
    modeClasses += '!h-[41px] !w-[153px]';
  } else if (mode === 'history') {
    modeClasses += '!text-[10px] !h-[28px] !rounded-[4px] !font-bold';
    hoverClasses += '!text-white';

    if(active) {
        activeClasses += '!base-button-mode-active';

    } else {
        activeClasses += '!base-button-mode-not-active';
    }
  }

  if (color === 'black') {
    colorClasses += '!base-button-color-black';
  } else if (color === 'red') {
    colorClasses += '!base-button-color-red';
    hoverClasses = '!hover:base-button-color-red-hover';
    activeClasses = '!base-button-color-red-active';
  }

  return (
    <button className={`${baseClasses} ${hoverClasses} ${activeClasses} ${modeClasses} ${colorClasses}`}>
      {children}
    </button>
  );
};

export default Button;
