import express from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';

import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js"
import error404 from './src/middlewares/errorHandler.middleware.js';
import corsOptions from './src/config/cors.config.js';

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api/products', productsRoutes);

app.use('/auth', authRoutes);

app.use(error404);

export default app;