const router = require("express").Router();

const { City } = require("../../api/");

router.get("/city/:countryName", City.getCities);

router.post("/city", City.addCity);

router.put("/cities/:id", City.updateCity);

router.delete("/cities/:id", City.deleteCity);

module.exports = router;
