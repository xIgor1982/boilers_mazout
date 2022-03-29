require('dotenv').config();
const express = require('express');
const kotelnayaRouter = require('./routes/kotelnaya.routes');
const counterRouter = require('./routes/counter.routes');
const registersRouter = require('./routes/registers.routes');
const usersRouter = require('./routes/users.routes');
const consumRouter = require('./routes/consum.routes');
const dicdevisionRouter = require('./routes/dicdevision.routes');
const ManyRoleRouter = require('./routes/many_role.routes');
const RoleRouter = require('./routes/role.routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
// app.use('/api', (req, res) => {
// 	res.json({ message: 'Тестовое сообщение с сервера!!' });
// });
app.use('/api', kotelnayaRouter);
app.use('/api', counterRouter);
app.use('/api', registersRouter);
app.use('/api', usersRouter);
app.use('/api', consumRouter);
app.use('/api', dicdevisionRouter);
app.use('/api', ManyRoleRouter);
app.use('/api', RoleRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
