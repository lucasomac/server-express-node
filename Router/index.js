import { Router } from 'express';

const routes = Router();
/* GET home page. */
routes.get('/', (request, response) => {
    response.send({ message: 'Endpoint Working - API Sucefull!' });
});

export default routes;

/**
 *Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) --> request.query
 * Route Params: Parâmentros utilizados para identificar recursos EX: /users/:1 --> request.params
 * Request Body: Corpo da requisição, utlizado para criar ou alterar recursos --> request.body
 **/

