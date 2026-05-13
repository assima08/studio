import {

    useEffect,

    useState

}
    from "react";

import "./css/Services.css";



interface Service{

    nomService:string;

}



interface Tarif{

    numTarif:number;

    nomTarif:string;

    typeTarif:string;

    prixTarif:number;

    dureeTarif:number;

    service:Service;

}



export default function Tarifs(){

    const [

        tarifs,

        setTarifs

    ] = useState<Tarif[]>([]);



    const [

        nomTarif,

        setNomTarif

    ] = useState("");



    const [

        typeTarif,

        setTypeTarif

    ] = useState("");



    const [

        prixTarif,

        setPrixTarif

    ] = useState("");



    const [

        dureeTarif,

        setDureeTarif

    ] = useState("");



    const [

        numService,

        setNumService

    ] = useState("");



    useEffect(() => {

        async function fetchTarifs(){

            const response =

                await fetch(

                    "http://localhost:3000/tarifs"
                );

            const data =
                await response.json();

            setTarifs(data);

        }

        fetchTarifs();

    }, []);



    async function createTarif(){

        const response =

            await fetch(

                "http://localhost:3000/tarifs",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                            "application/json"

                    },

                    body:JSON.stringify({

                        nomTarif,

                        typeTarif,

                        prixTarif:Number(prixTarif),

                        dureeTarif:Number(dureeTarif),

                        numService:Number(numService)

                    })

                }

            );



        const newTarif =
            await response.json();



        setTarifs([

            ...tarifs,

            newTarif

        ]);

    }



    return(

        <div className="services-page">

            <h1>

                Tarifs

            </h1>



            <div className="service-card">

                <input

                    value={nomTarif}

                    onChange={(e) =>

                        setNomTarif(e.target.value)

                    }

                    placeholder="Nom"

                />



                <input

                    value={typeTarif}

                    onChange={(e) =>

                        setTypeTarif(e.target.value)

                    }

                    placeholder="Type"

                />



                <input

                    value={prixTarif}

                    onChange={(e) =>

                        setPrixTarif(e.target.value)

                    }

                    placeholder="Prix"

                />



                <input

                    value={dureeTarif}

                    onChange={(e) =>

                        setDureeTarif(e.target.value)

                    }

                    placeholder="Durée"

                />



                <input

                    value={numService}

                    onChange={(e) =>

                        setNumService(e.target.value)

                    }

                    placeholder="ID Service"

                />



                <button onClick={createTarif}>

                    Créer

                </button>

            </div>



            <div className="services-grid">

                {

                    tarifs.map((tarif) => (

                        <div

                            className="service-card"

                            key={tarif.numTarif}

                        >

                            <h2>

                                {tarif.nomTarif}

                            </h2>



                            <p>

                                {tarif.typeTarif}

                            </p>



                            <p>

                                {tarif.prixTarif}$

                            </p>



                            <p>

                                {tarif.dureeTarif} min

                            </p>



                            <p>

                                {tarif.service.nomService}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}