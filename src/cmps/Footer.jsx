import logo from '../assets/img/logo.svg'

export function Footer() {
    return (
        <div className="footer-outer-box">
            <div className="footer-box">
                <div className="footer-left-box">
                    <img className="bottom-logo" src={logo} alt="" />
                </div>

                <div className="footer-middle-box">
                    <span>Marthwaite, Sedbergh</span>
                    <span>Cumbria</span>
                    <span>+00 44 123 4567</span>
                </div>
                <div className="footer-right-box">
                    <span>OPEN TIMES</span>
                    <span>MON - FRI: 09:00 AM - 10:00 PM</span>
                    <span>SAT - SUN: 09:00 AM - 11:30 PM</span>
                </div>

            </div>
        </div>
    )
}
