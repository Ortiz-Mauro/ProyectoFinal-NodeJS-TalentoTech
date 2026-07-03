import { db } from "../data/data.js";
import { collection, doc, getDoc, getDocs, addDoc, deleteDoc } from "firebase/firestore";

const coleccionProductos = collection(db, 'products');

//traer todos los productos
export const getAllProducts = async () => {
    try{
        const productos = [];
        const querySnapshot = await getDocs(coleccionProductos);

        querySnapshot.forEach((producto)=>{
        //el id lo pongo a mano y todo el resto del contenido de la base de datos usando '...'
        productos.push({ id: producto.id, ...producto.data() });
        });

        return productos;
    }

    catch(error){
        console.log("Hubo un error:", error);
        throw error;
    }
}

// traer producto por id
export const getProductById = async (id) =>{
    try{
        // NORMALIZACION: Forzamos que el ID siempre sea un String(FireStore guarda los id como string, si le paso un numero me va a tirar error)
        const IdNormalizado = String(id); 
        const productDoc = await getDoc(doc(coleccionProductos, IdNormalizado));// el doc lo que hace es traer la referencia exacta de donde esta el registro
        if(!productDoc.exists()){
            return null;
        }
        const producto = {id: productDoc.id, ...productDoc.data()}
        return producto;
    }

    catch(error){
        console.log("Hubo un error:", error);
        throw error;
    }
}

export const addNewProduct = async (producto)=>{
    try{
        //docRef guarda la referencia de donde se creo el registro
        const docRef = await addDoc(coleccionProductos, producto);
        const productoCreado = {id: docRef.id, ...producto};

        return productoCreado;
    }

    catch(error){
        console.log("Hubo un error:", error);
        throw error;
    }
}

export const deleteProductById = async(id)=>{
    try{
        // NORMALIZACION: Forzamos que el ID siempre sea un String
        const IdNormalizado = String(id); 
        await deleteDoc(doc(coleccionProductos, IdNormalizado));
        return true;//retorno true si se borro el producto
    }

    catch(error){
        console.log("Hubo un error:", error);
        throw error;
    }
}