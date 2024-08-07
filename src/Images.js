
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Images = ({ gender, selectedgender }) => {
  //  const [k, setk] = useState(selectedgender); // Initialize k based on gender
  //const [k, setk] = useState(selectedgender); // Initialize k based on gender
  const navigate = useNavigate();
  const [shoeList, setShoeList] = useState([]);
  useEffect(() => {
    

//getResimler();
 
  // ayakkabı teke düştü
  const filteredShoes =selectedgender;
  let tempList = [];
  filteredShoes.forEach((shoe) => {
    let flag = true;
    for (let i = 0; i < tempList.length; i++) {
      if (shoe.title === tempList[i].title) {
        flag = false;
      }
    }
    if (flag) {
      tempList.push(shoe);
    }
  });
  setShoeList(tempList);
     
  }, [gender,selectedgender]);

  


//   const getResimler = async () => {
//     await fetch("http://10.0.0.201:8000/filter/",{
//       method:'GET',
//       headers:{'Content-Type':'application/json'},
//     })
//      .then((response) => response.json())
//      .then((data) => {
//        console.log(data);
//        setk(data);
      
//        console.log(k)
//        console.log(gender)
  
//      })
//      .catch((error) => {
//        console.error("Veri alınamadı", error);
//      });
//  };
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px", // Aradaki boşluğu artırın
      marginTop: "60px",
    
    },
    img: {
      width: "100%", // Görüntü genişliği
      height: "300px", // Sabit bir yükseklik verin

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
    cardHover: {
      transform: "scale(1.05)", // Hover efekti
    },
    pet: {
      marginTop: "25px",
    },
  };
  
  const detayagit = (image) => {
    navigate('/detail', { state: { image } });
  };

  return (
    <div>
      {/* <h1>Selected CI: {ci}</h1> yazıyor k degeri yok */}
    
      <div style={styles.imgContainer}>
        {shoeList.map((src) => (
          <div className="card" style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
          >
            <div className="card-image" >
              <figure className="image is-4by3">
                <img 
                  key={src.id}
                  src={src.image}
                  alt={`image-${src.id}`}
                  style={styles.img}
                  onClick={() => detayagit(src)} 
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4" style={styles.pet}>{src.title}</p>
                </div>
              </div>

              <div className="content">
               <p>{src.description}</p>
              </div>
              <div className="content">
               <p>{src.price+"TL"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
