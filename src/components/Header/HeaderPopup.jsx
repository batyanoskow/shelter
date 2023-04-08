import Popup from 'reactjs-popup';
import { Logo } from '../Logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const HeaderPopUp = ({ trg , children }) => (
  <Popup  trigger={trg} position="center center" modal className='header' closeOnEscape={true} closeOnDocumentClick={false}>
   {close => (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__menu">
                    <Logo/>
                    <button className="close popup__button" onClick={close}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </div>
                <div className="popup__custom custom-popup1">
                    {children}
                </div>
            </div>
        </div>
       
    )}
        
  </Popup>
  );

export { HeaderPopUp };
  