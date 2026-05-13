import {

    useEffect,

    useState

}
    from "react";

import "./css/Reservation.css";



interface Tarif{

    numTarif:number;

    nomTarif:string;

    prixTarif:number;

    service:{

        nomService:string;

    }

}



export default function Reservation(){

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



    const [

        dateReservation,

        setDateReservation

    ] = useState("");



    const [

        heureReservation,

        setHeureReservation

    ] = useState("");



    const [

        numTarif,

        setNumTarif

    ] = useState("");



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



    async function createReservation(){

        const dateComplete =

            new Date(

                `${dateReservation}T${heureReservation}`
            );



        const response =

            await fetch(

                "http://localhost:3000/reservations",

                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                            "application/json"

                    },

                    body:JSON.stringify({

                        nomClient,

                        prenomClient,

                        email,

                        dateReservation:dateComplete,

                        statutReservation:"En attente",

                        numTarif:Number(numTarif)

                    })

                }

            );



        const data =
            await response.json();



        console.log(data);



        alert(

            "Réservation envoyée"

        );



        setNomClient("");

        setPrenomClient("");

        setEmail("");

        setDateReservation("");

        setHeureReservation("");

        setNumTarif("");

    }



    return(

        <div className="reservation-page">

            <div className="reservation-container">

                <h1>

                    Réserver une session

                </h1>



                <div className="reservation-form">

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

                        type="email"

                    />



                    <select

                        value={numTarif}

                        onChange={(e) =>

                            setNumTarif(e.target.value)

                        }

                    >

                        <option value="">

                            Choisir un service

                        </option>



                        {

                            tarifs.map((tarif) => (

                                <option

                                    key={tarif.numTarif}

                                    value={tarif.numTarif}

                                >

                                    {

                                        tarif.service.nomService

                                    }

                                    {" - "}

                                    {

                                        tarif.nomTarif

                                    }

                                    {" - "}

                                    {

                                        tarif.prixTarif

                                    }

                                    $

                                </option>

                            ))

                        }

                    </select>



                    <input

                        type="date"

                        value={dateReservation}

                        onChange={(e) =>

                            setDateReservation(e.target.value)

                        }

                    />



                    <select

                        value={heureReservation}

                        onChange={(e) =>

                            setHeureReservation(e.target.value)

                        }

                    >

                        <option value="">

                            Choisir une heure

                        </option>



                        <option value="09:00">

                            09:00

                        </option>



                        <option value="11:00">

                            11:00

                        </option>



                        <option value="13:00">

                            13:00

                        </option>



                        <option value="15:00">

                            15:00

                        </option>



                        <option value="17:00">

                            17:00

                        </option>

                    </select>



                    <button

                        onClick={createReservation}

                    >

                        Réserver

                    </button>

                </div>

            </div>

        </div>

    );

}