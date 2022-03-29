const db = require('../db');

class UsersController {
	async createUsers(req, res) {
		res.json({ message: 'Вызов метода createCounter в UsersController' });
	}

	async getUsers(req, res) {
		try {
			const users = await db.query('SELECT * FROM "Users"');
			res.json(users.rows);
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getCounter в UsersController',
				err: `${err}`,
			});
		}
	}

	async getOneUsers(req, res) {
		try {
			const id = req.params.id;
			console.log('getOneCounter - id =>', id);
			const user = await db.query(
				'SELECT * FROM "Users" where "id_user" = $1',
				[id]
			);
			res.json(user.rows);
		} catch (e) {
			res.json({ message: 'Ошибка запроса getOneCounter в UsersController' });
		}
	}

	async updateUsers(req, res) {
		res.json({ message: 'Вызов метода updateCounter в UsersController' });
	}

	async deleteUsers(req, res) {
		res.json({ message: 'Вызов метода deleteCounter в UsersController' });
	}
}

module.exports = new UsersController();
