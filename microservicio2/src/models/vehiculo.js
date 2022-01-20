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
    horaSalida: {
        type: Date,
        default: Date.now()
    },
    horas: Number,
    costo: Number,
    total: Number
})

vehiculoSchema.methods.calcularTotal = function(){
    this.total = this.costo * this.horas;
}

module.exports = model('SalidaVehiculos',vehiculoSchema);