import React from 'react'
import { useLocation } from 'react-router-dom';

const ImagesDetail = () => {
    const location = useLocation();
    const { image } = location.state || {};
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
  return (
    <div>
       <div style={styles.imgContainer}>
       
          <div class="card" style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
          >
            <div class="card-image" >
              <figure class="image is-4by3">
                <img 
                  key={image.id}
                  src={image.src}
                  alt={`image-${image.id}`}
                  style={styles.img}
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4" style={styles.pet}>{image.productName}</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
       
      </div>
    </div>
    
  )
}

export default ImagesDetail
