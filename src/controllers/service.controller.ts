import type {
    Request,
    Response
}
    from "express";

import { prisma }
    from "../lib/prisma.js";



export async function getServices(

    _req:Request,

    res:Response

){

    const services =
        await prisma.service.findMany();

    res.json(services);

}



export async function createService(

    req:Request,

    res:Response

){

    const service =
        await prisma.service.create({

            data:{

                nomService:req.body.nomService,

                description:req.body.description

            }

        });

    res.json(service);

}



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