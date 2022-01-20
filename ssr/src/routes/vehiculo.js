const { Router } = require('express');
const router = Router()

const { VehiculoController } = require('../controllers');

router.get('/',VehiculoController.index);

router.get('/add', VehiculoController.agregarView);

router.get('/edit/:id',VehiculoController.editarView)

router.get('/delete/:id', VehiculoController.delete);

router.post('/edit/:id', VehiculoController.edit);

router.post('/', VehiculoController.create);



module.exports = router;