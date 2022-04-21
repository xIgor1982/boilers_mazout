require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
// 	service: 'mail',
// 	auth: {
// 		user: process.env.MAILER_EMAIL,
// 		pass: process.env.MAILER_PASSWORD,
// 	},
// })

// const mailOptions = {
// 	from: 'test_mail_igx@mail.ru',
// 	to: 'test_mail_igx@mail.ru',
// 	subject: 'Письмо отправленное через NodeJS',
// 	text: "Содержание письма..."
// }

// transporter.sendMail(mailOptions)

const app = express()
const PORT = process.env.PORT_SERVER || 3001

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require(`./routes_views/server_page`))

fs.readdirSync('./routes/').forEach(file => {
	app.use('/api', require(`./routes/${file}`))
})

app.listen(PORT, () => console.log(`server started on post ${PORT}`))
