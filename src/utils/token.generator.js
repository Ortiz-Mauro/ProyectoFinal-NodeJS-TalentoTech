import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
    // Empacamos los datos permitidos del usuario (Payload)
    const user = { id: userData.id, email: userData.email };
    
    // Le asignamos un tiempo de vida a la pulsera (1 hora)
    const expiration = { expiresIn: '1h' };

    // Utiliza el método jwt.sign() pasándole tres parámetros: 
    // los datos del usuario, tu llave secreta y la expiración.
    // Retorna ese resultado.
    return jwt.sign(user, SECRET_KEY, expiration);
}