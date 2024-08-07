
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({degeral,degeral2,resim,kuladigonder}) => {
    const [deger, setdeger] = useState(""); // Define the state variable
  const [deger2, setdeger2] = useState(""); // Define the state variable
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handle = (event) => {
    const value = event.target.value;
    setdeger(value);
    degeral(value);
  };
  const handle2 = (event) => {
    const value = event.target.value;
    setdeger2(value);
    degeral2(value);
  };
  const tikla = async (event) => {
    event.preventDefault(); // Prevent form submission
    let user;
     try {
      const response = await fetch("http://localhost:3000/Kullanicilar");
      const data = await response.json();
       console.log(data)
      user = data.find(
        (element) => deger === element.username && deger2 === element.password
      
      );
      const username = user ? user.username : 'User not found';

console.log(`Found username: ${username}`);
kuladigonder(username);


      // console.log(data.username);
      // console.log(user)
      if (user) {
        console.log("Giriş başarılı");
        navigate("/genderpath");
        
      } else {
        console.log("Giriş başarısız");
        // console.log(user); // This will still log undefined if no user is found
        alert("yanlış kullanıcı adı ya da hatalı şifre girdiniz")
      }
    } catch (error) {
      console.error("Veri alınamadı", error);
    }
  };
    // user = users.find(
    //     (element) => deger === element.username && deger2 === element.pasword)
    //     if (user) {
    //           console.log("Giriş başarılı");

    //           navigate("/genderpath");
    //         } else {
    //           console.log("Giriş başarısız");
    //         }
    // };
    const kayityap = () => {
        navigate("/uye");
       }; 
       const girisyap = () => {
         navigate("/giris");
        };
  return (
    <div className="uye"> 
            <form>
        <div className="baslik">
          <div>
            <button onClick={girisyap}>Giriş Yap</button>
            <hr />
          </div>
          <div>
           
            <button onClick={kayityap}>Üye Ol</button>
            <hr />
          </div>
        </div>
        <div className="dis">
          <div className="gir">
            {/* <div>Adı:</div> */}
            <div>
              <input id="giris" onChange={handle} placeholder="Ad" />
            </div>
          </div>
          <div className="gir">
            {/* <div>Soyadı:</div> */}
            <div className="password-container" >
              <input id="gir" onChange={handle2} placeholder="Şifre"  type={showPassword ? 'text' : 'password'}
                 required />
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
          <div className="kayitbut"> <button onClick={tikla}>Giriş</button></div>
      </form>

      <div>
        <img src={resim} alt="" />
      </div>
    </div>
  )
}

export default Login
