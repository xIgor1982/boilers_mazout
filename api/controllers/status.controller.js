const db = require('../db')
const createNewArray = require('../services/services')

class StatusController {
	async get(req, res) {
		try {
			// const kotelnaya = await db.query('SELECT * FROM "Kotelnaya"')
			const result = []
			const notify = await db.query(
				`
				SELECT * FROM public.notify
				ORDER BY id_not ASC
				`
			)

			const msg = await db.query(`
			SELECT * FROM public.msg
			ORDER BY id_msg ASC
			
			`)

			// console.log('status controller -> notify.rows =', notify.rows)
			console.log('status controller -> msg.rows =', msg.rows)
			notify.rows.forEach(elem => {
				let typeMsq = ''
				msg.rows.forEach(typeM => {
					if (elem['msgtype'] == typeM['id_msg']) {
						typeMsq = typeM['msgtext']
					}
				})
				result.push({
					id_not: elem['id_not'],
					msqtype: typeMsq,
					email: elem['email'],
					dt: elem['dt'],
					active: elem['active'] == 1 ? 'Да' : ' Нет',
				})
			})
			// console.log('status controller -> result =', result)

			res.json(result)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса status controller',
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
