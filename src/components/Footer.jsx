
const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__top top-footer">
                    <div className="top-footer__inform">
                        <a href="#" className="top-footer__title"><i className="icon-location"></i>м. Яворів Львівська область</a>
                        <a href="mailto:greenhousedogsshelter@gmail.com" className="top-footer__sub-title"><i className="icon-mail"></i>greenhousedogsshelter@gmail.com</a>
                        <a href="tel:3809777777777" className="top-footer__sub-title"><i className="icon-phone"></i>+3809777777777</a>
                    </div>
                    <div className="top-footer__location">
                        <h1 className="top-footer__loc">Наша локація</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2567.3101687998583!2d23.3752776!3d49.9492839!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU3JzAzLjUiTiAyM8KwMjInNDQuMyJF!5e0!3m2!1suk!2sua!4v1680021825801!5m2!1suk!2sua" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="footer__bottom bottom-footer">
                    <h1 className="bottom-footer__title">© Green Shelter 2023</h1>
                    <div className="bottom-footer__icons">
                        <a href="https://www.instagram.com/green_house_dogs_shelter" className="bottom-footer__icon"><i className="icon-instagram"></i></a>
                        <a href="#" className="bottom-footer__icon"><i className="icon-telegram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }