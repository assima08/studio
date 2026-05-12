import { Router }
    from "express";

import {

    getTarifs,

    createTarif

}
    from "../controllers/tarif.controller.js";

const router:Router = Router();



router.get("/", getTarifs);

router.post("/", createTarif);



export default router;