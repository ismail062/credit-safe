const { request } = require("../../../services/axios");
const { getWeather } = require("../../../services/openWeather");
const { countriesApi } = require("../../../config/config.json");
const { cities } = require("../../../data/models");

const getCity = async (cityName) => {
  const city = await cities.findOne({ where: { name: cityName } });
  return city;
};
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
      const country = data[0].name.common;
      const digit2Code = data[0].cca2;
      const digit3Code = data[0].cca3;
      const currencyCode = Object.keys(data[0].currencies)[0];
      const currencyName = data[0].currencies[currencyCode].name;
      const currencySymbol = data[0].currencies[currencyCode].symbol;
      return {
        lat,
        lng,
        capital,
        country,
        digit2Code,
        digit3Code,
        currencyCode,
        currencyName,
        currencySymbol
      };
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

const addCityToDB = async (data) => {
  const {
    name,
    country,
    state,
    tourist_rating,
    established_date,
    estimated_population,
  } = data;

  if (!name || !country) throw new Error("Invalid parameters");

  const { id } = await cities.create({
    name: name,
    country: country,
    state: state,
    touristRating: parseFloat(tourist_rating),
    establishedDate: new Date(established_date),
    estimatedPopulation: estimated_population,
  });
  return id;
};

const updateCity = async (id, data) => {
  const { tourist_rating, established_date, estimated_population } = data;

  const city = await cities.findOne({ where: { id: id } });

  if (!city) return null;

  await city.update({
    touristRating: parseFloat(tourist_rating),
    establishedDate: new Date(established_date),
    estimatedPopulation: estimated_population
      ? estimated_population
      : city.estimatedPopulation,
  });
  return id;
};

const deleteCity = async (id) => {
  const city = await cities.findOne({ where: { id: id } });

  if (!city) return null;

  await city.destroy();
  return id;
};

const getCities = async () => {
  return await await cities.findAll();
}

module.exports = {
  getCity,
  getDataByCapital,
  getCountryData,
  getCityWeather,
  addCityToDB,
  updateCity,
  deleteCity,
  getCities
};
