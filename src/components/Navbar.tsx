import {

    Link

}
    from "react-router-dom";

import logo
    from "../../public/zooneviilogo.png";



const navLinks = [

    {

        label:"Accueil",

        href:"/"

    },

    {

        label:"Services",

        href:"/services"

    },

    {

        label:"Experts",

        href:"/experts"

    },

    {

        label:"Tarifs",

        href:"/tarifs"

    },

    {

        label:"Clients",

        href:"/clients"

    },

    {

        label:"Reservations",

        href:"/reservations"

    }

];



function Navbar(){

    return(

        <nav className="navbar">

            <div className="menu-item">

                <img

                    className="logo"

                    src={logo}

                    alt="logo"

                    width={60}

                    height={60}

                />

            </div>



            {

                navLinks.map((link) => (

                    <div

                        className="menu-item"

                        key={link.href}

                    >

                        <Link

                            className="nav-link"

                            to={link.href}

                        >

                            {link.label}

                        </Link>

                    </div>

                ))

            }

        </nav>

    );

}



export default Navbar;