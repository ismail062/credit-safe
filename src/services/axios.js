const axios = require("axios");

const request = async (options) => {
  try {
    return await axios(options);
  } catch (e) {
    console.log("axios error: " + e.message);
    throw new Error(e);
  }
};

module.exports = {
  request: request,
};
