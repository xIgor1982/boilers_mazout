const Route = require('express')
const router = new Route()

router.get('/', (req, res) => {
	res.render('serverPage', { title: 'Статичная страница с сервера' })
})

module.exports = router
