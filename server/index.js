require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT_SERVER || 5555

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require(`./routes_views/one_page`))

fs.readdirSync('./routes/').forEach(file => {
	app.use('/api', require(`./routes/${file}`))
})

app.listen(PORT, () => console.log(`server started on post ${PORT}`))