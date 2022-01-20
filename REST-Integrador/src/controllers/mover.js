const { MoverService } = require('../services');

class MoverController{
    async filtrar(req, res){
        try {
            const {desde, hasta} = req.params;
            const data = await MoverService.filtrar(desde, hasta);
            res.json({data});
        } catch (error) {
            res.json({error});
        }
    }
}

module.exports = new MoverController();