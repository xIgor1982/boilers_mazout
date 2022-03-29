const db = require('../db');

class RoleController {
	async createRole(req, res) {
		res.json({ message: 'Вызов метода createRole в RoleController' });
	}

	async getRole(req, res) {
		try {
			const manyRole = await db.query('SELECT * FROM "role"');
			res.json(manyRole.rows);
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getRole в RoleController',
				err: `${err}`,
			});
		}
	}

	async getOneRole(req, res) {
		try {
			const id = req.params.id;
			console.log('getOneCounter - id =>', id);
			const manyRole = await db.query(
				'SELECT * FROM "role" where "id_role" = $1',
				[id]
			);
			res.json(manyRole.rows);
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getOneRole в RoleController',
			});
		}
	}

	async updateRole(req, res) {
		res.json({ message: 'Вызов метода updateRole в RoleController' });
	}

	async deleteRole(req, res) {
		res.json({ message: 'Вызов метода deleteRole в RoleController' });
	}
}

module.exports = new RoleController();
