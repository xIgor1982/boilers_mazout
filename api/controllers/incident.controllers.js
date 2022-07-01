const db = require('../db')
const { dateParsing } = require('../services/services')

class incidentController {
	async get(req, res) {
		try {
			const result = []
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

			const msg = await db.query(`
				SELECT * FROM public.msg
				ORDER BY id_msg ASC
				`)

			incident.rows.forEach(
				({
					id_ev,
					kot_name,
					dt,
					id_kotelnaya,
					id_counter,
					msgtype,
					is_sent,
					dt_sent,
				}) => {
					let typeMsq = ''
					msg.rows.forEach(({ id_msg, msgtext }) => {
						if (msgtype == id_msg) {
							typeMsq = msgtext
						}
					})

					result.push({
						id_ev,
						kot_name,
						dt,
						id_kotelnaya,
						id_counter,
						msgtype: typeMsq,
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
