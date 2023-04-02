
const Logo = ({className = ""}) => {
    return (
        <a href="#" className="header__logo">
            <i className={`icon-logo ${className}`}></i>
            <span>Green Shelter</span>
        </a>
    )
}

export { Logo }

