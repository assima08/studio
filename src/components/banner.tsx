import heroImage from "../../public/hero.png";

function Banner (){
    return(
        <section className="hero">

        <div className="hero-left">

        <h1 className="hero-title">
            Music Without
    <br />
    Limits
    </h1>

    <p className="hero-description">
        Say goodbye to interruptions and enjoy uninterrupted
    music streaming.
    </p>

    <button className="hero-btn">
        Sign Up
    </button>

    </div>

    <div className="hero-right">

    <img
        className="hero-image"
    src={heroImage}
    alt="music"
        />

        </div>

        </section>
)
}

export default Banner;