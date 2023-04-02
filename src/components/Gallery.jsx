import { LazyImage } from "./LazyImage"

const Gallery = () => {
    const imagesGallery = [
        require('../img/gallery1.png'),
        require('../img/gallery2.png'),
        require('../img/gallery3.png'),
        require('../img/gallery4.png'),
        require('../img/gallery5.png'),
        require('../img/gallery6.png'),
        require('../img/gallery7.png'),
    ]
    return(
        <div className="page__gallery gallery" id="gallery">
			<div className="gallery__container">
				<h1 className="gallery__title"><span>Г</span>алерея</h1>
				<div className="gallery__grid grid-gallery">
                    {imagesGallery.map((img , index) => {
                        return(
                            <div className="grid-gallery__item" key={index}>
						        <LazyImage image={img} />
					        </div>
                        )
                    })}
					
				</div>
			</div>
		</div>
    )
}

export { Gallery }