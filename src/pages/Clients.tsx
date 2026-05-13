import {

    useEffect,

    useState

}
    from "react";

import "./css/Services.css";



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



    const [

        nomClient,

        setNomClient

    ] = useState("");



    const [

        prenomClient,

        setPrenomClient

    ] = useState("");



    const [

        email,

        setEmail

    ] = useState("");



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



    async function createClient(){

        const response =

            await fetch(

                "http://localhost:3000/clients",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                            "application/json"

                    },

                    body:JSON.stringify({

                        nomClient,

                        prenomClient,

                        email

                    })

                }

            );



        const newClient =
            await response.json();



        setClients([

            ...clients,

            newClient

        ]);



        setNomClient("");

        setPrenomClient("");

        setEmail("");

    }



    return(

        <div className="services-page">

            <h1>

                Clients

            </h1>



            <div className="service-card">

                <input

                    value={nomClient}

                    onChange={(e) =>

                        setNomClient(e.target.value)

                    }

                    placeholder="Nom"

                />



                <input

                    value={prenomClient}

                    onChange={(e) =>

                        setPrenomClient(e.target.value)

                    }

                    placeholder="Prénom"

                />



                <input

                    value={email}

                    onChange={(e) =>

                        setEmail(e.target.value)

                    }

                    placeholder="Email"

                />



                <button onClick={createClient}>

                    Créer

                </button>

            </div>



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