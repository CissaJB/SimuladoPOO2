import LancesController from "../Controllers/LancesController";
import { Router } from "express";

const LancesRouter = Router();

LancesRouter.get('/users', LancesController.listCompradores)

LancesRouter.post('/user', LancesController.listLeiloes);

