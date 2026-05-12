import type {
    Request,
    Response
}
    from "express";

import { prisma }
    from "../lib/prisma.js";



export async function getReservations(

    _req:Request,

    res:Response

){

    const reservations =
        await prisma.reservation.findMany({

            include:{

                client:true,

                tarif:{

                    include:{
                        service:true
                    }

                }

            }

        });

    res.json(reservations);

}



export async function createReservation(

    req:Request,

    res:Response

){

    const reservation =
        await prisma.reservation.create({

            data:{

                dateReservation:
                    new Date(req.body.dateReservation),

                statutReservation:
                req.body.statutReservation,

                numClient:
                req.body.numClient,

                numTarif:
                req.body.numTarif

            }

        });

    res.json(reservation);

}