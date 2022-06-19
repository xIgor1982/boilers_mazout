require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')
const mailer = require('./nodemailer')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT_SERVER || 3001

app.use(cors())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require(`./routes_views/server_page`))

fs.readdirSync('./routes/').forEach(file => {
	// console.log('file =>', file)
	app.use('/api', require(`./routes/${file}`))
})

// Тестовый запрос на почту
// setTimeout((mess = 'Бойлер 1', textMess = 'с __.__ не поступают сведения') => {
// 	const message = {
// 		to: 'test_mail_igx@mail.ru',
// 		subject: `Ошибка работы бойлера! ${mess}.... `,
// 		text: `
// 			Сообщение об ошибке работы - ${mess}
// 			-> ${textMess}
// 			`,
// 	}

// 	mailer(message)
// }, 3000)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
