
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Images = ({ gender, selectedgender }) => {
  const [k, setk] = useState(selectedgender); // Initialize k based on gender
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Gender:", gender);
  console.log("m:", selectedgender);
      setk(selectedgender);
   
 
  }, [gender,selectedgender]);

  useEffect(() => {
    console.log("Updated k:", k);
    console.log("Is k an array?:", Array.isArray(k));
  }, [k])
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2px", 
      marginTop: "20px", 
      
    },
    img: {
      width: "100%", // Make sure the image fills the container
      height: "300px",
      objectFit: "cover", // Ensure image covers the area properly
    },
   
    card: {
      flex: "1 1 calc(20% - 20px)", // Adjusts the card to fit 4 items per row with gap
      boxSizing: 'border-box', // Ensures padding and border are included in width
      marginBottom: '20px', // Space below each card
      marginLeft:'68px',
    },
    cardHover: {
      transform: "scale(1.05)", // Slightly zoom in on hover
    },
    pet:{
      marginTop:'25px',
    }
  };
  const detayagit = (image) => {
    navigate('/detail', { state: { image } });
  };

  return (
    <div>
      {/* <h1>Selected CI: {ci}</h1> yazıyor k degeri yok */}
    
      <div style={styles.imgContainer}>
        {k.map((src) => (
          <div class="card" style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
          >
            <div class="card-image" >
              <figure class="image is-4by3">
                <img 
                  key={src.id}
                  src={src.src}
                  alt={`image-${src.id}`}
                  style={styles.img}
                  onClick={() => detayagit(src.src)} 
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4" style={styles.pet}>{src.productName}</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
