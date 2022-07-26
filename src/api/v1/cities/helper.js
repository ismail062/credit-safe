const { request } = require("../../../services/axios");
const { getWeather } = require("../../../services/openWeather");

const { countriesApi } = require("../../../config/config.json");
const e = require("express");

const getDataByCapital = async (cityName) => {
  const options = {
    url: `${countriesApi.capitalUrl}/${cityName}`,
    method: "GET",
  };
  return await request(options)
    .then(async ({ data }) => {
      const lat = data[0].latlng[0];
      const lng = data[0].latlng[1];
      const capital = data[0].capital[0];
      return { lat: lat, lng: lng, capital: capital };
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const getCountryData = async (countryName) => {
  const options = {
    url: `${countriesApi.url}/${countryName}`,
    method: "GET",
  };
  return await request(options)
    .then(async ({ data }) => {
      const lat = data[0].latlng[0];
      const lng = data[0].latlng[1];
      const capital = data[0].capital[0];
      return { lat: lat, lng: lng, capital: capital };
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const getCityWeather = async (lat, lon) => {
  const weather = await getWeather(lat, lon);
  return weather;
};

module.exports = {
  getDataByCapital,
  getCountryData,
  getCityWeather,
};
