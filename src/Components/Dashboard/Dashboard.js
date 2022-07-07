import React, { useContext } from 'react';
import { Context } from '../../context';
import ForecastCard from '../ForecastCard';
import WeatherCard from '../WeatherCard';

function Dashboard() {
  const { currentWeather, currentForecast } = useContext(Context);

  const last_updated_epoch = currentWeather.current.last_updated_epoch;
  const last_updated_date = new Date(last_updated_epoch * 1000);
  console.log(last_updated_date.toLocaleString());
  console.log(currentForecast, 'forecast');
  console.log(currentWeather.current.last_updated_epoch);
  return (
    <>
      <div className="info__header">
        <h1 className="info__heading">{'London' && currentWeather?.location?.name}</h1>
        <p className="info__time">last update: {last_updated_date.toLocaleString()}</p>
      </div>
      <div className="dashboard">
        <div className="dashboard__card">
          <WeatherCard />
          <ul className="dashboard__card-forecast">
            {currentForecast.forecast.forecastday[0].hour.map((e, index) => {
              return <ForecastCard key={index} forecastCard={e} />;
            })}
          </ul>
        </div>
        <div className="dashboard__card"></div>
      </div>
    </>
  );
}

export default Dashboard;
