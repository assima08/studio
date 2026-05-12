const navlinks = [
    { label: "facebook", href: "https://www.facebook.com/", img:"src/components/img/facebook.png" },
    { label: "instagram", href: "https://www.instagram.com/", img:"src/components/img/instagram.png"},
    { label: "x", href: "https://www.x.com/", img:"src/components/img/x.png"},
    { label: "TikTok", href: "https://www.tiktok.com/", img:"src/components/img/tiktok.png"},
];
function footer() {
    return (
        <footer className="foot">
            {navlinks.map((link:{label:string;href:string;img:string}) => (
                <div className="menu-item" key={link.href}>
                    <a className="nav-link" href={link.href}>
                        <img src={link.img} alt="logo" width={40} height={40} />
                    </a>
                </div>
            ))}
        </footer>
    )
}
export default footer;