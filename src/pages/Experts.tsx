import {

    useEffect,

    useState

}
    from "react";

import "./css/Services.css";



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



    const [

        nomExpert,

        setNomExpert

    ] = useState("");



    const [

        emailExpert,

        setEmailExpert

    ] = useState("");



    const [

        telephoneExpert,

        setTelephoneExpert

    ] = useState("");



    const [

        numService,

        setNumService

    ] = useState("");



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



    async function createExpert(){

        const response =

            await fetch(

                "http://localhost:3000/experts",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                            "application/json"

                    },

                    body:JSON.stringify({

                        nomExpert,

                        emailExpert,

                        telephoneExpert,

                        numService:Number(numService)

                    })

                }

            );



        const newExpert =
            await response.json();



        setExperts([

            ...experts,

            newExpert

        ]);

    }



    return(

        <div className="services-page">

            <h1>

                Experts

            </h1>



            <div className="service-card">

                <input

                    value={nomExpert}

                    onChange={(e) =>

                        setNomExpert(e.target.value)

                    }

                    placeholder="Nom"

                />



                <input

                    value={emailExpert}

                    onChange={(e) =>

                        setEmailExpert(e.target.value)

                    }

                    placeholder="Email"

                />



                <input

                    value={telephoneExpert}

                    onChange={(e) =>

                        setTelephoneExpert(e.target.value)

                    }

                    placeholder="Téléphone"

                />



                <input

                    value={numService}

                    onChange={(e) =>

                        setNumService(e.target.value)

                    }

                    placeholder="ID Service"

                />



                <button onClick={createExpert}>

                    Créer

                </button>

            </div>



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

                        </div>

                    ))

                }

            </div>

        </div>

    );

}