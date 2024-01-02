/* eslint-disable no-console */
import PropTypes from "prop-types";
import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast, selectedDate }) {
  const selectedDateDetails = forecast.filter(
    (day) => day.datetime === selectedDate,
  );
  const date = new Date(selectedDateDetails[0].datetime);
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

  const tempIntervalLength =
    100 /
    (selectedDateDetails[0].max_temp.toFixed(0) -
      selectedDateDetails[0].min_temp.toFixed(0));
  const stepsAwayMin =
    selectedDateDetails[0].temp.toFixed(0) -
    selectedDateDetails[0].min_temp.toFixed(0);

  const pixelsAwayFromMin = (tempIntervalLength * stepsAwayMin).toFixed(0);
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{day}</div>
      <div className="forecast-details__infowrapper">
        <div className="forecast-details__tempbox">
          <div className="forecast-details__maxtemp">
            {selectedDateDetails[0].max_temp.toFixed(0)}
            &deg;
          </div>
          <div className="forecast-details__tempvisualize">
            <div
              className="forecast-details__temppoint"
              style={{ bottom: `${pixelsAwayFromMin}px` }}
            />
          </div>
          <div className="forecast-details__mintemp">
            {selectedDateDetails[0].min_temp.toFixed(0)}
            &deg;
          </div>
        </div>
        <div className="forecast-details__windbox">
          <div className="forecast-details__compass-box">
            <div className="forecast-details__compassarch" />
            <div
              className="forecast-details__compassarrow"
              style={{
                transform: `rotate(${
                  270 + selectedDateDetails[0].wind_dir
                }deg)`,
              }}
            >
              <div className="forecast-details__compassarrowtail" />
              <div className="forecast-details__compassarrowhead" />
            </div>
          </div>
          <div className="forecast-details__windspeed">
            Wind of <b>{selectedDateDetails[0].wind_spd} km/h</b> on the
            direction of <b>{selectedDateDetails[0].wind_cdir_full}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      max_temp: PropTypes.number,
      min_temp: PropTypes.number,
      datetime: PropTypes.string,
      weather: PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  ).isRequired,
  selectedDate: PropTypes.string.isRequired,
};
