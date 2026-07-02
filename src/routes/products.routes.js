//las rutas con sus metodos http

import express from 'express';
import { 
    createProduct,
    getProducts
} from '../controllers/products.controller.js';

import { authentication } from '../middlewares/authentication.middleware.js';
const router = express.Router() // Instanciamos nuestro mini-recepcionista


router.get('/inicio', (req, res)=>{
    res.send("<h1>Bienvenido a mi E-Commerce</h1>");
})

router.post('/', authentication, createProduct);

router.get('/', authentication, getProducts);

// EXPORTAR: Enviamos hacia el exterior para que index.js lo pueda usar
export default router;