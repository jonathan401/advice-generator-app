import React from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import RefreshButton from './RefreshButton';

import './AdviceCard.scss';

const AdviceCard = ({ advice: { id, advice }, loading, refresh }) => {
  return (
    <div className="card">
      <CardTitle id={id} />
      <CardBody advice={advice} />
      <RefreshButton refresh={refresh} loading={loading} />
    </div>
  );
};

export default AdviceCard;
