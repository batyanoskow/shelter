import { useState } from "react";
import { Logo } from "../Logo";
import { HeaderPopUp } from "./HeaderPopup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle , faPaypal} from "@fortawesome/free-brands-svg-icons"
import { faHeart ,faCreditCard  } from "@fortawesome/free-solid-svg-icons";
import { Navigation , Pagination , EffectFade , Autoplay} from "swiper";
import dog1 from "../../img/dog1.webp"
import dog2 from "../../img/dog2.webp"
import qr from "../../img/qr.webp"  
import pay from "../../img/pay.png"
import { LazyImage } from "../LazyImage";
const Header = () => {
    const images = [dog1 , dog2]
    const links = [
        {title : "Хто ми" , dataId : "shelter"},
        {title : "Наша діяльність" , dataId : "help"},
        {title : "Команда" , dataId : "team"},
        {title : "Контакти", dataId:"footer"},
        {title : "Галерея" , dataId : "gallery"},
    ];
    const params = {
        modules: [Navigation,EffectFade,Pagination , Autoplay],
			slidesPerView: 1,
            loop : true,
			speed: 500,
      		effect: 'fade',
			  fadeEffect: {
				crossFade: true
			  },
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
            autoplay : {
                delay : 2000
            },
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			on: {

			}
    }
    const [isOpen , setIsOpen] = useState(false);
    const [hideOrShow , setHideOrShow] = useState("");
    const toggleMenu = (event) => {
        event.preventDefault();
            const id = event.target.dataset.scroll;
            const element = document.getElementById(id);  
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            };
            
        setIsOpen((prev) => !prev);
        if(isOpen){
            
            setHideOrShow(() => {
                return ""
            })
        }
        else if(isOpen === false && window.innerWidth < 991.98){
            setHideOrShow(() => {
                return "_active-menu"
            })
        }
    }
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__menu menu">
                        <Logo className={hideOrShow}/>
                        <nav className={`menu__body ${hideOrShow}`}>
                            <ul className="menu__list">
                                {links.map((link , index) => {
                                    return (
                                        <li className="menu__item" key={index}  ><a href="#" className="menu__link" onClick={toggleMenu} data-scroll={link.dataId}>{link.title}</a></li>  
                                    );
                                })}
                            </ul>   
                        </nav>

                        <HeaderPopUp   trg={<div className="header__button btn-heart"><span>Підтримати</span><FontAwesomeIcon icon={faHeart} beat /></div>}>
                            <div className="custom-popup1__inform">
                                <h1 className="custom-popup1__title">Мій собака – моє серцебиття біля моїх ніг!</h1>
                                <p className="custom-popup1__sub-title">Задонативши нам, ви долучитесь до будівництва притулку для собак біля українсько-польського кордон. Також ваша фінансова допомога буде спрямована на підготовку вакцин та необхідних документів для виїзду собачок закордон.
                                </p>
                                { window.innerWidth > 991 ?<div className="custom-popup1__qr">
                                    <LazyImage image={qr}/>
                                </div> : ""} 
                            </div>
                            <div className="custom-popup1__buttons">
                                <button className="custom-popup1__button"><FontAwesomeIcon icon={faGoogle} bounce /><span>GooglePay</span></button>
                                <button className="custom-popup1__button"><FontAwesomeIcon icon={faPaypal} bounce /><span>Paypal</span></button>
                                <HeaderPopUp   trg={<button className="custom-popup1__button"><FontAwesomeIcon icon={faCreditCard}  bounce/><span>Card</span></button>}>
                                    <div className="popup__card card-popup">
                                        <div className="card-popup__fields">
                                            <div className="card-popup__input">
                                                <label htmlFor="card-number" lang="3">Номер карти:</label>
                                                <input type="text" id="card-number" name="card-number" placeholder="0000 0000 0000 0000"/>
                                            </div>
                                            <div className="card-popup__input">
                                                <label htmlFor="expiry-date">ММ / РР:</label>
                                                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM / YY"/>
                                            </div>
                                            <div className="card-popup__input">
                                                <label htmlFor="cvv">CVV:</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="000"/>
                                            </div>
                                            <div className="card-popup__input">
                                                <label htmlFor="amount">До сплати:</label>
                                                <input type="text" id="amount" name="amount" placeholder="₴0.00"/>
                                            </div>
                                        </div>
                                        <div className="card-popup__img">
                                            <LazyImage image={pay}/>
                                            <button className="card-popup__button">Зробити внесок</button>
                                        </div>
                                    </div>
                                </HeaderPopUp>
                                
                            </div>
                        </HeaderPopUp>
                        <button type="button" className={`menu__icon icon-menu ${hideOrShow}`} onClick={toggleMenu}><span></span></button>
                    </div>
                    <div className="header__slider">
                        <button type="button" className="swiper-button-prev"><i className="icon-arrow-left"></i></button>
                        <Swiper className="swiper1" 
                        wrapperClass="header__wrapper"
                        allowTouchMove={false}
                        {...params}
                        >
                        
                        {images.map((img, index) => {
                            return(
                                <SwiperSlide className="header__slide" key={index}>
                                <div className="swiper-slide__inform">
                                    <h1 className="swiper-slide__title">Дай мені шанс пережити цю війну. Я тобі дам лапу.</h1>
                                    <p className="swiper-slide__sub-title">На даний момент багато собак потребують евакувації з зони бойових дій. цим якраз займаємося ми Green Shelter.</p>
                                    <div className="swiper-slide__button btn-heart"><span>Знайти друга</span><i className="icon-heart"></i></div>
                                </div>
                                <div className="swiper-slide__img">
                                    <LazyImage image={img} key={img}/>
                                </div>   
                                </SwiperSlide>
                            )
                        })} 
                        <div className="swiper-pagination"></div>
                        </Swiper>      
                        <button type="button" className="swiper-button-next"><i className="icon-arrow-right"></i></button>   
                    </div>
                </div>
            </header>
      
        </>
  
      );
   

}

export { Header }