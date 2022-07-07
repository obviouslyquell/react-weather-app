import { useState } from 'react';
import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Search from './Components/Search/Search';
import { Context } from './context';
import { defaultForecast, defaultWeather } from './defaultValues';
function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(defaultWeather);
  const [currentForecast, setCurrentForecast] = useState(defaultForecast);
  // console.log(currentForecast);
  return (
    <Context.Provider
      value={{
        city,
        setCity,
        currentWeather,
        setCurrentWeather,
        currentForecast,
        setCurrentForecast,
      }}>
      <div className="App">
        <Search />
        <Dashboard />
      </div>
    </Context.Provider>
  );
}

export default App;
