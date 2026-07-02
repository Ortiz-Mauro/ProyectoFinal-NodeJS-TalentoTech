// 1. Despertamos al guardia para que lea el archivo .env
import 'dotenv/config';  // porque ponemos el /config? que pasa si solo uso dotenv?


// 2. Traemos las herramientas del SDK de Firebase
import { initializeApp } from "firebase/app"; //es una funcion para inicializar mi base de datos? o porque es de firebase/app? lo mismo, hay mas ademas de /app? porque es esto?
import { getFirestore } from 'firebase/firestore';// esto supongo por el nombre get es para traer las funciones de la base de datos, no? pero porque es asi?


// 3. Armamos la configuración usando las llaves protegidas
const firebaseConfig = {
    apiKey: process.env.FIREBASE_CONFIG_API_KEY,   
    authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
    storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_CONFIG_APP_ID
};// basicamente no entiendo porque hay que usarlo ni de donde sale el process


// 4. Encendemos el motor de Firebase y obtenemos el acceso al almacén// esto tambien exiplica todo
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// 5. Exportamos el almacén para que el Modelo lo use
export { db };