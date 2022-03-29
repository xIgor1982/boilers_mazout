const db = require('../db');

class RegistersController {
	async createRegisters(req, res) {
		try {
		const { id, name, num, address, idCounter, ns, regnum } = req.body;
		res.json({
			message: `Переданы тестовые данные => id: ${id}, name: ${name}, num: ${num}, address: ${address}, id: ${idCounter}, ns: ${ns}, regnum: ${regnum}.`,
		});
		} catch(e){
			res.json({
				message: 'Ошибка запроса createRegisters в RegistersController',
			});
		}
	}
	async getRegisters(req, res) {
		try {
		const registers = await db.query('SELECT * FROM "Registers"');
		res.json(registers.rows);
		} catch(e){
			res.json({
				message: 'Ошибка запроса getRegisters в RegistersController',
			});
		}
	}
	async getOneRegisters(req, res) {
		try {
		const id = req.params.id;
		const registers = await db.query(
			'SELECT * FROM "Registers" where "id_reg" = $1',
			[id]
		);
		res.json(registers.rows);
		} catch(e){

		}
	}
	async updateRegisters(req, res) {
		try {
		const { id, name, num, address, idCounter, ns, regnum } = req.body;
		res.json({
			message: `Переданы тестовые данные => id: ${id}, name: ${name}, num: ${num}, address: ${address}, id: ${idCounter}, ns: ${ns}, regnum: ${regnum}.`,
		});
		} catch(e){
			res.json({
				message: 'Ошибка запроса updateRegisters в RegistersController',
			});
		}
	}
	async deleteRegisters(req, res) {
		try {
		const id = req.params.id;
		res.json({ message: `Удаление данных в таблице "Registers" c id: ${id}` });
		} catch(e){
			res.json({
				message: 'Ошибка запроса deleteRegisters в RegistersController',
			});
		}
	}
}

module.exports = new RegistersController();
