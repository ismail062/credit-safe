/**
 * Health
 * @typedef {object} Health
 * @property {string} healthy - Status
 */

/**
 * @typedef {object} cityResponse - Response
 * @property {integer} id - id of the city
 * @property {string} name - name fo the city
 * @property {string} country - name fo the country
 * @property {string} state - name fo the state
 * @property {string} touristRating - tourist rating for the 
 * @property {string} establishedDate - established date
 * @property {string} estimatedPopulation - estimated population 
 * @property {string} createdAt - timestamp of the created city in db
 * @property {string} updatedAt - timestamp of the updated city in db
 **/

/**
 * @typedef {object} countryData - Response
 * @property {integer} lat - latitude of the city
 * @property {string} lng - longitude of the city
 * @property {string} capital - name fo the city
 * @property {integer} population - population
 * @property {string} country - name of the country
 * @property {string} digit2Code - country 2 digit code
 * @property {string} digit3Code - country 3 diigit code
 * @property {string} currencyCode - currency code
 * @property {string} currencyName - currency name
 * @property {string} currencySymbol - currency symbol
 **/

/**
 * @typedef {object} singleCityResponse
 * @property {cityResponse} city - response of the city 
 * @property {countryData} countryData - data of  the country
 * @property {object} weather - response from weather open api. 
 */



/**
 * @typedef {object} createdResponse
 * @property {string} message - a message after successful response
 * @property {string} value - value of relevant to routes
 */

/**
 * Health
 * @typedef {object} Error
 * @property {string} message - error message
 */

