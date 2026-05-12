import { z }
    from "zod";



export const createClientSchema =

    z.object({

        nomClient:

            z.string()

                .min(2),



        prenomClient:

            z.string()

                .min(2),



        email:

            z.string()

                .email()

    });