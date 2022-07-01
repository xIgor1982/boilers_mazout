const db = require('../db')
const { dateParsing } = require('../services/services')

class incidentController {
	async get(req, res) {
		try {
			const result = []
			const incident = await db.query(
				// 	`
				// 	SELECT ev.*, cnt.id_counter, kot.id_kotelnaya, kot.kot_name
				// 	FROM ev, "Counter"
				// 	AS cnt, "Kotelnaya"
				// 	AS kot
				// 	WHERE ev.id_counter = cnt.id_counter
				// 	AND kot.id_kotelnaya = cnt."id_kotelnaya_Kotelnaya"
				// 	ORDER BY ev.dt DESC
				// 	LIMIT 100;
				// `
				`
					SELECT ev.id_ev, ev.dt, kot.kot_name, cnt.cnt_name, msg.msgtext, ev.is_sent, ev.dt_sent 
					FROM ev, "Counter" 
					AS cnt, "Kotelnaya" 
					AS kot, msg 
					WHERE ev.id_counter = cnt.id_counter
					AND kot.id_kotelnaya = cnt."id_kotelnaya_Kotelnaya"
					AND msg.id_msg=ev.msgtype
					ORDER BY ev.dt DESC
					LIMIT 100;
				`
			)


			incident.rows.forEach(
				({ id_ev, kot_name, dt, cnt_name, msgtext, is_sent, dt_sent }) => {
					result.push({
						id_ev,
						kot_name,
						dt,
						cnt_name,
						msgtext,
						is_sent: is_sent == 1 ? 'Да' : 'Нет',
						dt_sent,
					})
				}
			)

			res.json(result)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса kotelnaya controller',
			})
		}
	}
}

module.exports = new incidentController()
