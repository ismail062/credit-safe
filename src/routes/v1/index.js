const router = require("express").Router();

const { City } = require("../../api/");

router.get("/city/:cityName", City.getCity);

router.post("/city", City.addCity);

router.put("/cities/:cityId", City.updateCity);

router.delete("/cities/:cityId", City.deleteCity);

module.exports = router;
