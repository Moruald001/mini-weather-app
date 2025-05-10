import React, { useState } from "react";
import "./App.css";
import { Weather } from "./components/weather";
import { WeatherForm } from "./components/weatherForm";
import { WeatherContext, CityContext } from "./context/weatherContext";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const wcontextProvide = {
    weather: weather,
    setWeather: setWeather,
  };
  const cityContextProvide = {
    city: city,
    setCity: setCity,
  };
  return (
    <WeatherContext.Provider value={wcontextProvide}>
      <CityContext.Provider value={cityContextProvide}>
        <div className="Parent">
          <WeatherForm />
          <Weather city={city} />
        </div>
      </CityContext.Provider>
    </WeatherContext.Provider>
  );
}

export default App;
