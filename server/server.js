const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

//router
const tranRouter = require('./routes/translate')

//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api',tranRouter)


app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})