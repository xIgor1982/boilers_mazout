const Router = require('express')
const router = new Router()
const db = require('../db')


router.post('/kotelnaya', async (req, res) => {
	try {
		const { id, name, address, ip, port } = req.body
		res.json({
			message: `Переданы тестовые данные => id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
		})
	} catch (e) {
		res.json({
			message: 'Ошибка post запроса в kotelnaya controller',
		})
	}
})

router.get('/kotelnaya', async (req, res) => {
	try {
		const kotelnaya = await db.query('SELECT * FROM "Kotelnaya"')
		res.json(kotelnaya.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка get запроса kotelnaya controller',
		})
	}
})

router.get('/kotelnaya/:id', async (req, res) => {
	try {
		const id = req.params.id
		const kotelnaya = await db.query(
			'SELECT * FROM "Kotelnaya" where "id_kotelnaya" = $1',
			[id]
		)
		res.json(kotelnaya.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка get запроса в kotelnaya controller',
		})
	}
})

router.put('/kotelnaya', async (req, res) => {
	try {
		const { id, name, address, ip, port } = req.body
		res.json({
			message: `Обновление данных в таблице "Kotelnaya" > id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
		})
	} catch (e) {
		res.json({
			message: 'Ошибка запроса updateKotelnaya в KotelnayaController',
		})
	}
})

router.delete('/kotelnaya/:id', async (req, res) => {
	try {
		const id = req.params.id
		res.json({
			message: `Удаление данных в таблице "Kotelnaya" c id: ${id}`,
		})
	} catch (e) {
		res.json({
			message: 'Ошибка запроса deleteKotelnaya в KotelnayaController',
		})
	}
})

module.exports = router
