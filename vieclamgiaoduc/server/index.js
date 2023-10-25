const express = require('express')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit');

const port = 5000
const cors = require("cors")


const app = express()

app.use(bodyParser.json({ limit: '30mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' })); // Adjust the limit as needed

app.use(bodyParser.json())
app.use(express.json())

app.use(cors())

let routes = require('./routes') //importing route
routes(app)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port)
console.log('RESTful API server started on: ' + port)
