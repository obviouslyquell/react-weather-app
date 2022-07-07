import React, { useContext } from 'react';
import { Context } from '../../context';
import MiniWeatherCard from '../MiniWeatherCard';

function Dashboard() {
  const { weather } = useContext(Context);
  return (
    <div className="dashboard">
      <h1>{'London' && weather?.location?.name}</h1>
      <div className="dashboard__card">
        <MiniWeatherCard />
      </div>
    </div>
  );
}

export default Dashboard;
