import { LazyImage } from "./LazyImage";
import { PopUp } from "./PopUp";
import shelter from "../img/shelter.webp"
const Who = () => {
    return (
        <div className="page__shelter shelter" id="shelter">
        <div className="shelter__container">
        <div className="shelter__inform">
            <h1 className="shelter__title">
                <span>Green house</span>
                <br/>
                dogs shelter
            </h1>
            <div className="shelter__img"><LazyImage image={shelter}/></div>
            {/* <PopUp trg={<div className="shelter__img"><LazyImage image={shelter}/></div>} text={""}>
                <img src={shelter} alt=""/>
            </PopUp> */}
            
            <p className="shelter__sub-title">–  громадська організація, що опікується безпритульними собаками, яких евакуювали з зони бойових дій.
            Наша мета – надати належні умови для евакуйованих притулків та приватних собак, які шукають тимчасовий прихисток.
            Допомогти з підготовкою вакцин та документів для подальшого виїзду за кордон у приймаючі сім’ї чи притулки інших організацій.
            </p>
        </div>
    </div>
    </div>
    )
}

export { Who }