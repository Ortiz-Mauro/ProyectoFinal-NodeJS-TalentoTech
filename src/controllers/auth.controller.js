import { generateToken } from "../utils/token.generator.js";

const userDefault = {
    email: "123@123.com",
    password: "1234"
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    if (email === userDefault.email && password === userDefault.password){
        //si coiniciden genero el token y lo retorno
        const token = generateToken(userDefault);
        return res.status(200).json({token: token});
    }
    return res.status(401).json({message: "Credenciales incorrectas." })
}