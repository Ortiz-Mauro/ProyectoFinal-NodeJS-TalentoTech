import { 
    addNewProduct,
    getAllProducts,
    getProductById,
    deleteProductById
 } from "../services/products.service.js";

//manejo la respuesta de la ruta para traer todos los productos
export const getProducts = async (req, res) =>{
    try{
        const productos = await getAllProducts();
        return res.json(productos);
    }
    catch (error){
        console.error("Error al obtener productos:", error);

        return res.status(500).json({
            error: "Hubo un problema al obtener los productos"
        });
    };
};

//manejo la respuesta de la ruta para obtener un producto por id
 export const  getProduct = async (req, res) =>{
    try{
        const id = req.params.id;
        const producto = await getProductById(id);

        if (!producto) {
            return res.status(404).json({ 
                error: "Producto no encontrado"
            });
        };

        return res.json(producto);
    }
    catch (error){
        console.error("Error al obtener producto:", error);

        return res.status(500).json({ 
            error: "Hubo un problema al obtener el producto" 
        });
    };
};

//manejo la respuesta de la ruta para crear un producto
export const createProduct  = async (req, res)=>{
    try{
        if (!req.body.title || !req.body.price || !req.body.category) {
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        }
        await addNewProduct(req.body);
        return res.status(201).json({ message: "Producto creado exitosamente." });
    }
    catch(error){
        console.error("Hubo un error: ", error);
        return res.status(500).json({ 
            error: "Hubo un error al crear el producto." 
        });
    };
};

//manejo la respuesta de la ruta para eliminar un producto por id
export const deleteProduct = async (req, res) =>{
    try{
        const id = req.params.id;
        await deleteProductById(id);
        return res.json({ 
            message: "Producto eliminado exitosamente." 
        });
    }
    catch(error){
        console.error("Hubo un error: ", error);
        return res.status(500).json({ 
            error: "Hubo un error al eliminar el producto." 
        });
    }
};