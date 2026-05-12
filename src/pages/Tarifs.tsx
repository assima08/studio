import {

    useEffect,

    useState

}
    from "react";



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



    return(

        <div className="services-page">

            <h1>

                Tarifs

            </h1>



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

                                Type :
                                {tarif.typeTarif}

                            </p>



                            <p>

                                Prix :
                                {tarif.prixTarif}$

                            </p>



                            <p>

                                Durée :
                                {tarif.dureeTarif} min

                            </p>



                            <p>

                                Service :
                                {tarif.service.nomService}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}