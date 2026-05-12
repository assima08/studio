import { Router }
    from "express";

import {

    getServices,

    createService,

    updateService,

    getServiceById,

    deleteService

}
    from "../controllers/service.controller.js";

const router:Router = Router();



router.get("/", getServices);

router.post("/", createService);

router.patch("/:id", updateService);

router.get("/:id", getServiceById);

router.delete("/:id", deleteService);

export default router;