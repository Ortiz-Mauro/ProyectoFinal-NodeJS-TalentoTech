import express from 'express';
import { 
    createProduct,
    getProducts,
    getProduct,
    deleteProduct
} from '../controllers/products.controller.js';

import { authentication } from '../middlewares/authentication.middleware.js';

import { productValidator, idValidator } from '../middlewares/productValidator.middleware.js';

const router = express.Router()
//Definimos las rutas, si esta autenticado ejecuta la funcion correspondiente del controlador.
router.get('/', authentication, getProducts);

router.get('/:id', authentication, idValidator, getProduct);

router.post('/create', authentication, productValidator, createProduct);

router.delete('/:id', authentication, idValidator, deleteProduct);

//Enviamos hacia el exterior para que app.js lo pueda usar
export default router;