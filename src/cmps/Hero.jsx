import plate from '../assets/img/hero-bg-desktop.jpg'

export function Hero() {
    return (
        <div className="hero-outer-box">

        <div className="hero-box">
            <div className="hero-left-box">
                <h1 className="hero-heading">Exquisite dining since 1989</h1>
                <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <button>BOOK A TABLE</button>
            </div>
            <div className="hero-right-box">
                <img className="hero-img" src={plate} alt=""/>
            </div>
        </div>
        </div>
    )
}
