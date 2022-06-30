const db = require('../db')

class incidentController {
	async get(req, res) {
		try {
			const incident = await db.query(
				`
				SELECT ev.*, cnt.id_counter, kot.id_kotelnaya, kot.kot_name 
				FROM ev, "Counter" 
				AS cnt, "Kotelnaya" 
				AS kot
				WHERE ev.id_counter = cnt.id_counter
				AND kot.id_kotelnaya = cnt."id_kotelnaya_Kotelnaya"
				ORDER BY ev.dt DESC
				LIMIT 100;
			`
			)
			res.json(incident.rows)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса kotelnaya controller',
			})
		}
	}
}

module.exports = new incidentController()
