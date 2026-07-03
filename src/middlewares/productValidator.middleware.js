//middleware para validar los datos de un producto
export const productValidator = (req, res, next) => {
    const { title, price, category } = req.body;
    if (!title || !price || !category) {
        return res.status(400).json({ error: "Faltan datos obligatorios." });
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: "El precio debe ser un numero mayor a cero." });
    }
    next();
};

//middleware para validar el id de un producto
export const idValidator = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "Id invalido." });
    }
    next();
};