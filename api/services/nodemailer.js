const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
	{
		host: process.env.MLR_CREATE_TRANSPORT_HOST,
		port: process.env.MLR_CREATE_TRANSPORT_PORT,
		secure: process.env.MLR_CREATE_TRANSPORT_PORT == 465 ? true : false, // true только для 465 порта, false для других портов
		auth: {
			user: process.env.MLR_CREATE_TRANSPORT_AUTH_USER,
			pass: process.env.MLR_CREATE_TRANSPORT_AUTH_PASSWORD,
		},
	},
	{
		from: process.env.MLR_CREATE_TRANSPORT_FROM,
	}
)

const mailer = ({ to, subject, text, html }) => {
	const message = {
		to,
		subject,
		text,
		html,
	}
	// console.log('mailer -> message =', message)
	console.log('mailer -> transporter =', transporter)
	transporter.sendMail(message, (err, info) => {
		if (err) return console.log(err)
		console.log(`Сообщение отправлено:`, info)
	})
}

module.exports = mailer

// 'use strict'
// const nodemailer = require('nodemailer')

// // async..await не допускается в глобальной области видимости, необходимо использовать оболочку
// async function main(msgArrTo, msgArrSubject, msgTxt, msgHTML) {
// 	const msgFrom = ''
// 	// Создаем тестовую учетную запись службы SMTP из ethereal.email
// 	// Требуется только в том случае, если у вас нет реальной почтовой учетной записи для тестирования
// 	// let testAccount = await nodemailer.createTestAccount()

// 	// создаем повторно используемый транспортный объект, используя транспорт SMTP по умолчанию
// 	const msgTo = ""
// 	if (msgArrTo.length > 1) {
// 		msgTo = msgArrTo.join(', ')
// 	} else {
// 		msgTo = msgArrTo[0]
// 	}

// 	const transporter =  nodemailer.createTransport({
// 		host: 'smtp.mail.ru',
// 		port: 465,
// 		secure: true, //true только для 465 порта, false для других портов
// 		auth: {
// 			user: 'test_mail_igx@mail.ru', // сгенерировать случайного пользователя
// 			pass: 'u2nUedLVSujp98fLDxAU', // сгенерировать случайный пароль
// 		},
// 	})

// 	// отправить почту с определенным транспортным объектом
// 	const info = await transporter.sendMail({
// 		from: msgFrom, // адрес отправителя
// 		to: msgTo, // список получателей
// 		subject: 'Hello ✔', // Описание
// 		text: 'Hello world?', // Простое текстовое поле
// 		html: '<b>Hello world?</b>', // html тело
// 	})

// 	nodemailer.getTestMessageUrl(info)
// 	// console.log('Message sent: %s', info.messageId)
// 	// Сообщение отправлено: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// 	// Предварительный просмотр доступен только при отправке через учетную запись Ethereal
// 	// console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
// 	// Предварительный просмотр URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }


// module.exports = main