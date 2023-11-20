import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../Services/LanceService";

class LancesController{
    constructor(){}

    async listCompradores(req: Request, res: Response){

    }

    async listLeiloes(id?: string){

    }
    
}
export default new LancesController;