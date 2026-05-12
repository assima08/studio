import { Router }
    from "express";

import {

    getReservations,

    createReservation

}
    from "../controllers/reservation.controller.js";

const router:Router = Router();



router.get("/", getReservations);

router.post("/", createReservation);



export default router;