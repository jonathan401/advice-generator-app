import React, { useState, useEffect } from 'react';
import AdviceCard from '../AdviceCard/AdviceCard';

import '../../assets/styles/styles.scss';
import './App.scss';

const App = () => {
  useEffect(() => {
    setLoading(true);
    getAdvice();
  }, []);

  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);

  const getAdvice = async () => {
    const adviceData = await fetch('https://api.adviceslip.com/advice');
    const data = await adviceData.json();
    setAdvice(data.slip);
    setLoading(false);
  };

  // send the request again
  const refresh = () => {
    getAdvice();
    setLoading(true);
  };

  return (
    <div className="container">
      <AdviceCard advice={advice} loading={loading} refresh={refresh} />
    </div>
  );
};

export default App;
