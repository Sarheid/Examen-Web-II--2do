const { VehiculoModel } = require('../models');

class VehiculoService{
    async getAll(){
        return await VehiculoModel.find();
    }

    async get(id){
        return await VehiculoModel.findById(id);
    }

    async create(entity){
        const vehiculo = new VehiculoModel(entity);
        vehiculo.calcularTotal();
        return await vehiculo.save();
    }

    async update(id, entity){
        await VehiculoModel.findByIdAndUpdate(id,entity);
        return await VehiculoModel.findById(id);
    }

    async delete(id){
        return await VehiculoModel.findByIdAndDelete(id);
    }
}

module.exports = new VehiculoService();