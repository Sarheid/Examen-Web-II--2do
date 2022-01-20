const { json } = require('express');
const { VehiculoService } = require('../services');

class VehiculoController{
    async getAll(req, res){
        try {
            const data = await VehiculoService.getAll();
            res.json({data})
        } catch (error) {
            res.json({error})
        }
    }

    async get(req, res){
        try {
            const {id} = req.params;
            const data = await VehiculoService.get(id);
            res.json({data})
        } catch (error) {
            res.json({error})
        }
    }

    async create(req, res){
        try {
            const data = await VehiculoService.create(req.body);
            res.json({data})
        } catch (error) {
            res.json({error})
        }
    }

    async update(req, res){
        try {
            const {id} = req.params
            const data = await VehiculoService.update(id,req.body);
            res.json({data})
        } catch (error) {
            res.json({error})
        }
    }

    async delete(req,res){
        try {
            const {id} = req.params;
            const data = await VehiculoService.delete(id);
            res.json({data})
        } catch (error) {
            res.json({error})
        }
    }
}

module.exports = new VehiculoController();