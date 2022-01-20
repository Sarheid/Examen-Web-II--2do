const { Router } = require('express');
const router = Router();

const { MoverControler } = require('../controllers');

router.get('/:desde/:hasta', MoverControler.filtrar);

module.exports = router;