const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { VehiculoRouter } = require('./routes');
const { MONGO_URI, PORT } = require('./config');

const app = express();


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('port',PORT);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/vehiculo/salida', VehiculoRouter);

app.listen(app.get('port'),()=>{
    console.log(`Api corriendo en el puerto ${app.get('port')}`);
})