const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { MoverRoute } = require('./routes'); 
const { PORT } = require('./config');

const app = express();

app.set('port',PORT);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/servicioREST',MoverRoute);

app.listen(app.get('port'),()=>{
    console.log(`Servicio REST corriendo en el puerto ${app.get('port')}`);
})