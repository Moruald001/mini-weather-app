// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/weatherContext";
import "../App.css";

export function Weather({ city }) {
  const { weather, setWeather } = useContext(WeatherContext);
  const [erreur, setErreur] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;
  const cityParse = city || "Lome";

  useEffect(() => {
    //recuperation des donnéses
    const fetchweather = async () => {
      const r = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityParse}&aqi=no`
      );

      if (!r.ok) {
        setErreur("  La météo de cette ville est indisponible ");
        return;
      }
      const data = await r.json();
      // @ts-ignore
      setWeather(data);
    };
    try {
      fetchweather();
    } catch (err) {
      setErreur("Erreur de récupération météo", err);
      console.log(erreur);
    }
  }, [cityParse]);

  // reinitialisation de erreur apres une erreur
  const retry = (e) => {
    e.preventDefault();
    setErreur("");
  };

  const temperature = weather?.current?.temp_c;
  const temp = String(temperature).slice(0, 2);
  return (
    <>
      {!erreur && (
        <div className="weather-card">
          <h1 className="weather-card-title">
            <span className="higlight"> {weather?.location?.name}</span>
          </h1>{" "}
          <br />
          <div className="weather-card-imgBox">
            <img
              src={weather?.current?.condition?.icon}
              alt=""
              className="weather-card-img"
            />
            <strong className="weather-card-degre">{temp}°C</strong>{" "}
          </div>
          <p className="weather-card-time">{weather?.location?.localtime}</p>
        </div>
      )}{" "}
      {erreur && (
        <p className="danger">
          ⚠️:{erreur}
          <button className="weather-form-errorCross" onClick={retry}>
            ❌
          </button>
        </p>
      )}
    </>
  );
}
