const db = require('../db');

class KotelnayaController {
	async createKotelnaya(req, res) {
		try {
			const { id, name, address, ip, port } = req.body;
			res.json({
				message: `Переданы тестовые данные => id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
			});
		} catch (e) {
			res.json({
				message: 'Ошибка запроса createKotelnaya в KotelnayaController',
			});
		}
	}
	async getKotelnaya(req, res) {
		try {
			const kotelnaya = await db.query('SELECT * FROM "Kotelnaya"');
			res.json(kotelnaya.rows);
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getKotelnaya в KotelnayaController',
			});
		}
	}
	async getOneKotelnaya(req, res) {
		try {
			const id = req.params.id;
			const kotelnaya = await db.query(
				'SELECT * FROM "Kotelnaya" where "id_kotelnaya" = $1',
				[id]
			);
			res.json(kotelnaya.rows);
		} catch (e) {
			res.json({
				message: 'Ошибка запроса getOneKotelnaya в KotelnayaController',
			});
		}
	}
	async updateKotelnaya(req, res) {
		try {
			const { id, name, address, ip, port } = req.body;
			res.json({
				message: `Обновление данных в таблице "Kotelnaya" > id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
			});
		} catch (e) {
			res.json({
				message: 'Ошибка запроса updateKotelnaya в KotelnayaController',
			});
		}
	}
	async deleteKotelnaya(req, res) {
		try {
			const id = req.params.id;
			res.json({
				message: `Удаление данных в таблице "Kotelnaya" c id: ${id}`,
			});
		} catch (e) {
			res.json({
				message: 'Ошибка запроса deleteKotelnaya в KotelnayaController',
			});
		}
	}
}

module.exports = new KotelnayaController();
