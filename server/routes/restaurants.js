const express = require('express')
const db = require('../db')
const router = express.Router()

// Get all Restaurants
router.get('/restaurants', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM restaurants')
		console.log(results)
		res.status(200).send({
			status: 'Success',
			results: results.rows.length,
			data: { restaurants: results['rows'] },
		})
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal server error')
	}
})

// Get Restaurant by id
router.get('/restaurants/:id', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM restaurants where id = $1', [
			req.params.id,
		])
		res
			.status(200)
			.send({ status: 'Success', data: { restaurant: results.rows[0] } })
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal server error')
	}
})

// Create a Restaurant
router.post('/restaurants', async (req, res) => {
	try {
		console.log(req.body)
		const { name, location, price_range } = req.body
		const results = await db.query(
			'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *',
			[name, location, price_range]
		)
		console.log(results)
		res
			.status(201)
			.send({ status: 'Success', data: { restaurant: results.rows[0] } })
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal server error')
	}
})

// Update a Restaurant
router.put('/restaurants/:id', async (req, res) => {
	const { name, location, price_range } = req.body
	try {
		const results = await db.query(
			'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
			[name, location, price_range, req.params.id]
		)
		res
			.status(200)
			.send({ status: 'Success', data: { restaurant: results.rows[0] } })
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal server error')
	}
})

// Delete a Restaurant
router.delete('/restaurants/:id', (req, res) => {
	res.status(204).send({ status: 'Success' })
})

module.exports = router
