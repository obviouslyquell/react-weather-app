import React, { useContext } from 'react';
import { Context } from '../context';

function MiniWeatherCard() {
  const { currentWeather, setCurrentWeather } = useContext(Context);
  const current = currentWeather?.current;
  const location = currentWeather?.location;
  //console.log(currentWeather, 'weather');
  return (
    <div className="dashboard__card-mini">
      {currentWeather && (
        <>
          <div className="mini__info">
            <div className="mini__info-icon">
              <img src={current.condition.icon} alt="" />
            </div>
            <div className="temperature__wrapper">
              <h2 className="mini__info-temperature">{`${
                current.temp_c > 0 ? '+' + current.temp_c : current.temp_c
              }°C`}</h2>
              <p>
                {`feels like ${
                  current.feelslike_c > 0 ? '+' + current.feelslike_c : current.feelslike_c
                }°C`}
              </p>
            </div>
          </div>
          <div className="mini__details">
            <div className="mini__details-left">
              <ul className="mini__details-list">
                <li className="mini__details-item">{`gust: ${current.gust_kph}`}</li>
                <li className="mini__details-item">{`humidity: ${current.humidity}`}</li>
              </ul>
            </div>
            <div className="mini__details-right">
              <ul className="mini__details-list">
                <li className="mini__details-item">{`wind_kph: ${current.wind_kph}`}</li>
                <li className="mini__details-item">{`wind_dir: ${current.wind_dir}`}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MiniWeatherCard;
