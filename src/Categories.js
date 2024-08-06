import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const styles = {
  imgContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px", // Aradaki boşluğu artırın
    marginTop: "20px",
  },
  img: {
    width: "100%", // Görüntü genişliği
    height: "260px", // Sabit bir yükseklik verin
    objectFit: "cover", // Görüntüyü kapsar
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
    marginTop: "15px",
  },
};
const Categories = ({ secilid, gender, m }) => {
  // Seçili ürünler durumunu tutan state
  const [secilicins, setSecilicins] = useState([m]);
  const navigate = useNavigate();

  useEffect (() => {
    if (Array.isArray(m)) {
      setSecilicins(m);
        console.log(m);
        getcategory();
   
    } else {
      console.error('m is not an array:', m);
    }
   
   
  }, [gender, m]); // `gender` veya `m` değiştiğinde çalışır

  // Kategoriye göre filtreleme
  const filterveri =m.filter((item) => item.category === secilid);

  // Konsol çıktıları ile veri kontrolü
  console.log('secilid:', secilid);
  console.log('m:', m);
  // console.log('secilicins:', secilicins);
  console.log('filterveri:', filterveri);
  console.log(gender)

  const detayagit = (image) => {
    navigate('/detail', { state: { image } });
  };
  const getcategory = async () => {
    try {
      const response = await fetch('http://10.0.0.201:8000/shoescategory/?category=Terlik');
      const data = await response.json();
      
           console.log(data);
          
          // if (data.success) {
          //   console.log('Shoe added successfully:', data);
          // }
    }
       
     
    catch (error) {
      console.error('Veri alınamadı', error);
    }
 };
  return (
    <div>
      <h2>Seçilen Kategori: {secilid}</h2>

      <div style={styles.imgContainer}>
      <h3>{gender ? (gender === 'F' ? 'Kadın Ürünleri' : 'Erkek Ürünleri') : 'Tüm Ürünler'}:</h3>
        {filterveri.map((item,index) => (
          <div className="card" style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
          >
            <div className="card-image" >
              <figure className="image is-4by3">
              <li key={index}>
                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} onClick={()=>detayagit(item)}  />
                <p>{item.title}</p>
              </li>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4" style={styles.pet}>{item.title}</p>
                </div>
              </div>

              <div className="content">
               <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
