const router = require('express').Router()

const { City } = require('../../api/')


router.get('/cities',  City.getCities)

router.post(
  '/cities',
  City.addCity,
)

module.exports = router
