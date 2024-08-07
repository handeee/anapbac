import React from 'react'
import { useNavigate } from 'react-router-dom';

const ImagesSearch = ({ giveSearch }) => {
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2px",
      marginTop: "20px",
      width: '93%',
    },
  
    card: {
      width:"1300px",
      flex: "1 1 calc(25% - 20px)", // Kartın genişliği: %25 ve aradaki boşluk
      boxSizing: "border-box", // İç kenar boşluklarını ve sınırları kapsar
      marginBottom: "20px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px", // Kart köşelerini yuvarlayın
      maxWidth: "calc(25% - 20px)", // Maksimum genişlik
      backgroundColor: "#fff", // Arka plan rengi
      transition: "transform 0.3s ease", // Hover efekti için geçiş
    },
    img: {
      width: "100%", // Görüntü genişliği
      height: "300px", // Sabit bir yükseklik verin
     
    },
    cardHover: {
      transform: "scale(1.05)", // Hover efekti
    },
    pet: {
      marginTop: '25px',
    }
  };
  const navigate = useNavigate();
  const detayagit = (image) => {
    navigate('/detail', { state: { image } });
  };

  return (
    <div style={styles.imgContainer}>
      {giveSearch.map((item) => (
        <div key={item.id} className="card" style={styles.card}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img 
                src={item.src}
                alt={`image-${item.id}`}
                style={styles.img}
                onClick={() => detayagit(item)}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4" style={styles.pet}>{item.title}</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImagesSearch;
