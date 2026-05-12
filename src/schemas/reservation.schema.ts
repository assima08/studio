import { z }
    from "zod";



export const createReservationSchema =

    z.object({

        dateReservation:

            z.string(),



        statutReservation:

            z.string()

                .min(2),



        numClient:

            z.number(),



        numTarif:

            z.number()

    });