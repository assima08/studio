import { z }
    from "zod";



export const createExpertSchema =

    z.object({

        nomExpert:

            z.string()

                .min(2),



        emailExpert:

            z.string()

                .email(),



        telephoneExpert:

            z.string()

                .min(8),



        numService:

            z.number()

    });