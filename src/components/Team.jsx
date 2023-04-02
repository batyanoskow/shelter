import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';	
import { LazyImage } from "./LazyImage";  
import team1 from "../img/team1.png"
import team2 from "../img/team2.png"
import team3 from "../img/team3.png"
import team4 from "../img/team4.png"
import team5 from "../img/team5.png"

const Team = () => {
	const paramsTeam = {
		modules: [ Autoplay ],
		slidesPerView : 2,
		freeMode: false,
		spaceBetween: 30,
		grabCursor: false,
		loop: true,
		allowTouchMove: false,
		autoplay: {
			enabled: true,
			delay: 1,
		},
		speed: 5000,
		breakpoints: {
			319.99: {
				slidesPerView: 1
			},
			768.99: {
				slidesPerView: 2
			},
			1150: {
				slidesPerView: 3
			}
	}}
	const imagesTeam = [
			team1,
			team2,
			team3,
			team4,
			team5,
			team5
	];

    return(
        <div className="page__team team" id="team">
			<div className="team__container">
				<div className="team__inform">
					<h1 className="team__title"><span>Наша</span><br/>Команда</h1>
					<p className="team__sub-title">Наша команда це група інтузіастів та людей які хочуть пренести трішки тепла в наш світ, в <span>Green Shelter</span> працюють тілки експерти та вони знають як і що правильно робити. а найголовніше всі вони з добрим піклуючим сердцем.</p>
				</div>
				<Swiper
				lazy={{
					loadPrevNext: true,
					loadPrevNextAmount: 2
				}}
				className="team__slider"
				wrapperClass="team__wrapper"
				lazyPreloaderClass="swiper-lazy-preloader"
				{...paramsTeam}
				>
				{imagesTeam.map((img , index) => {
					return(
						<SwiperSlide className="team__slide" key={index}>
							<LazyImage  image={img} key={img}/>
						</SwiperSlide>
					)
				})}
				</Swiper>
			</div>
		</div>
    )
}

export { Team }