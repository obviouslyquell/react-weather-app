import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';
function Search() {
  const { city, setCity, currentWeather, setCurrentWeather, currentForecast, setCurrentForecast } =
    useContext(Context);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=London&lang=ru`,
  //     )
  //     .then((resp) => setWeather(resp.data));
  // }, []);
  console.log(currentWeather);
  const onSearchClick = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${city}&lang=ru`,
      )
      .then((resp) => setCurrentWeather(resp.data));
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${city}&lang=ru`,
      )
      .then((resp) => setCurrentForecast(resp.data));
  };
  const searchHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="City..."
        value={city}
        onChange={searchHandler}
      />
      <button onClick={onSearchClick}>Click</button>
    </div>
  );
}

export default Search;
