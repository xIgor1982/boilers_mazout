const db = require('../db')

class workController {
	async create(req, res) {
		try {
			const { id, name, address, ip, port } = req.body
			res.json({
				message: `Переданы тестовые данные => id: ${id}, name: ${name}, address: ${address}, ip: ${ip}, port: ${port}.`,
			})
		} catch (e) {
			res.json({
				message: 'Ошибка post запроса в working controller',
			})
		}
	}

	// async get(req, res) {
	// 	try {
	// 		const id = req.params.id
	// 		const kotelnaya = await db.query(
	// 			'SELECT * FROM "Kotelnaya" where "id_kotelnaya" = $1',
	// 			[id]
	// 		)
	// 		res.json(kotelnaya.rows)
	// 	} catch (e) {
	// 		res.json({
	// 			message: 'Ошибка get запроса в working controller',
	// 		})
	// 	}
	// }

	async get(req, res) {
		try {

			res.json('Тест')
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса в working controller',
			})
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			const kotelnaya = await db.query(
				`
				SELECT * FROM consum, "Kotelnaya" kot
				WHERE consum."id_reg_Registers" = kot.regmon
				AND kot.id_kotelnaya = $1
				ORDER BY consum.dt desc
				LIMIT 2;
				 `,
				[id]
			)
			res.json(kotelnaya.rows)
		} catch (e) {
			res.json({
				message: 'Ошибка get запроса в working controller',
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
				message: 'Ошибка запроса updateWorking в WorkingController',
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
				message: 'Ошибка запроса deleteWorking в WorkingController',
			})
		}
	}
}

module.exports = new workController()
