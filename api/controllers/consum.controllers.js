const db = require('../db')

class ConsController {
	async create(req, res) {
		res.json({ message: 'Вызов post запроса в consum - controller' })
	}

	async getAll(req, res) {
		try {
			const consum = await db.query(
				'SELECT COUNT(DISTINCT "id_consum") FROM "consum"'
			)
			res.json(consum.rows[0])
		} catch (err) {
			res.json({
				message: 'Ошибка get запроса в consum - controller',
				err: `${err}`,
			})
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			const consum = await db.query(
				'SELECT * FROM "consum" where "id_reg_Registers" = $1',
				[id]
			)
			res.json(consum.rows)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса c параметром ID в consum - controller ',
			})
		}
	}

	async update(req, res) {
		res.json({ message: 'Вызов put запроса в consum - controller' })
	}

	async delete (req, res) {
	res.json({ message: 'Вызов delete запроса в consum - controller' })
}
}

module.exports = new ConsController()
