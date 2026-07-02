import { db } from "../data/data.js";
import { collection, doc, getDoc, getDocs, addDoc, deleteDoc } from "firebase/firestore";

const coleccionProductos = collection(db, 'products');

//traer todos los productos
export const getAllProducts = async () => {
    try{
        const productos = [];
        const querySnapshot = await getDocs(coleccionProductos);// TRAIGO LOS PRODUCTOS QUE HAY EN ESE PRECISO INSTANTE(capas un milisegundo despues alguien compro un producto), PERO VIENEN EN UN OBJETO DE GOOGLE DONDE DEBEMOS ITERAR SOBRE EL PARA EXTRAER LOS DATOS

        // TRANSFORMO EL OBJETO DE FIREBASE A UNA LISTA
        querySnapshot.forEach((producto)=>{
        // 1. Armamos un nuevo objeto literal {}
        // 2. Le asignamos la propiedad 'id' manualmente
        // 3. Volcamos todo el resto del contenido de la base de datos usando '...'
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
        const productDoc = await getDoc(doc(coleccionProductos, id));// el doc lo que hace es traer la referencia exacta de donde esta el registro
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
        //se guarda la referencia de donde se creo el registro
        const docRef = await addDoc(coleccionProductos, producto);// aca le paso a que coleccion quiero agregar el producto y el producto que quiero agregar, y me devuelve la referencia de donde se guardo
        const productoCreado = {id: docRef.id, ...producto};// aca le agrego el id que me devuelve la referencia y el resto de los datos del producto

        return productoCreado;
    }
    catch(error){
        console.log("Hubo un error:", error);
        throw error;
    }
}

export const deleteProduct = async(id)=>{
    try{
        const Existe = await getProductById(id);//verifico que exista un producto con esa id, sino retorno null
        if(Existe===null){
            return null;
        }
        await deleteDoc(doc(coleccionProductos, id));

        return true;//retorno true si se borro el producto
    }
    catch(error){
        console.log("Hubo un error:", error);
        throw error;
    }
}