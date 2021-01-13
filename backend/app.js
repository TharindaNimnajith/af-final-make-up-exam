const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const HttpError = require('./models/http-errors')
const RoomsRoutes = require('./routes/rooms.routes')

require('dotenv').config()

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())
app.use(cors())

app.use('/rooms', RoomsRoutes)

app.use(() => {
  throw new HttpError('Could not find this route.', 404)
})

const uri = process.env.ATLAS_URI
const port = process.env.PORT
const dbName = process.env.DATABASE

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  dbName: dbName
}

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port)
    console.log(`Server is running on port: ${port}`)
  })
  .catch((error) => {
    console.log(error)
  })
