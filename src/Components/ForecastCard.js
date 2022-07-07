import React, { useContext } from 'react';
import { Context } from '../context';

function ForecastCard({ forecastCard }) {
  const { currentForecast, setCurrentForecast } = useContext(Context);
  return (
    <li className="forecast__item">
      <p>{forecastCard.time.slice(11)}</p>
      <img src={forecastCard.condition.icon} alt="" className="forecast__item-img" />
      <h3>{forecastCard.temp_c > 0 ? '+' + forecastCard.temp_c : forecastCard.temp_c}</h3>
    </li>
  );
}

export default ForecastCard;
