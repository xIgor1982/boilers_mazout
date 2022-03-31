const Route = require('express')
const router = new Route()
const db = require('../db')

router.post('/registers', async (req, res) => {
	try {
		const { id, name, num, address, idCounter, ns, regnum } = req.body
		res.json({
			message: `Переданы тестовые данные => id: ${id}, name: ${name}, num: ${num}, address: ${address}, id: ${idCounter}, ns: ${ns}, regnum: ${regnum}.`,
		})
	} catch (e) {
		res.json({
			message: 'Ошибка запроса createRegisters в RegistersController',
		})
	}
})

router.get('/registers', async (req, res) => {
	try {
		const registers = await db.query('SELECT * FROM "Registers"')
		res.json(registers.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка запроса getRegisters в RegistersController',
		})
	}
})

router.get('/registers/:id', async (req, res) => {
	try {
		const id = req.params.id
		const registers = await db.query(
			'SELECT * FROM "Registers" where "id_reg" = $1',
			[id]
		)
		res.json(registers.rows)
	} catch (e) {}
})

router.put('/registers', async (req, res) => {
	try {
		const { id, name, num, address, idCounter, ns, regnum } = req.body
		res.json({
			message: `Переданы тестовые данные => id: ${id}, name: ${name}, num: ${num}, address: ${address}, id: ${idCounter}, ns: ${ns}, regnum: ${regnum}.`,
		})
	} catch (e) {
		res.json({
			message: 'Ошибка запроса updateRegisters в RegistersController',
		})
	}
})

router.delete('/registers/:id', async (req, res) => {
	try {
		const id = req.params.id
		res.json({ message: `Удаление данных в таблице "Registers" c id: ${id}` })
	} catch (e) {
		res.json({
			message: 'Ошибка запроса deleteRegisters в RegistersController',
		})
	}
})

module.exports = router
