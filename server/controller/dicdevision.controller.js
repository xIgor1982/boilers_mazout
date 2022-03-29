const db = require('../db');

class DicdevisionController {
	async createDicdevision(req, res) {
		res.json({ message: 'Вызов метода createCounter в DicdevisionController' });
	}

	async getDicdevision(req, res) {
		try {
			const dicdevision = await db.query('SELECT * FROM "dicdevision"');
			res.json(dicdevision.rows);
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getCounter в DicdevisionController',
				err: `${err}`,
			});
		}
	}

	async getOneDicdevision(req, res) {
		try {
			const id = req.params.id;
			console.log('getOneCounter - id =>', id);
			const dicdevision = await db.query(
				'SELECT * FROM "dicdevision" where "id_dicdev" = $1',
				[id]
			);
			res.json(dicdevision.rows);
		} catch (e) {
			res.json({ message: 'Ошибка запроса getOneCounter в DicdevisionController' });
		}
	}

	async updateDicdevision(req, res) {
		res.json({ message: 'Вызов метода updateCounter в DicdevisionController' });
	}

	async deleteDicdevision(req, res) {
		res.json({ message: 'Вызов метода deleteCounter в DicdevisionController' });
	}
}

module.exports = new DicdevisionController();
