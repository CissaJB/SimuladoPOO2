import LeilaoController from "../Controllers/LeilaoController";
import { Router } from "express";

const LeilaoRouter = Router();

LeilaoRouter.get('/users', LeilaoController.listProdutos)

LeilaoRouter.post('/user', LeilaoController.createLeilao);

LeilaoRouter.get('/user', LeilaoController.listProdutos);


export default LeilaoRouter;