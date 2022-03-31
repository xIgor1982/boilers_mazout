const Route = require('express')
const router = new Route()
const db = require('../db')

router.post('/manyrole', async (req, res) => {
	res.json({ message: 'Вызов метода createManyRole в ManyRoleController' })
})

router.get('/manyrole', async (req, res) => {
	try {
		const manyRole = await db.query('SELECT * FROM "many_role_has_many_Users"')
		res.json(manyRole.rows)
	} catch (err) {
		res.json({
			message: 'Ошибка запроса getManyRole в ManyRoleController',
			err: `${err}`,
		})
	}
})

router.get('/manyrole/:id', async (req, res) => {
	try {
		const id = req.params.id
		console.log('getOneCounter - id =>', id)
		const manyRole = await db.query(
			'SELECT * FROM "many_role_has_many_Users" where "id_role_role" = $1',
			[id]
		)
		res.json(manyRole.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка запроса getOneManyRole в ManyRoleController',
		})
	}
})

router.put('/manyrole', async (req, res) => {
	res.json({ message: 'Вызов метода updateManyRole в ManyRoleController' })
})

router.delete('/manyrole/:id', async (req, res) => {
	res.json({ message: 'Вызов метода deleteManyRole в ManyRoleController' })
})

module.exports = router
