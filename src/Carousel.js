import React, { useEffect, useState } from "react";
import karoerkek from "./resimler/karoerkek.jpg";
import kar2erk from "./resimler/kar2erk.png";
import karokadin from "./resimler/karokadin.jpg";

import { useNavigate } from 'react-router-dom';

const Carousel = ({indirimal}) => {
  const [res, setres] = useState([karoerkek,kar2erk,karokadin]);
  const [resStore,setResStore]=useState([karoerkek,kar2erk,karokadin]);
  const ilerigeri=["<",">"];
  const [counter,setCounter]=useState(0);
  const navigate = useNavigate();
//   const getResimler = async () => {
//     await fetch("http://10.0.0.201:8000/bestseller/")
//      .then((response) => response.json())
//      .then((data) => {
//        console.log(data.shoes);
     
  
//      })
//      .catch((error) => {
//        console.error("Veri alınamadı", error);
//      });
//  };
//  useEffect(()=>{
//   getResimler();
//  })
  const styles = {
    res: {
      borderRadius: "0", // Removes the rounded corner
      marginTop: "70px",
      marginLeft: "110px",
      width: "1100px",
      height: "450px",
    },
  };
  const images = [
    {
      src: kar2erk,
      alt: 'Bilkur',
      price: '799,99 TL',
      title: 'John Smith',
      subtitle: '@johnsmith',
      description: 'Lorem '
    },
    {
      src:karokadin,
      alt: 'Erkek',
      price: '799,99 TL',
      title: 'John Smith',
      subtitle: '@johnsmith',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
    }
  ];
 const arttir=()=>counter<2 ? setCounter(pre => pre + 1):setCounter(0);

 const azalt=()=>counter>0 ? setCounter(pre => pre - 1):setCounter(2);

const carouseltikla=()=>{
  console.log('Navigating with images:', images); // Log images to verify data
 indirimal(images);
 navigate('/carouseldetay', { state: { images } }); // Pass images via state
}
  return (
    <div className="kapsa">
      <div className="tik1">
        <button onClick={azalt} style={{ cursor: "pointer" }}>
          {ilerigeri[0]}
        </button>
      </div>
      <div>
{      
         <img src={resStore[counter]}  alt="" style={{ cursor: "pointer", ...styles.res }}  onClick={() => carouseltikla()}  /> }
      </div>
      <div className="tik1">
        <button  onClick={arttir}style={{ cursor: "pointer" }}>
        {ilerigeri[1]}
        </button>
      </div>
    </div>
  );
};
export default Carousel;
