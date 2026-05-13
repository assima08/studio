import {

    useEffect,

    useState

}
    from "react";

import "./css/Services.css";



interface Service{

    numService:number;

    nomService:string;

    description:string;

}



export default function Services(){

    const [

        services,

        setServices

    ] = useState<Service[]>([]);



    const [

        nomService,

        setNomService

    ] = useState("");



    const [

        description,

        setDescription

    ] = useState("");



    useEffect(() => {

        async function fetchServices(){

            const response =

                await fetch(

                    "http://localhost:3000/services"
                );

            const data =
                await response.json();

            setServices(data);

        }

        fetchServices();

    }, []);



    async function createService(){

        const response =

            await fetch(

                "http://localhost:3000/services",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                            "application/json"

                    },

                    body:JSON.stringify({

                        nomService,

                        description

                    })

                }

            );



        const newService =
            await response.json();



        setServices([

            ...services,

            newService

        ]);



        setNomService("");

        setDescription("");

    }



    return(

        <div className="services-page">

            <h1>

                Services

            </h1>



            <div className="service-card">

                <input

                    value={nomService}

                    onChange={(e) =>

                        setNomService(e.target.value)

                    }

                    placeholder="Nom du service"

                />



                <input

                    value={description}

                    onChange={(e) =>

                        setDescription(e.target.value)

                    }

                    placeholder="Description"

                />



                <button onClick={createService}>

                    Créer

                </button>

            </div>



            <div className="services-grid">

                {

                    services.map((service) => (

                        <div

                            className="service-card"

                            key={service.numService}

                        >

                            <h2>

                                {service.nomService}

                            </h2>



                            <p>

                                {service.description}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}