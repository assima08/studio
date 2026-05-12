import type {

    Request,

    Response

}
    from "express";

import { prisma }
    from "../lib/prisma.js";

import {

    createTarifSchema

}
    from "../schemas/tarif.schema.js";



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



export async function getTarifById(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    const tarif =

        await prisma.tarif.findUnique({

            where:{
                numTarif:id
            },

            include:{
                service:true
            }

        });

    res.json(tarif);

}



export async function createTarif(

    req:Request,

    res:Response

){

    createTarifSchema.parse(req.body);

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



export async function updateTarif(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    createTarifSchema.parse(req.body);

    const tarif =

        await prisma.tarif.update({

            where:{
                numTarif:id
            },

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



export async function deleteTarif(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    await prisma.tarif.delete({

        where:{
            numTarif:id
        }

    });

    res.json({

        message:"Tarif supprimé"

    });

}