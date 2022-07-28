const router = require("express").Router();

const { City } = require("../../api/");

router.get("/city/:cityName", City.getCity);

router.post("/city", City.addCity);

router.patch("/city/:cityId", City.updateCity);

router.delete("/city/:cityId", City.deleteCity);

module.exports = router;
