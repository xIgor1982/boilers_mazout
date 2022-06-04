const db = require('../db')

class UsersControllers {
	async create(req, res) {
		res.json({ message: 'Вызов метода createCounter в UsersController' })
	}

	async getAll(req, res) {
		try {
			const users = await db.query('SELECT * FROM "Users"')
			res.json(users.rows)
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getCounter в UsersController',
				err: `${err}`,
			})
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			console.log('getOneCounter - id =>', id)
			const user = await db.query(
				'SELECT * FROM "Users" where "id_user" = $1',
				[id]
			)
			res.json(user.rows)
		} catch (e) {
			res.json({ message: 'Ошибка запроса getOneCounter в UsersController' })
		}
	}

	async update(req, res) {
		res.json({ message: 'Вызов метода updateCounter в UsersController' })
	}

	async delete(req, res) {
		res.json({ message: 'Вызов метода deleteCounter в UsersController' })
	}
}

module.exports = new UsersControllers()
