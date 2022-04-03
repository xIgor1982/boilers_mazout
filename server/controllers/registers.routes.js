const db = require('../db')

class regControllers {
	async create(req, res) {
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
	}

	async getAll(req, res) {
		try {
			const registers = await db.query('SELECT * FROM "Registers"')
			res.json(registers.rows)
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getRegisters в RegistersController',
			})
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			const registers = await db.query(
				'SELECT * FROM "Registers" where "id_reg" = $1',
				[id]
			)
			res.json(registers.rows)
		} catch (e) {}
	}

	async update(req, res) {
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
	}

	async delete(req, res) {
		try {
			const id = req.params.id
			res.json({ message: `Удаление данных в таблице "Registers" c id: ${id}` })
		} catch (e) {
			res.json({
				message: 'Ошибка запроса deleteRegisters в RegistersController',
			})
		}
	}
}

module.exports = new regControllers()
