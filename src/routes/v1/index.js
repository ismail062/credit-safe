const router = require("express").Router();

const { City } = require("../../api/");

/**
 * GET /city/:cityName
 * @summary add a new city to the database
 * @tags Cities
 * @param {string} cityName.path.required - city identifier
 * @return {singleCityResponse} 200 - success response
 * @return {Error} 404 - Not found error
 * @return {Error} 500 - Server Error
 */
router.get("/city/:cityName", City.getCity);
/**
 * GET /city/
 * @summary add a new city to the database
 * @tags Cities
 * @return {Array<cityResponse>} 200 - success response
 * @return {Error} 500 - Server Error
 */
router.get("/city", City.getAllCities)

/**
 * POST /city/
 * @summary add a new city to the database
 * @tags Cities
 * @param {createCityRequest} request.body.required - information to supplements
 * @return {createdResponse} 201 - success response
 * @return {Error} 500 - Server Error
 */
router.post("/city", City.addCity);


/**
 * PATCH /city/:cityId
 * @summary add a new city to the database
 * @tags Cities
 * @param {integer} cityId.path.required - city identifier
 * @param {updateCityRequest} request.body.required - information to supplements
 * @return {createdResponse} 201 - success response
 * @return {Error} 500 - Server Error
 */
router.patch("/city/:cityId", City.updateCity);

/**
 * DELETE /city/:cityId
 * @summary delete a city from the database
 * @tags Cities
 * @param {integer} cityId.path.required - city identifier
 * @return {} 204 - success response
 * @return {Error} 500 - Server Error
 */
router.delete("/city/:cityId", City.deleteCity);

module.exports = router;
