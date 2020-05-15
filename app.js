const express= require('express');
const xmlparser = require('express-xml-bodyparser');
const bodyparser=require('body-parser')

const controller=require('./controller/getDataController');

const routes=require('./routes/getRoute')

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(xmlparser());
app.use(bodyparser.text({ type: 'text/*' }))

app.use('/api/v1',routes);


module.exports = app;

