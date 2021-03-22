import topImg from '../assets/img/enjoy-desktop.jpg'
import bottomImg from '../assets/img/family-bottom-desktop.jpg'

export function Family() {
    return (
        <div className="family-outer-box">
            <div className="family-box">
                <div className="family-top-box">
                    <img className="family-top-img" src={topImg} alt="" />
                    <div className="family-top-details">
                        <h1>Enjoyable place for all the family</h1>
                        <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                    </div>
                </div>
                <div className="family-bottom-box">

                    <div className="family-bottom-details">
                        <h1>The most locally sourced food</h1>
                        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                    </div>
                    <img className="family-bottom-img" src={bottomImg} alt="" />
                </div>
            </div>

        </div>
    )
}
