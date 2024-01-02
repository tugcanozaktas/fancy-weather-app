/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ setSelectedDate, forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          setSelectedDate={setSelectedDate}
          key={forecasts.indexOf(forecast)}
          forecast={forecast}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      max_tem: PropTypes.number,
      min_temp: PropTypes.number,
      datetime: PropTypes.string,
      weather: PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  ).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
