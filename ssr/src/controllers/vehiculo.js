const { VehiculoService } = require('../services');
const vehiculo = require('../services/vehiculo');

class VehiculoController{
    async index(req, res){
        try {
            const data = await VehiculoService.getAll();
            res.render('index',{data})
            
        } catch (error) {
            res.json(error);
        }
    }

    async agregarView(req, res){
        try {
            res.render('agregar');
        } catch (error) {
            res.json(error)
        }
    }

    async create(req, res){
        try {
            await VehiculoService.create(req.body);
            res.redirect('/');
        } catch (error) {
            res.json(error)
        }
    }

    async editarView(req, res){
        try {
            const {id} = req.params;
            const data = await VehiculoService.get(id);
            res.render('editar',{data})
        } catch (error) {
            
        }
    }

    async edit(req, res){
        try {
            const {id} = req.params;
            await VehiculoService.update(id,req.body);
            res.redirect('/');
        } catch (error) {
            res.json(error)
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params;
            await VehiculoService.delete(id);
            res.redirect('/');
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = new VehiculoController();