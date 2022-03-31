const Route = require('express')
const router = new Route()
const db = require('../db')

router.post('/users', async (req, res) => {
	res.json({ message: 'Вызов метода createCounter в UsersController' })
})

router.get('/users', async (req, res) => {
	try {
		const users = await db.query('SELECT * FROM "Users"')
		res.json(users.rows)
	} catch (err) {
		res.json({
			message: 'Ошибка запроса getCounter в UsersController',
			err: `${err}`,
		})
	}
})

router.get('/users/:id', async (req, res) => {
	try {
		const id = req.params.id
		console.log('getOneCounter - id =>', id)
		const user = await db.query('SELECT * FROM "Users" where "id_user" = $1', [
			id,
		])
		res.json(user.rows)
	} catch (e) {
		res.json({ message: 'Ошибка запроса getOneCounter в UsersController' })
	}
})

router.put('/users', async (req, res) => {
	res.json({ message: 'Вызов метода updateCounter в UsersController' })
})

router.delete('/users/:id', async (req, res) => {
	res.json({ message: 'Вызов метода deleteCounter в UsersController' })
})

module.exports = router
