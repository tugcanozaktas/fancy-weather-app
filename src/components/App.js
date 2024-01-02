/* eslint-disable no-console */
import "../styles/App.css";
import React, { useState } from "react";
import SelectCityForecast from "./SelectCityForecast";
import getForecast from "../requests/GetForecast";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import CityInfo from "./CityInfo";

function App() {
  const cities = [
    "Lefkoşa",
    "Girne",
    "Magusa",
    "Lefke",
    "Güzelyurt",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Ankara",
    "Eskişehir",
    "Antalya",
    "Hatay",
  ];
  const [selectedCity, setSelectedCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = () => {
    getForecast(setForecast, selectedCity, "891073a8212e42dc89f640070ff41310");
    setSelectedDate(null);
  };

  const handleDetails = () => {
    // eslint-disable-next-line no-console
    console.log(selectedDate);
  };

  return (
    <div className="App">
      <SelectCityForecast
        setSelectedCity={setSelectedCity}
        cities={cities}
        onSubmit={handleSubmit}
      />
      {forecast ? (
        <CityInfo forecast={forecast} />
      ) : (
        <h1 className="city-name">Select a city...</h1>
      )}
      {forecast && (
        <ForecastSummaries
          setSelectedDate={setSelectedDate}
          handleDetails={handleDetails}
          forecasts={forecast.data}
        />
      )}
      {selectedDate && (
        <ForecastDetails forecast={forecast.data} selectedDate={selectedDate} />
      )}
    </div>
  );
}
export default App;
