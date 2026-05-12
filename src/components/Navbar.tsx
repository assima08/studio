import {

    Link

}
    from "react-router-dom";

import logo
    from "../../public/zooneviilogo.png";



const navLinks = [

    { label:"accueil", href:"/" },

    { label:"services", href:"/services" },

    { label:"artistes", href:"/artistes" },

    { label:"reservation", href:"/reservation" },

    { label:"À propos", href:"/about" },

    { label:"contact", href:"/contact" },

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

                navLinks.map(

                    (link) => (

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

                    )

                )

            }

        </nav>

    );

}



export default Navbar;