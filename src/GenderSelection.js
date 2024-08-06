import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const GenderSelection = ({ gender,onGenderSelect}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedGender(gender);
    ;
  }, [gender]);

  const handleButtonClick = (gender) => {
    setSelectedGender(gender); 
    onGenderSelect(gender)
  navigate('/genderpath')
  };

  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '10px',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '10px', // Adds space between the buttons
    },
    button: {
      borderRadius: '0', // Removes the rounded corners
      padding: '10px 20px', // Adds padding for better appearance
      fontWeight: 'normal',
      color: 'initial',
      cursor: 'pointer',
    },
    selectedButton: {
      fontWeight: 'bold',
      color: 'black',
    },
  };

  return (
    <div className="gendercontainer" style={styles.container}>
      <div style={styles.buttonsContainer}>
        <button
          className="buton-style"
          style={{
            ...styles.button,
            ...(selectedGender === 'F' ? styles.selectedButton : {}),
          }}
          onClick={() => handleButtonClick('F')}
        >
          KADIN
        </button>

        <button
          className="buton-style"
          style={{
            ...styles.button,
            ...(selectedGender === 'M' ? styles.selectedButton : {}),
          }}
          onClick={() => handleButtonClick('M')}
        >
          ERKEK
        </button>
      </div>
    </div>
  );
};

export default GenderSelection;
