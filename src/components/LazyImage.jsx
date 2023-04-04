import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ image }) => (
    <div>
      <LazyLoadImage alt='#' src={image} threshold={300} effect='blur'/>
    </div>
  );

export { LazyImage };
  