import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
    // Creamos un objeto con los datos que queremos incluir en el token.
    const user = { id: userData.id, email: userData.email };
    
    // Le asignamos un tiempo de expiración al token, en este caso 1 hora.
    const expiration = { expiresIn: '1h' };

    // Retorna el token generado.
    return jwt.sign(user, SECRET_KEY, expiration);
}