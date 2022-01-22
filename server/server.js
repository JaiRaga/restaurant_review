require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 9008

app.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})
