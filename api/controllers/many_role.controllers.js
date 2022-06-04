const db = require('../db')

class ManyRoleController {
	async create(req, res) {
		res.json({ message: 'Вызов метода createManyRole в ManyRoleController' })
	}

	async getAll(req, res) {
		try {
			const manyRole = await db.query(
				'SELECT * FROM "many_role_has_many_Users"'
			)
			res.json(manyRole.rows)
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getManyRole в ManyRoleController',
				err: `${err}`,
			})
		}
	}

	async getOne(req, res) {
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
	}

	async update(req, res) {
		res.json({ message: 'Вызов метода updateManyRole в ManyRoleController' })
	}

	async delete(req, res) {
		res.json({ message: 'Вызов метода deleteManyRole в ManyRoleController' })
	}
}

module.exports = new ManyRoleController()
