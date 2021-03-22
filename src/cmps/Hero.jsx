import desktopPlate from '../assets/img/hero-bg-desktop.jpg'
import mobilePlate from '../assets/img/hero-bg-mobile.jpg'
import logo from '../assets/img/logo.svg'

export function Hero() {
    return (
        <div className="hero-outer-box">
            <div className="hero-box">
            <img className="top-logo" src={logo} alt=""/>
                <div className="hero-left-box">
                    <h1 className="hero-heading">Exquisite dining since 1989</h1>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    <button>BOOK A TABLE</button>
                </div>
                <div className="hero-right-box">
                    <img className="hero-img-desktop" src={desktopPlate} alt="" />
                    <img className="hero-img-mobile" src={mobilePlate} alt="" />
                </div>
            </div>
        </div>
    )
}
