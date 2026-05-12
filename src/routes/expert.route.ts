import { Router }
    from "express";

import {

    getExperts,

    createExpert

}
    from "../controllers/expert.controller.js";

const router:Router = Router();



router.get("/", getExperts);

router.post("/", createExpert);



export default router;