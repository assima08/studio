import {

    useEffect,

    useState

}
    from "react";



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



    return(

        <div>

            <h1>

                Services

            </h1>



            {

                services.map((service) => (

                    <div

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

    );

}