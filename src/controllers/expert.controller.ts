import type {
    Request,
    Response
}
    from "express";

import { prisma }
    from "../lib/prisma.js";



export async function getExperts(

    _req:Request,

    res:Response

){

    const experts =
        await prisma.expert.findMany({

            include:{
                service:true
            }

        });

    res.json(experts);

}



export async function createExpert(

    req:Request,

    res:Response

){

    const expert =
        await prisma.expert.create({

            data:{

                nomExpert:req.body.nomExpert,

                emailExpert:req.body.emailExpert,

                telephoneExpert:req.body.telephoneExpert

            }

        });



    await prisma.expertService.create({

        data:{

            numExpert:expert.numExpert,

            numService:req.body.numService

        }

    });



    res.json(expert);

}