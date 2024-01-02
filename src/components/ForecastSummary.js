/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummary.css";

function ForecastSummary({ setSelectedDate, forecast }) {
  const handleDetails = () => {
    setSelectedDate(forecast.datetime);
  };
  const date = new Date(forecast.datetime);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekday[date.getDay()];

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleDetails} className="forecast-summary">
      <div className="forecast-summary__date">{day}</div>
      <div className="forecast-summary__icon">
        <img
          src={`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`}
          alt="Weather Icon"
        />
      </div>
      <div className="forecast-summary__mintemp">
        {forecast.min_temp.toFixed(0)}&deg;
      </div>
      <div className="temp-visualize" />
      <div className="forecast-summary__maxtemp">
        {forecast.max_temp.toFixed(0)}&deg;
      </div>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    max_temp: PropTypes.number,
    min_temp: PropTypes.number,
    datetime: PropTypes.string,
    weather: PropTypes.shape({
      description: PropTypes.string,
      icon: PropTypes.string,
    }),
  }).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
