import type {

    Request,

    Response

}
    from "express";

import { prisma }
    from "../lib/prisma.js";

import {

    createExpertSchema

}
    from "../schemas/expert.schema.js";



export async function getExperts(

    _req:Request,

    res:Response

){

    const experts =

        await prisma.expert.findMany({

            include:{

                services:{

                    include:{
                        service:true
                    }

                }

            }

        });

    res.json(experts);

}



export async function getExpertById(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    const expert =

        await prisma.expert.findUnique({

            where:{
                numExpert:id
            },

            include:{

                services:{

                    include:{
                        service:true
                    }

                }

            }

        });

    res.json(expert);

}



export async function createExpert(

    req:Request,

    res:Response

){

    createExpertSchema.parse(req.body);

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



export async function deleteExpert(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    await prisma.expert.delete({

        where:{
            numExpert:id
        }

    });

    res.json({

        message:"Expert supprimé"

    });

}