import {

    useEffect,

    useState

}
    from "react";



interface Client{

    numClient:number;

    nomClient:string;

    prenomClient:string;

    email:string;

}



export default function Clients(){

    const [

        clients,

        setClients

    ] = useState<Client[]>([]);



    useEffect(() => {

        async function fetchClients(){

            const response =

                await fetch(

                    "http://localhost:3000/clients"
                );

            const data =
                await response.json();

            setClients(data);

        }

        fetchClients();

    }, []);



    return(

        <div className="services-page">

            <h1>

                Clients

            </h1>



            <div className="services-grid">

                {

                    clients.map((client) => (

                        <div

                            className="service-card"

                            key={client.numClient}

                        >

                            <h2>

                                {client.nomClient}

                                {" "}

                                {client.prenomClient}

                            </h2>



                            <p>

                                {client.email}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}