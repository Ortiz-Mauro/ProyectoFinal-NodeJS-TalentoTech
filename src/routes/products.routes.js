import express from 'express';
import { 
    createProduct,
    getProducts,
    getProduct,
    deleteProduct
} from '../controllers/products.controller.js';

import { authentication } from '../middlewares/authentication.middleware.js';

const router = express.Router()
//Definimos las rutas, si esta autenticado ejecuta la funcion correspondiente del controlador.
router.get('/', authentication, getProducts);

router.get('/:id', authentication, getProduct);

router.post('/create', authentication, createProduct);

router.delete('/:id', authentication, deleteProduct);

//Enviamos hacia el exterior para que app.js lo pueda usar
export default router;