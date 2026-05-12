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

            </Routes>



            <Footer />

        </div>

    );

}



export default App;