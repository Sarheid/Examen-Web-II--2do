const { Router } = require('express');
const router = Router();

const { VehiculoCOntroller } = require('../controllers');

router.get('/',VehiculoCOntroller.getAll);

router.get('/:id',VehiculoCOntroller.get);

router.post('/',VehiculoCOntroller.create);

router.put('/:id',VehiculoCOntroller.update);

router.delete('/:id', VehiculoCOntroller.delete);

module.exports = router;