const express = require('express')
const router = express.Router()

//controller
const { read } = require('../controllers/translate')

router.post('/tran',read)


module.exports = router