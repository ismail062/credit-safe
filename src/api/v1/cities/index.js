// CRUD operations
const {
  getCity,
  getDataByCapital,
  getCityWeather,
  addCityToDB,
  updateCity,
  deleteCity,
} = require("./helper.js");
module.exports = {
  getCity: async (req, res, next) => {
    const { cityName } = req.params;
    if (!cityName) throw new Error(`Invalid city name`);
    const city = await getCity(cityName);
    if(!city) { 
      res.status(404).send({ message: 'City not found' });
      return;
    }
    const countryData = await getDataByCapital(city.name);
    const weather = await getCityWeather(
      (lat = countryData.lat),
      (lon = countryData.lng)
    );
    res.status(200).send({ status: "success ", city: city, weather: weather });
  },
  addCity: async (req, res, next) => {
    const city = await addCityToDB(req.body);
    res.status(201).send({ message: "created ", city });
  },
  updateCity: async (req, res, next) => {
    const { cityId } = req.params;
    const updated = await updateCity(cityId, req.body);
    if (!updated) {
      res
        .status(404)
        .send({ message: `City not found with id ${cityId}`, cityId });
    } else {
      res.status(201).send({ message: "City updated successfully ", cityId });
    }
  },

  deleteCity: async (req, res, next) => {
    const { cityId } = req.params;
    const deletedCity = await deleteCity(cityId);
    if (!deletedCity) {
      res
        .status(404)
        .send({ message: `City not found with id ${cityId}`, cityId });
    } else {
      res.status(204).send({ message: "City deleted successfully ", cityId });
    }
  },
};
