import {

    useEffect,

    useState

}
    from "react";



interface Reservation{

    numReservation:number;

    dateReservation:string;

    statutReservation:string;

    client:{

        nomClient:string;

        prenomClient:string;

    };

    tarif:{

        nomTarif:string;

        service:{

            nomService:string;

        };

    };

}



export default function Reservations(){

    const [

        reservations,

        setReservations

    ] = useState<Reservation[]>([]);



    useEffect(() => {

        async function fetchReservations(){

            const response =

                await fetch(

                    "http://localhost:3000/reservations"
                );

            const data =
                await response.json();

            setReservations(data);

        }

        fetchReservations();

    }, []);



    return(

        <div className="services-page">

            <h1>

                Reservations

            </h1>



            <div className="services-grid">

                {

                    reservations.map((reservation) => (

                        <div

                            className="service-card"

                            key={reservation.numReservation}

                        >

                            <h2>

                                {

                                    reservation.client.nomClient

                                }

                                {" "}

                                {

                                    reservation.client.prenomClient

                                }

                            </h2>



                            <p>

                                {

                                    reservation.tarif.nomTarif

                                }

                            </p>



                            <p>

                                {

                                    reservation

                                        .tarif

                                        .service

                                        .nomService

                                }

                            </p>



                            <p>

                                {

                                    reservation

                                        .statutReservation

                                }

                            </p>



                            <p>

                                {

                                    new Date(

                                        reservation

                                            .dateReservation

                                    ).toLocaleDateString()

                                }

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}