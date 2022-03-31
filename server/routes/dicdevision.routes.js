const Route = require('express')
const router = new Route()
const db = require('../db')

router.post('/dicdevision', async (req, res) => {
	res.json({ message: 'Вызов метода createCounter в DicdevisionController' })
})

router.get('/dicdevision', async (req, res) => {
	try {
		const dicdevision = await db.query('SELECT * FROM "dicdevision"')
		res.json(dicdevision.rows)
	} catch (err) {
		res.json({
			message: 'Ошибка запроса getCounter в DicdevisionController',
			err: `${err}`,
		})
	}
})

router.get('/dicdevision/:id', async (req, res) => {
	try {
		const id = req.params.id
		console.log('getOneCounter - id =>', id)
		const dicdevision = await db.query(
			'SELECT * FROM "dicdevision" where "id_dicdev" = $1',
			[id]
		)
		res.json(dicdevision.rows)
	} catch (e) {
		res.json({
			message: 'Ошибка запроса getOneCounter в DicdevisionController',
		})
	}
})

router.put('/dicdevision', async (req, res) => {
	res.json({ message: 'Вызов метода updateCounter в DicdevisionController' })
})

router.delete('/dicdevision/:id', async (req, res) => {
	res.json({ message: 'Вызов метода deleteCounter в DicdevisionController' })
})

module.exports = router
