import { LazyImage } from "./LazyImage"

const Gallery = () => {
    const imagesGallery = [
        require('../img/gallery1.webp'),
        require('../img/gallery2.webp'),
        require('../img/gallery3.webp'),
        require('../img/gallery4.webp'),
        require('../img/gallery5.webp'),
        require('../img/gallery6.webp'),
        require('../img/gallery7.webp'),
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