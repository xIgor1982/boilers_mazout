const Route = require('express')
const router = new Route()
const db = require('../db')

router.post('/role', async (req, res) => {
	res.json({ message: 'Вызов метода createRole в RoleController' })
})

router.get('/role', async (req, res) => {
	try {
		const manyRole = await db.query('SELECT * FROM "role"')
		res.json(manyRole.rows)
	} catch (err) {
		res.json({
			message: 'Ошибка запроса getRole в RoleController',
			err: `${err}`,
		})
	}
})

router.get('/role/:id', async (req, res) => {
	try {
		const id = req.params.id
		console.log('getOneCounter - id =>', id)
		const manyRole = await db.query(
			'SELECT * FROM "role" where "id_role" = $1',
			[id]
		)
		res.json(manyRole.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка запроса getOneRole в RoleController',
		})
	}
})

router.put('/role', async (req, res) => {
	res.json({ message: 'Вызов метода updateRole в RoleController' })
})

router.delete('/role/:id', async (req, res) => {
	res.json({ message: 'Вызов метода deleteRole в RoleController' })
})

module.exports = router
