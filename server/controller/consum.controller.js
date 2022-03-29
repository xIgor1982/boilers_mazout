const db = require('../db');

class ConsumController {
	async createConsum(req, res) {
		res.json({ message: 'Вызов метода createConsum в ConsumController' });
	}

	async getConsum(req, res) {
		try {
			const consum = await db.query(
				'SELECT COUNT(DISTINCT "id_consum") FROM "consum"'
			);
			res.json(consum.rows[0]);
		} catch (err) {
			res.json({
				message: 'Ошибка запроса getConsum в ConsumController',
				err: `${err}`,
			});
		}
	}

	async getOneConsumRegisters(req, res) {
		try {
			const id = req.params.id;
			const consum = await db.query(
				'SELECT * FROM "consum" where "id_reg_Registers" = $1',
				[id]
			);
			res.json(consum.rows);
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getOneConsumRegisters в ConsumController',
			});
		}
	}

	async updateConsum(req, res) {
		res.json({ message: 'Вызов метода updateConsum в ConsumController' });
	}

	async deleteConsum(req, res) {
		res.json({ message: 'Вызов метода deleteConsum в ConsumController' });
	}
}

module.exports = new ConsumController();
