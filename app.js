const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./util/database');

const expenseRoute = require('./routes/expense');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use('/',expenseRoute);

sequelize.sync().then((m)=>app.listen(3000)).catch((err)=> console.log(err));