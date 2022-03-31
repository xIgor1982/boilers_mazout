const Route = require('express')
const router = new Route()
const db = require('../db')

router.post('/counter', async (req, res) => {
	try {
		const { id, name, type, idKotelnaya } = req.body
		res.json({
			message: `Переданы тестовые данные => id: ${id}, name: ${name}, type: ${type}, id котельной: ${idKotelnaya}.`,
		})
	} catch (e) {
		res.json({ message: 'Ошибка запроса createCounter в CounterController' })
	}
})

router.get('/counter', async (req, res) => {
	try {
		const counter = await db.query('SELECT * FROM public."Counter"')
		res.json(counter.rows)
	} catch (err) {
		res.json({
			message: 'Ошибка запроса getCounter в CounterController',
			err: `${err}`,
		})
	}
})
router.get('/counter/:id', async (req, res) => {
	try {
		const id = req.params.id
		console.log('getOneCounter - id =>', id)
		const counter = await db.query(
			'SELECT * FROM "Counter" where "id_kotelnaya_Kotelnaya" = $1',
			[id]
		)
		res.json(counter.rows)
	} catch (e) {
		res.json({ message: 'Ошибка запроса getOneCounter в CounterController' })
	}
})
router.put('/counter', async (req, res) => {
	try {
		const { id, name, type, idKotelnaya } = req.body
		res.json({
			message: `Обновление данных в таблице "Kotelnaya" => id: ${id}, name: ${name}, type: ${type}, id котельной: ${idKotelnaya}.`,
		})
	} catch (e) {
		res.json({ message: 'Ошибка запроса updateCounter в CounterController' })
	}
})
router.delete('/counter/:id', async (req, res) => {
	try {
		const id = req.params.id
		res.json({ message: `Удаление данных в таблице "Counter" c id: ${id}` })
	} catch (e) {
		res.json({ message: 'Ошибка запроса deleteCounter в CounterController' })
	}
})

module.exports = router
