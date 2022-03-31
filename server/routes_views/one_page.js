const Route = require('express')
const router = new Route()

router.get('/', (req, res) => {
	res.render('mainPage', { title: 'Home page' })
})

module.exports = router
