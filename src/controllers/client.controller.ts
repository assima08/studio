import type {

    Request,

    Response

}
    from "express";

import { prisma }
    from "../lib/prisma.js";

import {

    createClientSchema

}
    from "../schemas/client.schema.js";



export async function getClients(

    _req:Request,

    res:Response

){

    const clients =

        await prisma.client.findMany({

            include:{
                reservations:true
            }

        });

    res.json(clients);

}



export async function getClientById(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    const client =

        await prisma.client.findUnique({

            where:{
                numClient:id
            },

            include:{
                reservations:true
            }

        });

    res.json(client);

}



export async function createClient(

    req:Request,

    res:Response

){

    createClientSchema.parse(req.body);

    const client =

        await prisma.client.create({

            data:{

                nomClient:req.body.nomClient,

                prenomClient:req.body.prenomClient,

                email:req.body.email

            }

        });

    res.json(client);

}



export async function updateClient(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    createClientSchema.parse(req.body);

    const client =

        await prisma.client.update({

            where:{
                numClient:id
            },

            data:{

                nomClient:req.body.nomClient,

                prenomClient:req.body.prenomClient,

                email:req.body.email

            }

        });

    res.json(client);

}



export async function deleteClient(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    await prisma.client.delete({

        where:{
            numClient:id
        }

    });

    res.json({

        message:"Client supprimé"

    });

}