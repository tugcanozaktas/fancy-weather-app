import PropTypes from "prop-types";
import React from "react";
import "../styles/CityInfo.css";

function CityInfo({ forecast }) {
  return (
    <div className="city-info">
      <div className="city-name">{forecast.city_name}</div>
      <div className="city-temp">{forecast.data[0].temp.toFixed(0)}&deg;</div>
      <div className="city-high-low">
        <div className="city-high">
          H:{forecast.data[0].max_temp.toFixed(0)}&deg;
        </div>
        <div className="city-low">
          L:{forecast.data[0].min_temp.toFixed(0)}&deg;
        </div>
      </div>
    </div>
  );
}

CityInfo.propTypes = {
  forecast: PropTypes.shape({
    city_name: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        temp: PropTypes.number,
        max_temp: PropTypes.number,
        min_temp: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default CityInfo;
