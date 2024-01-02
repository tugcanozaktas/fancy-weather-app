/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import "../styles/SelectCitySearch.css";

function SelectCityForecast({ setSelectedCity, cities, onSubmit }) {
  const handleSelectCity = (event) => setSelectedCity(event.target.value);
  return (
    <div className="city-selection">
      <input
        onChange={handleSelectCity}
        placeholder="Select a city..."
        className="city-list"
        list="city"
      />
      <datalist id="city" name="cities">
        {cities.map((city) => (
          <option key={cities.indexOf(city)} value={city}>
            {city}
          </option>
        ))}
      </datalist>
      <button type="button" onClick={onSubmit}>
        Select
      </button>
    </div>
  );
}
SelectCityForecast.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SelectCityForecast;
