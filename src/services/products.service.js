//uso as para renombrar las funciones, ya que se llaman igual
import { 
    getAllProducts as getAllProductsModel,
    addNewProduct as addNewProductModel,
    getProductById as getProductByIdModel,
    deleteProductById as deleteProductByIdModel
    } from "../models/products.model.js";

export const getAllProducts = async () => {
    return await getAllProductsModel();
};

export const addNewProduct = async (product) => {
    return await addNewProductModel(product);
};

export const getProductById = async (id) => {
    return await getProductByIdModel(id);
};

export const deleteProductById = async (id) => {
    return await deleteProductByIdModel(id);
};
