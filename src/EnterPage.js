import React from 'react';
import { useNavigate } from 'react-router-dom';


const EnterPage = ({ onImageClick,erkek,kadin }) => {
  const navigate = useNavigate();

  const handleClick = (gender) => {
    onImageClick(gender);
    navigate('/genderpath');
  };
  
  return (
    <div className='container'>
      <div className='anaresim'>
        <div className='image-container'>
          <img src={kadin} alt="Kadın" onClick={() => handleClick('female')} />
          <p>KADIN</p>
        </div>
        <div className='image-container'>
          <img src={erkek} alt="Erkek" onClick={() => handleClick('male')} />
          <p>ERKEK</p>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;
