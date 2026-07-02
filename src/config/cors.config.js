const corsOptions = {
    //origin: ['https://tu-frontend.com'], si tuviera front iria aca
    methods: ['GET', 'POST', 'PUT', 'DELETE'],//solo dejo usar estos metodos, si quisiera dejar que cualquiera use mi api, no pondria esta linea
};

export default corsOptions;