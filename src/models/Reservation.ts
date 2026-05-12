import {Client} from "./Client";
import {Tarif} from "./Tarif";

type StatutReservation =
    | "confirme"
    | "refuse"
    | "en attente";

export class Reservation {
    numReservations: number;
    dateReservation: Date;
    heureReservation: number;
    statutReservation: StatutReservation;
    client: Client;
    tarif: Tarif;

    constructor(numReservations: number, dateReservation: Date, heureReservation: number,
                statutReservation: StatutReservation, client: Client, tarif: Tarif) {
        this.numReservations = numReservations;
        this.dateReservation = dateReservation;
        this.heureReservation = heureReservation;
        this.statutReservation = statutReservation;
        this.client = client;
        this.tarif = tarif;
    }

}