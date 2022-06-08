const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
	{
		host: 'smtp.mail.ru',
		port: 465,
		secure: true, // true только для 465 порта, false для других портов
		auth: {
			user: 'test_mail_igx@mail.ru',
			pass: 'u2nUedLVSujp98fLDxAU',
		},
	},
	{
		from: 'test_mail_igx@mail.ru',
	}
)

const mailer = message => {
	transporter.sendMail(message, (err, info) => {
		if (err) return console.log(err)
		console.log(`Сообщение отправлено:`, info)
	})
}

module.exports = mailer