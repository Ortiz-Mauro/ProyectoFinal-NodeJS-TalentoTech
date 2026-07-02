// (Temporalmente mudamos nuestra base de datos simulada a este universo)
//uso as para renombrar la funcion, ya que se llaman igual
import { getAllProducts as getAllProductsModel } from "../models/products.model.js";
import { addNewProduct as addNewProductModel } from "../models/products.model.js";

// uso async porque la funcion del modelo es asincrona
// ademas al retornar uso el wait porque se que tarda un poco
export const getAllProducts = async () => {
    return await getAllProductsModel();
};

export const addNewProduct = async (product) => {
    return await addNewProductModel(product);
};
