import {Service} from "./Service";
export class Tarif {
    numTarif!: number;
    nomTarif!: string;
    typeTarif!: string;
    prixTarif!: number;
    dureTarif!: number;
    service !:Service;

    constructor(numTarif: number, nomTarif: string, typeTarif: string, prixTarif: number,
                dureTarif :number ,service :Service) {
        this.numTarif = numTarif;
        this.nomTarif = nomTarif;
        this.typeTarif = typeTarif;
        this.prixTarif = prixTarif;
        this.dureTarif = dureTarif;
        this.service = service;
    }

}