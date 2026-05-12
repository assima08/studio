import type {
    Request,
    Response
}
    from "express";

import { prisma }
    from "../lib/prisma.js";

import {
    createServiceSchema
}
    from "../schemas/service.schema.js";


export async function updateService(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    const service =
        await prisma.service.update({

            where:{
                numService:id
            },

            data:{

                nomService:req.body.nomService,

                description:req.body.description

            }

        });

    res.json(service);

}
export async function getServiceById(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    const service =
        await prisma.service.findUnique({

            where:{
                numService:id
            }

        });

    res.json(service);

}
export async function deleteService(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    await prisma.service.delete({

        where:{
            numService:id
        }

    });

    res.json({

        message:"Service supprimé"

    });

}
export async function createService(

    req:Request,

    res:Response

){

    createServiceSchema.parse(req.body);

    const service =

        await prisma.service.create({

            data:{

                nomService:req.body.nomService,

                description:req.body.description

            }

        });

    res.json(service);

}
export async function getServices(

    _req:Request,

    res:Response

){

    try{

        const services =

            await prisma.service.findMany({

                include:{
                    tarifs:true
                }

            });

        res.json(services);

    }

    catch(error:any){

        res.status(400).json({

            error:"Erreur",

            details:error.errors

        });

    }

}