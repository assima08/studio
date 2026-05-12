import type {

    Request,

    Response

}
    from "express";

import { prisma }
    from "../lib/prisma.js";

import {

    createReservationSchema

}
    from "../schemas/reservation.schema.js";



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



export async function getReservationById(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    const reservation =

        await prisma.reservation.findUnique({

            where:{
                numReservation:id
            },

            include:{

                client:true,

                tarif:{

                    include:{
                        service:true
                    }

                }

            }

        });

    res.json(reservation);

}



export async function createReservation(

    req:Request,

    res:Response

){

    createReservationSchema.parse(req.body);

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



export async function updateReservation(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    createReservationSchema.parse(req.body);

    const reservation =

        await prisma.reservation.update({

            where:{
                numReservation:id
            },

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



export async function deleteReservation(

    req:Request,

    res:Response

){

    const id =
        Number(req.params.id);

    await prisma.reservation.delete({

        where:{
            numReservation:id
        }

    });

    res.json({

        message:"Reservation supprimée"

    });

}