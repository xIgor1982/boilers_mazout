const db = require('../db')
const createNewArray = require('../services/services')

class StatusController {
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
}

module.exports = new StatusController()
