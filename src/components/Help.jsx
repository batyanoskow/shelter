import { LazyImage } from "./LazyImage";
import help1 from "../img/help1.png";
import help2 from "../img/help2.png";
import help3 from "../img/help3.png";
import help4 from "../img/help4.png";
import help5 from "../img/help5.png";
import help6 from "../img/help6.png";
import help7 from "../img/help7.png";



const Help = () => {
    const images = [
        { img : help1 , text : "Миски"},
        { img : help2 , text : "Нашийники"},
        { img : help3 , text : "Собача їжа"},
        { img : help4 , text : "Вітаміни"},
        { img : help5 , text : "Медикаменти"},
        { img : help6 , text : "Будки для собак"},
        { img : help7 , text : "Іграшки "},
    ]
    return (
        <>
            	<div className="page__help help" id="help">
						<div className="help__container">
							<h1 className="help__title">
								<span>Окрім</span> донату для будівництва, ми потребуємо
							</h1>
							<div className="help__grid grid-help">
                                {images.map((image , index) => {
                                    return (
                                        <div className="grid-help__card" key={index}>
                                            <div className="grid-help__img">
                                                <LazyImage image={image.img}/>
                                            </div>
									        <h1 className="grid-help__title">{image.text}</h1>
								        </div>
                                    )
                                })}
							</div>
						</div>
					</div>
        </>
    )
}

export { Help }