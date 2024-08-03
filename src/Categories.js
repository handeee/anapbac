import React, { useState, useEffect } from 'react';

const Categories = ({ secilid, gender, m, }) => {
  // // Filtrelenmiş kadın ve erkek ürünleri
  // const filteredF = f.filter(item => item.categoryId === secilid);
  // const filteredM = m.filter(item => item.categoryId === secilid);

  // Seçili ürünler durumunu tutan state
  const [secilicins, setSecilicins] = useState([m]);

 
  useEffect(() => {
    
      setSecilicins(m);
   
  }, [gender,m]);
  useEffect(() => {
    console.log("Filtered products updated:", secilicins);
  }, [secilicins]);
  return (
    <div>
      <h2>Seçilen Kategori: {secilid}</h2>

      <div>
        <h3>{gender === 'kadin' ? 'Kadın Ürünleri' : 'Erkek Ürünleri'}:</h3>
        {secilicins.length > 0 ? (
          <ul>
            {secilicins.map((item, index) => (
              <li key={index}>
                <img src={item.src} alt={item.productName} style={{ width: '100px', height: '100px' }} />
                <p>{item.productName}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>{gender === 'kadin' ? 'Kadın ürünleri bulunamadı.' : 'Erkek ürünleri bulunamadı.'}</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
