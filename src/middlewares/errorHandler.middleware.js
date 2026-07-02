const error404 = (req, res, next)=>{
    return res.status(404).json(
    {
        message: "Endpoint no encontrado"
    })
}

export default error404;