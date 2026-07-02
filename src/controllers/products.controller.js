import { 
    addNewProduct,
    getAllProducts
 } from "../services/products.service.js";

export const getProducts = async (req, res) =>{
    try{
        const productos = await getAllProducts();
        return res.json(productos)
    }
    catch (error){
        console.error("Error al obtener productos:", error);

        //respuesta para el cliente
        return res.status(500).json({
            message: "Hubo un problema"
        })
    }
};

export const createProduct  = async (req, res)=>{
    try{
        if (!req.body.name || !req.body.price) {
            return res.status(400).json({ error: "Faltan datos obligatorios." })
        }
        await addNewProduct(req.body);
        return res.status(201).json({ message: "Producto creado exitosamente." });
    }
    catch(error){
        console.error("Hubo un error: ", error);
        return res.status(500).json({ error: "Hubo un error." })

    }
};