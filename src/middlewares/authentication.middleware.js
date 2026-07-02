import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
    // Obtener el token del encabezado de autorización
    const authHeader = req.headers['authorization'];
    //se lee como:
    //authHeader, si existes y no eres nulo, ejecuta .split(). Si no existes, devuélveme undefined
    const token = authHeader?.split(' ')[1]; // Extraer el token del encabezado

    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado' });
    }
    // Aquí iría la lógica para verificar el token (por ejemplo, usando JWT)
    // Si el token es válido, llamar a next() para continuar con la solicitud
    // Si no es válido, devolver un error

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalido' });
        }
        next();
    });
}