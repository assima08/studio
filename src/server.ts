import express
    from "express";

import serviceRoutes
    from "./routes/service.route.js";

import tarifRoutes
    from "./routes/tarif.route.js";

import expertRoutes
    from "./routes/expert.route.js";

import reservationRoutes
    from "./routes/reservation.route.js";

const app = express();



app.use(express.json());



app.use(
    "/services",
    serviceRoutes
);

app.use("/tarifs", tarifRoutes);

app.use("/experts", expertRoutes);

app.use("/reservations", reservationRoutes);

app.listen(3000, () => {

    console.log("Server running");

});