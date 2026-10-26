const express = require('express');
const controller = require('../controllers/produtosController');

const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller, buscarPorId);
router.post('/', controller.criar);
router.get('/:id', controller.atualizar);
router.get('/:id', controller.remover);

module.export = router;