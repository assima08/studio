import logo from '../../public/zooneviilogo.png';
const navLinks = [
    { label: "accueil", href: "/" },
    { label: "services", href: "/services" },
    { label: "artistes", href: "/artistes" },
    { label: "reservation", href: "/reservation" },
    { label: "À propos", href: "/about" },
    { label: "contact", href: "/contact" },
];
function Navbar() {
    return (
    <nav className="navbar">
        <div className = "menu-item">
            <img className="logo" src={logo} alt="logo" width={60} height={60} />
        </div>
        {navLinks.map((link:{label:string;href:string}) => (
            <div className="menu-item" key={link.href}>
                <a className="nav-link" href={link.href}>{link.label}</a>
            </div>
        ))}
    </nav>
    )
}

export default Navbar