import React, { useState } from 'react';
import kaydol from './resimler/kayit.png';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

const Register= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span><img src={kaydol} alt="" /></span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="/" class="dropdown-item"> Overview </a>
      <a href="/" class="dropdown-item"> Modifiers </a>
      <a href="/" class="dropdown-item"> Grid </a>
      <a href="/" class="dropdown-item"> Form </a>
      <a href="/" class="dropdown-item"> Elements </a>
      <a href="/" class="dropdown-item"> Components </a>
      <a href="/" class="dropdown-item"> Layout </a>
      <hr class="dropdown-divider" />
      <a href="/" class="dropdown-item"> More </a>
    </div>
  </div>
</div> */}
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button className="is-transparent is-small" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleDropdown}>
            <span><img  src={kaydol} alt="" /></span>
          </button>
        </div>
        {isOpen && (
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
             
              <Link to="/uye">
              <button>Giriş yap</button>
              </Link>
             
              <p className="dropdown-item">Üye değil misin? <button style={{fontWeight:'bold',textDecoration: 'underline'}}>Üye ol</button></p>
            
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;

