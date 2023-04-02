import { useState } from "react";
import { Logo } from "../Logo";
import { HeaderPopUp } from "./HeaderPopup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Navigation , Pagination , EffectFade} from "swiper";
import dog1 from "../../img/dog1.png"
import dog2 from "../../img/dog2.png"
import qr from "../../img/qr.jpg"
import { LazyImage } from "../LazyImage";
const Header = () => {
    const images = [dog1 , dog2]
    const links = [
        "Хто ми",
        "Наша діяльність",
        "Команда",
        "Контакти",
        "Галерея"
    ];
    const params = {
        modules: [Navigation,EffectFade,Pagination],
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
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			on: {

			}
    }
    const [isOpen , setIsOpen] = useState(false);
    const [hideOrShow , setHideOrShow] = useState("");
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        if(isOpen){
            setHideOrShow(() => {
                return ""
            })
        }
        else{
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
                                        <li className="menu__item" key={index}><a href="#" className="menu__link" onClick={toggleMenu}>{link}</a></li>  
                                    );
                                })}
                            </ul>   
                        </nav>
                        <div className="header__button btn-heart"><span>Підтримати</span><FontAwesomeIcon icon={faHeart} beat /></div>
                        {/* <HeaderPopUp trg={<div className="header__button btn-heart"><span>Підтримати</span><FontAwesomeIcon icon={faHeart} beat /></div>}>
                            <div className="custom-popup1__inform">
                                <h1 className="custom-popup1__title">Мій собака – моє серцебиття біля моїх ніг!</h1>
                                <p className="custom-popup1__sub-title">Задонативши нам, ви долучитесь до будівництва притулку для собак. Також ваша фінансова допомога буде спрямована на підготовку вакцин та необхідних документів для виїзду собачок закордон.</p>
                                <div className="custom-popup1__qr">
                                    <LazyImage image={qr}/>
                                </div>
                            </div>
                            <div className="custom-popup1__buttons">
                                <button className="custom-popup1__button"></button>
                                <button className="custom-popup1__button"></button>
                                <button className="custom-popup1__button"></button>
                            </div>
                        </HeaderPopUp> */}
                        <button type="button" className={`menu__icon icon-menu ${hideOrShow}`} onClick={toggleMenu}><span></span></button>
                    </div>
                    <div className="header__slider">
                        <button type="button" className="swiper-button-prev"><i className="icon-arrow-left"></i></button>
                        <Swiper className="swiper1" 
                        wrapperClass="header__wrapper"
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