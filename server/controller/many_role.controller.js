const db = require('../db');

class ManyRoleController {
	async createManyRole(req, res) {
		res.json({ message: 'Вызов метода createManyRole в ManyRoleController' });
	}

	async getManyRole(req, res) {
		try {
			const manyRole = await db.query(
				'SELECT * FROM "many_role_has_many_Users"'
			);
			res.json(manyRole.rows);
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getManyRole в ManyRoleController',
				err: `${err}`,
			});
		}
	}

	async getOneManyRole(req, res) {
		try {
			const id = req.params.id;
			console.log('getOneCounter - id =>', id);
			const manyRole = await db.query(
				'SELECT * FROM "many_role_has_many_Users" where "id_role_role" = $1',
				[id]
			);
			res.json(manyRole.rows);
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getOneManyRole в ManyRoleController',
			});
		}
	}

	async updateManyRole(req, res) {
		res.json({ message: 'Вызов метода updateManyRole в ManyRoleController' });
	}

	async deleteManyRole(req, res) {
		res.json({ message: 'Вызов метода deleteManyRole в ManyRoleController' });
	}
}

module.exports = new ManyRoleController();
