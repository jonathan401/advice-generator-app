import React from 'react';
import dice from '../../assets/images/icon-dice.svg';

const RefreshButton = ({ refresh, loading }) => {
  return (
    <div className="dice" onClick={() => refresh()}>
      <img className={loading ? 'rotate' : ''} src={dice} alt="" />
    </div>
  );
};

export default RefreshButton;
