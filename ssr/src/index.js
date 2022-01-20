const express = require('express');
const morgan = require('morgan');

const path = require ('path');

const { VehiculoRoute } = require('./routes')

const app = express();

app.set('port', 5000);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(VehiculoRoute)

app.listen(app.get('port'),()=>{
    console.log(`SSR corriendo en el puerto ${app.get('port')}`);
})