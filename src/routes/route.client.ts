import express from 'express';
import controllersUser from '../controllers/controllers.get.balance';

const clienteRoute = express.Router();

clienteRoute.get('/conta/:id', controllersUser.getBalance);

export default clienteRoute;
