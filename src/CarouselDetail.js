
import { useLocation } from 'react-router-dom';
const CarouselDetail = () => {
    
    const location = useLocation();
    const { images } = location.state || {}; // Get the images array from location state

 
    return (
        <div>
           {images && images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.alt} />
                    <h2>{image.title}</h2>
                    <p>{image.price}</p>
                    <p>{image.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CarouselDetail;
