import React from "react";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const ImagesDetail = ({veriat,sepeteEkle}) => {
  const location = useLocation();
  const { image } = location.state || {};
  const [selectedSize, setSelectedSize] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2px",
      marginTop: "1px",
      width:"600px"/* sağa götürüyo*/
    },
    img: {
      width:"700px", // Ensure the image fills the container
      height: "600px",
      objectFit: "cover", // Ensure image covers the area properly
      
     
    },
    
    pet: {
      marginTop: "25px",
    },
    
  };
  const numaradegal = (size) => {
    setSelectedSize(size); // Seçilen numarayı state'e kaydediyoruz
  };
  const handleSepeteEkle = () => {
    if (!selectedSize) {
      alert("Lütfen bir numara seçiniz.");
      return;
    }

    const item = {
      src: image.src,
      alt: image.alt,
      price: image.price,
      title: image.title,
      size: selectedSize,
      description: image.description,
    };

    sepeteEkle(item);
  };
  
  useEffect(() => {
    const sizes = veriat
      .filter((shoe) => shoe.title === image.title)
      .map((shoe) => shoe.size);
    setAvailableSizes(sizes);
  }, [veriat, image]);


  return (
    <div  className="detail-container">

      <div  style={styles.imgContainer} >
        <img
          key={image.id}
          src={image.image}
          alt={`image-${image.id}`}
          /*style={styles.img}*/
          className="detayresim"
        />
              </div>
        <div className="detail-content">
        <div className="content">
          <p className="imgtitle" /*style={styles.pet}*/>{image.title}</p>
          <br />
          {image.description}
        </div>
        <div className="fyt">
               <p>{image.price+"TL"}</p>
              </div>
        </div>
        {/* <div class="content">
        <p className="imgtitle" style={styles.pet}>{image.title}</p>
         {image.description}
        </div> */}
        <div className="size-container">
        {availableSizes.map((size, index) => (
            <button
              key={index}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => numaradegal(size)}
            >
              {size} 
            </button>
          ))}
        </div>
       
        <div className="price-container">
          <button
            className="button is-small"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={handleSepeteEkle}
          >
            Sepete Ekle
          </button>
        </div>

     
    </div>
  );
};

export default ImagesDetail;
