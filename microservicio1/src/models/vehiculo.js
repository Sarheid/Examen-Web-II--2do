const {Schema, model} = require('mongoose');

vehiculoSchema = new Schema({
    placa: String,
    nombre: String,
    espacio: String,
    numeroTicket: String,
    fechaEntrada: {
        type: Date,
        default: Date.now()
    },
    horaEntrada: {
        type: Date,
        default: Date.now()
    },
    estado: String
})


module.exports = model('EntradaVehiculos',vehiculoSchema);