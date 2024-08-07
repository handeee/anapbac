import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const RegisterPage = (resim,users) => {
  const [kayitdeg, setKayitdeg] = useState(""); // Ad
  const [kayitdeg2, setKayitdeg2] = useState(""); // Şifre
  const [kayitdeg3, setKayitdeg3] = useState(""); // Soyad
  const [kayitdeg4, setKayitdeg4] = useState(""); // E-posta
  const [kayitdeg5, setKayitdeg5] = useState(""); // Username
  const [showPassword, setShowPassword] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const kayithandle = (event) => setKayitdeg(event.target.value);
  const kayithandle2 = (event) => setKayitdeg2(event.target.value);
  const kayithandle3 = (event) => setKayitdeg3(event.target.value);
  const kayithandle4 = (event) => setKayitdeg4(event.target.value);
  const kayithandle5 = (event) => setKayitdeg5(event.target.value);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const kayityap = async (event) => {
    event.preventDefault();
    
    try {
      const { data: users } = await axios.get("http://localhost:3000/Kullanicilar");

      // Kullanıcı adı daha önce var mı kontrol et
      const userExists = users.some(user => user.username === kayitdeg5);
  
      if (userExists) {
        alert("Bu kullanıcı adı zaten alınmış.");
        return;
      }
      
        const response = await axios.post("http://localhost:3000/Kullanicilar", {
          name: kayitdeg,
          password: kayitdeg2,
          username: kayitdeg5,
          Email: kayitdeg4,
          surname: kayitdeg3,
        });
        console.log(response.data);
      
    
      // Başarılı bir kayıt sonrası yapılacak işlemler
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
      // Hata durumunda yapılacak işlemler
    }
    navigate("/giris");
  };

  const girisyap = () => {
    navigate("/giris");
    setActiveButton("login");
  };

  const kayityap2 = () => {
    navigate("/uye");
    setActiveButton("register");
  };

  return (
    <div className="uye">
     <div className="container">
        <form>
          <div className="baslik">
            <div>
              <button
                className={activeButton === "login" ? "active-button" : ""}
                onClick={girisyap}
              >
                Giriş Yap
              </button>
              <hr className={activeButton === "login" ? "active-hr" : ""} />
            </div>
            <div>
              <button
                className={activeButton === "register" ? "active-button" : ""}
                onClick={kayityap2}
              >
                Üye Ol
              </button>
              <hr className={activeButton === "register" ? "active-hr" : ""} />
            </div>
          </div>
          <div className="dis">
            <div className="gir">
              <div className="yanyanainput">
                <input
                  id="giris"
                  value={kayitdeg}
                  onChange={kayithandle}
                  placeholder="Ad"
                  required
                />
                <input
                  value={kayitdeg3}
                  onChange={kayithandle3}
                  placeholder="Soyad"
                  required
                />
              </div>
            </div>
            <div className="gir">
              <div>
                <input
                  id="gir"
                  value={kayitdeg5}
                  onChange={kayithandle5}
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div className="gir">
              <div>
                <input
                  id="gir"
                  value={kayitdeg4}
                  onChange={kayithandle4}
                  type="email"
                  placeholder="E-posta"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Lütfen geçerli bir e-posta adresi girin. Örneğin: example@domain.com"
                />
                <small>Format: example@domain.com</small>
              </div>
            </div>
            <div className="gir">
              <div className="password-container">
                <input
                  id="gir"
                  value={kayitdeg2}
                  onChange={kayithandle2}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Şifre"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  {showPassword ? 'Gizle' : 'Göster'}
                </button>
              </div>
            </div>
          </div>
          <div className="kayitbut">
            <button onClick={kayityap}>Oluştur</button>
          </div>
        </form>
      </div>
      <div>
        <img src={resim} alt="" />
      </div>
    </div>
  )
}

export default RegisterPage
