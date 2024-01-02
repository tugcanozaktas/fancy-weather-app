// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const getForecast = (setForecast, searchText, apiKey) => {
  let endpoint = "https://api.weatherbit.io/v2.0/forecast/daily";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  if (apiKey) {
    endpoint += `&key=${apiKey}`;
  }
  return axios.get(endpoint).then((response) => {
    // eslint-disable-next-line no-console
    setForecast(response.data);
  });
};

export default getForecast;
