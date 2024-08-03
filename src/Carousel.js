import React, { useState } from "react";
import hc from "./resimler/hc.jpg";
import bilkur2 from "./resimler/bilkur2.jpg";
import geri from "./resimler/ger.jpg";
import { useNavigate } from 'react-router-dom';

const Carousel = ({indirimal}) => {
  const [res, setres] = useState([hc,bilkur2,geri]);
  const [resStore,setResStore]=useState([hc,bilkur2,geri]);
  const ilerigeri=["<",">"];
  const [counter,setCounter]=useState(0);
  const navigate = useNavigate();

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
      src: bilkur2,
      alt: 'Bilkur',
      price: '799,99 TL',
      title: 'John Smith',
      subtitle: '@johnsmith',
      description: 'Lorem '
    },
    {
      src: geri,
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
