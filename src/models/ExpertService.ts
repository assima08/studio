import {Expert} from "../models/Expert";
import {Service} from "../models/Service";

export class ExpertService {
    expert : Expert;
    service : Service;

    constructor(expert:Expert, service : Service) {
        this.expert = expert;
        this.service = service;
    }
}