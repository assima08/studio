import {

    useEffect,

    useState

}
    from "react";



interface ExpertService{

    service:{

        numService:number;

        nomService:string;

    }

}



interface Expert{

    numExpert:number;

    nomExpert:string;

    emailExpert:string;

    telephoneExpert:string;

    services:ExpertService[];

}



export default function Experts(){

    const [

        experts,

        setExperts

    ] = useState<Expert[]>([]);



    useEffect(() => {

        async function fetchExperts(){

            const response =

                await fetch(

                    "http://localhost:3000/experts"
                );

            const data =
                await response.json();

            setExperts(data);

        }

        fetchExperts();

    }, []);



    return(

        <div className="services-page">

            <h1>

                Experts

            </h1>



            <div className="services-grid">

                {

                    experts.map((expert) => (

                        <div

                            className="service-card"

                            key={expert.numExpert}

                        >

                            <h2>

                                {expert.nomExpert}

                            </h2>



                            <p>

                                {expert.emailExpert}

                            </p>



                            <p>

                                {expert.telephoneExpert}

                            </p>



                            {

                                expert.services.map(

                                    (relation,index) => (

                                        <p key={index}>

                                            {

                                                relation

                                                    .service

                                                    .nomService

                                            }

                                        </p>

                                    )

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}