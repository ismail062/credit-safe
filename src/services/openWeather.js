const { request } = require("./axios");
const { weatherApi } = require("../config/config.json");

module.exports = {
  getWeather: async (lat, lon) => {
    const options = {
      url: `${weatherApi.url}?lat=${lat}&lon=${lon}&appid=${weatherApi.apiKey}`,
      method: "GET",
    };

    return await request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
