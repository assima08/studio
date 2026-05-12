import { z }
    from "zod";



export const createTarifSchema =

    z.object({

        nomTarif:

            z.string()

                .min(2),



        typeTarif:

            z.string()

                .min(2),



        prixTarif:

            z.number()

                .positive(),



        dureeTarif:

            z.number()

                .positive(),



        numService:

            z.number()

    });