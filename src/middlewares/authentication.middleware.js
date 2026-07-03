import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    //se lee como:
    //authHeader, si existes y no es nulo, ejecuta .split(). Si no existes, devuélveme undefined
    const token = authHeader?.split(' ')[1]; // Extraer el token del encabezado

    if (!token) {
        return res.status(401).json({ error: "Acceso no autorizado" });
    };
    
    jwt.verify(token, SECRET_KEY, (error) => {
        if (error) {
            return res.status(403).json({ error: "Token invalido" });
        };

        next();
    });
}