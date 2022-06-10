import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// Rotas do crud de usuario
router.post('/usuarios', userController.create);
router.get('/usuarios', userController.findAll);
router.get('/usuarios/:userId', userController.findOne);
router.put('/usuarios/:userId', userController.update);
router.delete('/usuarios/:userId', userController.delete);

export default router;
