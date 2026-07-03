import { generateToken } from "../utils/token.generator.js";

const userDefault = {
    id: 1,
    email: "123@123.com",
    password: "1234"
};

//manejo la respuesta de la ruta para login
export const login = async (req, res) => {
    const {email, password} = req.body;

    if (email === userDefault.email && password === userDefault.password){
        //si coiniciden genero el token y lo retorno
        const token = generateToken(userDefault);
        return res.status(200).json({token: token});
    }
    return res.status(401).json({error: "Credenciales incorrectas." })
}