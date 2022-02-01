const express = require('express')
const db = require('../db')
const router = express.Router()

// Get all Restaurants
router.get('/restaurants', async (req, res) => {
	const result = await db.query('SELECT * FROM restaurants')
	console.log(result)
	res
		.status(200)
		.send({ status: 'Success', data: { restaurants: ['ihop', 'wendys'] } })
})

// Get Restaurant by id
router.get('/restaurants/:id', (req, res) => {
	res
		.status(200)
		.send({ status: 'Success', data: { restaurants: ['ihop', 'wendys'] } })
})

// Create a Restaurant
router.post('/restaurants', (req, res) => {
	console.log(req.body)
	res.status(201).send({ status: 'Success', data: { restaurant: 'something' } })
})

// Update a Restaurant
router.put('/restaurants/:id', (req, res) => {
	res.status(200).send({ status: 'Success', data: { restaurant: 'something' } })
})

// Delete a Restaurant
router.delete('/restaurants/:id', (req, res) => {
	res.status(204).send({ status: 'Success' })
})

module.exports = router
