import express from 'express';
import { login } from '../controllers/auth.controller.js';

const router = express.Router();
//Definimos la ruta para el login, ejecuta la funcion correspondiente del controlador
router.post('/login', login);

export default router;