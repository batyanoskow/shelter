import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyImage = ({ image }) => (
    <div>
      <LazyLoadImage alt='#' src={image} threshold={300} effect='blur'/>
    </div>
  );

export { LazyImage };
  