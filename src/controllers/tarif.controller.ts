import type {
    Request,
    Response
}
    from "express";

import { prisma }
    from "../lib/prisma.js";



export async function getTarifs(

    _req:Request,

    res:Response

){

    const tarifs =
        await prisma.tarif.findMany({

            include:{
                service:true
            }

        });

    res.json(tarifs);

}



export async function createTarif(

    req:Request,

    res:Response

){

    const tarif =
        await prisma.tarif.create({

            data:{

                nomTarif:req.body.nomTarif,

                typeTarif:req.body.typeTarif,

                prixTarif:req.body.prixTarif,

                dureeTarif:req.body.dureeTarif,

                numService:req.body.numService

            }

        });

    res.json(tarif);

}