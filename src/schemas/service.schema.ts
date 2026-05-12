import { z }
    from "zod";



export const createServiceSchema =

    z.object({

        nomService:

            z.string()

                .min(2),



        description:

            z.string()

                .min(5)

    });