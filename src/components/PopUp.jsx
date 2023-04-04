import Popup from 'reactjs-popup';
const PopUp = ({ trg , children}) => (
  <Popup trigger={trg} position="center center" modal >
    { children }
  </Popup>
  );

export { PopUp };
  
  