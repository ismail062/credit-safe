// CRUD operations
const { getDataByCapital, getCityWeather} = require("./helper.js");
module.exports = {
  getCities: async (req, res, next) => {
    const cityData = await getDataByCapital(req.params.countryName);
    const weather = await getCityWeather(lat=cityData.lat, lon=cityData.lng);
    res.status(200).send({ status: "success ", city: cityData, weather: weather });
  },
  addCity: (req, res, next) => {
    res.status(201).send({ message: "created " });
  },
  updateCity: (req, res, next) => {
    res.status(201).send({ message: "updated " });
  },

  deleteCity: (req, res, next) => {
    res.status(204).send({ message: "deleted " });
  },
};
