import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
    constructor(){

    }

    async listProdutos(id?: string){

    }

    async listLances(id?: string){

    }

    async createLeilao(id?: string){
        try{
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao
        }catch(error){
            console.log(error);
            return null
        }
    }

}



export default new LeilaoService();