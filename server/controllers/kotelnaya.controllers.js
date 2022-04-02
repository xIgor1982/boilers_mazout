const db = require('../db')
const createNewArray = require('../services/services')

class KotController {
	async create(req, res) {
		try {
			const { id, name, address, ip, port } = req.body
			res.json({
				message: `Переданы тестовые данные => id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
			})
		} catch (e) {
			res.json({
				message: 'Ошибка post запроса в kotelnaya controller',
			})
		}
	}

	async get(req, res) {
		try {
			const kotelnaya = await db.query('SELECT * FROM "Kotelnaya"')
			const counters = await db.query(
				`
			SELECT k.id_kotelnaya, COUNT(c.cnt_name) 
			FROM "Kotelnaya" k
			INNER JOIN "Counter" c
			ON k.id_kotelnaya = c."id_kotelnaya_Kotelnaya" 
			GROUP BY k.id_kotelnaya 
			ORDER BY k.id_kotelnaya;
			`
			)

			const result = createNewArray(
				kotelnaya.rows,
				counters.rows,				
				['id_kotelnaya'],
				'all_cnt'		
			)

			res.json(result)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса kotelnaya controller',
			})
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			const kotelnaya = await db.query(
				'SELECT * FROM "Kotelnaya" where "id_kotelnaya" = $1',
				[id]
			)
			res.json(kotelnaya.rows)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса в kotelnaya controller',
			})
		}
	}

	async update(req, res) {
		try {
			const { id, name, address, ip, port } = req.body
			res.json({
				message: `Обновление данных в таблице "Kotelnaya" > id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
			})
		} catch (e) {
			res.json({
				message: 'Ошибка запроса updateKotelnaya в KotelnayaController',
			})
		}
	}

	async delete(req, res) {
		try {
			const id = req.params.id
			res.json({
				message: `Удаление данных в таблице "Kotelnaya" c id: ${id}`,
			})
		} catch (e) {
			res.json({
				message: 'Ошибка запроса deleteKotelnaya в KotelnayaController',
			})
		}
	}
}

module.exports = new KotController()
