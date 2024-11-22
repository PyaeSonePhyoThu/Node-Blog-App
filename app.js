const express = require('express');
require('dotenv').config();

const app = express();
const expressLayout = require('express-ejs-layouts');
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use('/', require('./server/routes/main'));

app.listen(PORT, () =>
{
    console.log(`App listening on port ${PORT}`)
})