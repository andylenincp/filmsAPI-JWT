const express = require('express');
const apiRouter = require('./routes/api');

// Inicializaciones
const app = express();
require('./db');

// Configuraciones
app.set('title', 'API Films');
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', apiRouter);

// Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor de', app.get('title'), 'corriendo en el puerto', app.get('port'));
});