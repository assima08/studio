export class Client {
   numClient : number;
   nomClient : string;
   prenomClient : string;
   emailClient : string;

   constructor(numCLient : number, nomClient : string, prenomClient : string, emailClient : string) {
       this.numClient = numCLient;
       this.nomClient = nomClient;
       this.prenomClient = prenomClient;
       this.emailClient = emailClient;

   }
}