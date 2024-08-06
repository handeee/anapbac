import hc from './resimler/hc.jpg';
import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Enterpage from './EnterPage';
import { useState, useEffect } from 'react';
import GenderSelection from './GenderSelection';
import kadin from './resimler/kadin.png';
import erkek from './resimler/erkek.png';
import Search from './Search';
import CategoryIcon from './CategoryIcon';
import ShoppingCart from './ShoppingCart';
import Register from './Register';
import Carousel from './Carousel';
import Categories from './Categories';
import RegisterPage from './RegisterPage';
import ShoppingCardDetail from './ShoppingCardDetail';
import Images from './Images';
import ImagesSearch from './ImagesSearch';
import CarouselDetail from './CarouselDetail';
import ImagesDetail from './ImagesDetail';


function App() {
  const [kadinresmi, setKadin] = useState("");
  const [erkekresmi, setErkek] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [ayakkabidata, setData] = useState([]);


  // enterpage de seçilen cinsiyet
  const cinsiyetbelirle = (gender) => {
    setGender(gender);
    navigate('/genderpath');
  };

  useEffect(() => {
    setErkek(erkek);
    setKadin(kadin);
    getResimler();
  }, []);


  const [secili, setSecili] = useState("");
  const secilikategori = (deger) => {
    setSecili(deger);
    if (gender === "M") {
      setGender("M");
    } else {
      setGender("F");
    }
  };

  const getResimler = async () => {
     await fetch("http://10.0.0.201:8000/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.shoes);
     
        console.log(ayakkabidata)
   
      })
      .catch((error) => {
        console.error("Veri alınamadı", error);
      });
  };
  const [cartItems, setCartItems] = useState([]);
  const sepeteEkle = (item) => {
    console.log('Adding item to cart:', item); // Debugging
    setCartItems((prevItems) => [...prevItems, item]);
    navigate('/sepet');
  };
  const filtermale = ayakkabidata.length > 0 ? ayakkabidata.filter((ayakkabi) => ayakkabi.gender === 'M') : [];
  const filterfemale = ayakkabidata.length > 0 ? ayakkabidata.filter((ayakkabi) => ayakkabi.gender === 'F') : [];

  //genderpath de seçilen cins
  const [imageyolla, setimageyolla] = useState("");
  const cinsiyetsecilial = (al) => {
    setimageyolla(al);
    setGender(al);
  };

  const [giveSearch, setGiveSearch] = useState([]);
  const getsearch = (getdata) => {
    setGiveSearch(getdata);
  };
  const [indirim, setindirim] = useState([]);
  const indirimliurun = (ind) => {
    setindirim(ind);
  }

  return (
    <div className="App">
      <>
        {/* Header bileşenleri */}
        <div className="marka" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={hc} alt="Logo" />
        </div>
        <hr />

        <div className="header-container">
          {/* Sol kısımda GenderSelection bileşeni göster */}
          {(location.pathname === '/genderpath' || location.pathname === '/categories') && (
            <div className="left-section">
              <GenderSelection gender={gender} m={filtermale} f={filterfemale} onGenderSelect={cinsiyetsecilial} />
            </div>
          )}

          {/* Sağ kısımda arama, kayıt ve alışveriş sepeti bileşenleri (koşul eklendi) */}
          {(location.pathname !== '/') && (
            <div className="right-section">
              <Search tumcinsler={ayakkabidata} onFilteredDataChange={getsearch} />
              <Register />
              <ShoppingCart />
            </div>
          )}
        </div>

        {/* CategoryIcon bileşeni sadece /uye ve /sepet yollarında görünmez */}
        {(location.pathname !== '/uye' && location.pathname !== '/sepet' && location.pathname !== '/') && (
          <CategoryIcon className="category-icon" selectedCategory={secilikategori}  gender={gender} />
        )}
      </>
      <Routes>
        <Route path="/" element={
          <Enterpage onImageClick={cinsiyetbelirle} kadin={kadinresmi} erkek={erkekresmi} />
        } />
        <Route path="/genderpath" element={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <div style={{ marginRight: '600px', marginBottom: '30px' }}>
                <hr className="hr-line" /> {/* Hr çizgisi */}
              </div>
            </div>
            <div className="carousel-container">
              <Carousel indirimal={indirimliurun} /> {/* Carousel bileşeni */}
            </div>
            <Images gender={gender} selectedgender={imageyolla === 'F' ? filterfemale : filtermale} />
          </div>
        } />
        <Route path="/categories" element={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Categories secilid={secili} gender={gender}  m={gender === 'F' ? filterfemale : filtermale}   />
          </div>
        } />
        <Route path="/uye" element={<RegisterPage />} />
        <Route path="/sepet" element={<ShoppingCardDetail cartItems={cartItems}/>} />
        <Route path="/aramasonucu" element={<ImagesSearch giveSearch={giveSearch} />} />
        <Route path="/carouseldetay" element={<CarouselDetail resim={indirim} />} />
        <Route path="/detail" element={<ImagesDetail veriat={ayakkabidata} sepeteEkle={sepeteEkle}/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
