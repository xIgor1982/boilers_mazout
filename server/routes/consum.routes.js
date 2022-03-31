const Route = require('express')
const router = new Route()
const db = require('../db')

/**
 * @Post
 * @Создание
 */
router.post('/consum', async (req, res) => {
	res.json({ message: 'Вызов post запроса в consum - controller' })
})

/**
 * @Get
 * @Запрос_всех_полей
 */
router.get('/consum', async (req, res) => {
	try {
		const consum = await db.query(
			'SELECT COUNT(DISTINCT "id_consum") FROM "consum"'
		)
		res.json(consum.rows[0])
	} catch (err) {
		res.json({
			message: 'Ошибка get запроса в consum - controller',
			err: `${err}`,
		})
	}
})

/**
 * @Get
 * @Запрос_с_параметром__id_reg_register
 */
router.get('/consum/:id', async (req, res) => {
	try {
		const id = req.params.id
		const consum = await db.query(
			'SELECT * FROM "consum" where "id_reg_Registers" = $1',
			[id]
		)
		res.json(consum.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка get запроса c параметром ID в consum - controller ',
		})
	}
})

/**
 * @Put
 */
router.put('/consum', async (req, res) => {
	res.json({ message: 'Вызов put запроса в consum - controller' })
})

/**
 * @Delete
 */
router.delete('/consum/:id', async (req, res) => {
	res.json({ message: 'Вызов delete запроса в consum - controller' })
})

module.exports = router
