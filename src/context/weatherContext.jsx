import { createContext } from "react";

export const WeatherContext = createContext({
  weather: {},
  setWeather: () => {},
});

export const CityContext = createContext({
  city: "",
  setCity: () => {},
});
