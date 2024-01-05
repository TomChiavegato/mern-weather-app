const express = require('express')
const router = express.Router()
const {fetchWeather} = require('../controllers/weatherController')
const {protect} = require('../middleware/authMiddleware')

router.get('/', fetchWeather)



module.exports = router