
const router = require('express').Router()
const { health } = require('../api/')

const apiRoutes = require('./v1')


router.get('/health', health.index);

router.use('/api/v1', apiRoutes)

module.exports = router;
