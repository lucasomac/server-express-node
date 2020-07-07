import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from '../Router';
//Constantes globais
var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
};
const dotenvOptions = {
    path: '../'
}
//Configurações de environment variables
dotenv.config({dotenvOptions});

//Constantes globais
const app = express();
console.log(process.env.SERVER_PORT);
const PORT = process.env.SERVER_PORT || 1000;
//Configurations Globais
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(PORT || 10, () => { console.log(`Server running at: http://localhost:${PORT}/`) });
