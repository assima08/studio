import {

    Routes,

    Route

}
    from "react-router-dom";

import Navbar
    from "./components/Navbar";

import Footer
    from "./components/footer";

import Home
    from "./pages/Home";

import Services
    from "./pages/Services";

import Experts
    from "./pages/Experts";

import Tarifs
    from "./pages/Tarifs";

import Clients
    from "./pages/Clients";

import Reservations
    from "./pages/Reservations";



function App(){

    return(

        <div>

            <Navbar />



            <Routes>

                <Route

                    path="/"

                    element={<Home />}

                />



                <Route

                    path="/services"

                    element={<Services />}

                />



                <Route

                    path="/experts"

                    element={<Experts />}

                />



                <Route

                    path="/tarifs"

                    element={<Tarifs />}

                />



                <Route

                    path="/clients"

                    element={<Clients />}

                />



                <Route

                    path="/reservations"

                    element={<Reservations />}

                />

            </Routes>



            <Footer />

        </div>

    );

}



export default App;