import React from 'react';
import { useState, useEffect } from 'react';
import silme from './resimler/silbuton.png';


const ShoppingCardDetail = ({ cartItems = [],setCartItems,Fiyat}) => {
  // Her ürün için bir adet sayısı nesnesi oluşturuyoruz
  const [adetler, setAdetler] = useState(() =>
    cartItems.reduce((acc, item, index) => ({ ...acc, [index]: 1 }), {})
  );

  // Azaltma fonksiyonu
  const azalt = (index) => {
    setAdetler(prevAdetler => ({
      ...prevAdetler,
      [index]: Math.max(1, prevAdetler[index] - 1)
    }));
  };

  // Arttırma fonksiyonu
  const arttir = (index) => {
    setAdetler(prevAdetler => ({
      ...prevAdetler,
      [index]: (prevAdetler[index] || 1) + 1
    }));
  };

  // const getResimler = async () => {
  //   await fetch("http://10.0.0.201:8000/cart/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Veri alınamadı", error);
  //     });
  // };

  const [fiyat, setFiyat] = useState("");

  useEffect(() => {
    console.log('dssfdfddgf: ',cartItems);
    let total = 0;
    cartItems.forEach(item => {
      total += parseInt(item.price) * adetler[cartItems.indexOf(item)];
    });
    setFiyat(total);
   // getResimler();
   Fiyat(total);
  }, [cartItems, adetler]);

  // useEffect(() => {
   
  // }, []);

  const ondelete=(id)=>{
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    
  return (
    <div>
     
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          
          <div key={index} className="topluseper">
           
            <div className="sepresim">
              <img src={item.src} alt={item.alt} />
            </div>
            <div className="sepdetay">
              <p>{item.title} </p>
              <p>{item.price}</p>
              <p>Size: {item.size}</p>
              <div className="ana">
                <button className="azaltart" onClick={() => azalt(index)}>-</button>
                <button>{adetler[index] || 1}</button>
                <button className="azaltart" onClick={() => arttir(index)}>+</button>
              </div>
             
            </div>
            <div className='silme'>
             <img src={silme}  onClick={()=>ondelete(item.id)} alt=""/>
            </div>
          </div>
        ))
      )}
      {/* <div className="total">
        <h3>{fiyat} TL</h3>
      </div> */}
    </div>
  );
}

export default ShoppingCardDetail;
