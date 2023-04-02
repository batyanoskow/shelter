import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const PopUp = ({ trg , children}) => (
  <Popup trigger={trg} position="center center" modal>
    { children }
  </Popup>
  );

export { PopUp };
  
  