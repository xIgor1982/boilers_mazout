const db = require('../db')

class DicdevisionController {
	async create(req, res) {
		res.json({ message: 'Вызов метода createCounter в DicdevisionController' })
	}

	async getAll(req, res) {
		try {
			const dicdevision = await db.query('SELECT * FROM "dicdevision"')
			res.json(dicdevision.rows)
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getCounter в DicdevisionController',
				err: `${err}`,
			})
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			console.log('getOneCounter - id =>', id)
			const dicdevision = await db.query(
				'SELECT * FROM "dicdevision" where "id_dicdev" = $1',
				[id]
			)
			res.json(dicdevision.rows)
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getOneCounter в DicdevisionController',
			})
		}
	}

	async update(req, res) {
		res.json({ message: 'Вызов метода updateCounter в DicdevisionController' })
	}

	async delete(req, res) {
		res.json({ message: 'Вызов метода deleteCounter в DicdevisionController' })
	}
}

module.exports = new DicdevisionController()
