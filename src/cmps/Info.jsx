import infoFamilyImg from '../assets/img/family-gathering-desktop.jpg'
import infoImg from '../assets/img/info-img.svg'
export function Info() {
    return (
        <div className="info-outer-box">
            <div className="info-box">
                <img className="info-back-img" src={infoImg} alt=""/>
                <img className="info-img" src={infoFamilyImg} alt=""/>
                <div className="info-details-box">
                    <h1>Family Gathering</h1>
                    <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                    <button>BOOK A TABLE</button>
                    <div className="info-details-acions-box">
                        <div className="info-line"></div>
                        <p>FAMILY GATHERING</p>
                        <p className="middle-action">SPECIAL EVENTS</p>
                        <p className="last-action">SOCIAL EVENTS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
