import React, { useContext, useState } from "react";
import "../App.css";
import { CityContext } from "../context/weatherContext";

export function WeatherForm() {
  const [value, setValue] = useState("");
  const { setCity } = useContext(CityContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + String(value).slice(1).toLowerCase();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitValue = capitalizeFirstLetter(value.trim().replace(/\s/, "-"));
    // @ts-ignore
    setCity(submitValue);
    // @ts-ignore
    setValue("");
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Veuillez enter un ville "
        className="weather-form-input"
        value={value}
        onChange={handleChange}
        required
      />
      <input type="submit" className="weather-form-btn" value="Chercher" />
    </form>
  );
}
