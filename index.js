const express = require('express');
const { create } = require('express-handlebars');
const app = express();
require('dotenv').config();
require('./database/conexion');

//Configuración de express-handlebars (sistema de plantillas)
const hbs = create({
	extname: '.hbs',
	partialsDir: ['views/components'],
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');
app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server andando 🔥' + PORT));
