require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const restaurantRouter = require('./routes/restaurants')

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/v1', restaurantRouter)

const port = process.env.PORT || 9008

app.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})
