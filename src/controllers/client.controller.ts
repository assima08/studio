import type {
    Request,
    Response
}
    from "express";

import { prisma }
    from "../lib/prisma";



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



export async function createClient(

    req:Request,

    res:Response

){

    const client =
        await prisma.client.create({

            data:req.body

        });

    res.json(client);

}