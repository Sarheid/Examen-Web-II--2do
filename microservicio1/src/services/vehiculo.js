const { VehiculoModel } = require('../models');

class VehiculoService{
    async getAll(){
        return await VehiculoModel.find();
    }

    async get(id){
        return await VehiculoModel.findById(id);
    }

    async filtrar(desde, hasta){
        return await VehiculoModel.find({fechaEntrada: {
            $gte: desde,
            $lt: hasta
            },
            estado: 'PENDIENTE'
        })
    }

    async create(entity){
        return await VehiculoModel.create(entity);
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