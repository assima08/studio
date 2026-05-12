export class Service {
     numService ! : number;
     nomService ! : string;
     descriptionService ! : string;

     constructor(numService:number, nomService:string, descriptionService:string) {
         this.numService = numService;
         this.nomService = nomService;
         this.descriptionService = descriptionService;
     }
}