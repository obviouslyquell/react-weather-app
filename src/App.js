import { useState } from 'react';
import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Search from './Components/Search/Search';
import { Context } from './context';
function App() {
  const defaultInfo = {
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      tz_id: 'Europe/London',
      localtime_epoch: 1657203524,
      localtime: '2022-07-07 15:18',
    },
    current: {
      last_updated_epoch: 1657203300,
      last_updated: '2022-07-07 15:15',
      temp_c: 23.0,
      temp_f: 73.4,
      is_day: 1,
      condition: {
        text: 'Переменная облачность',
        icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        code: 1003,
      },
      wind_mph: 8.1,
      wind_kph: 13.0,
      wind_degree: 350,
      wind_dir: 'N',
      pressure_mb: 1030.0,
      pressure_in: 30.42,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 44,
      cloud: 75,
      feelslike_c: 23.9,
      feelslike_f: 75.0,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 7.0,
      gust_mph: 9.6,
      gust_kph: 15.5,
    },
  };
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(defaultInfo);
  return (
    <Context.Provider value={{ city, setCity, weather, setWeather }}>
      <div className="App">
        <Search />
        <Dashboard />
      </div>
    </Context.Provider>
  );
}

export default App;
