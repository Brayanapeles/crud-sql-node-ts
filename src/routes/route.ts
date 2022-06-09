import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// Rotas do crud de usuario
router.post('/usuarios', userController.create);
router.get('/usuarios', userController.findAll);
router.get('/usuarios:userID', userController.findOne);
router.put('/usuarios:userID', userController.update);
router.delete('/usuarios:userID', userController.delete);

export default router;
