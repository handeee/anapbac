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
function App() {
  const [kadinresmi, setKadin] = useState("");
  const [erkekresmi, setErkek] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [ayakkabidata, setData] = useState([]);

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
    if (gender === "erkek") {
      setGender("erkek");
    } else {
      setGender("kadin");
    }
  };

  const getResimler = async () => {
    await fetch("http://localhost:3000/Filmler")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Veri alınamadı", error);
      });
  };

  const filtermale = ayakkabidata.length > 0 ? ayakkabidata.filter((ayakkabi) => ayakkabi.Gender === 2) : [];
  const filterfemale = ayakkabidata.length > 0 ? ayakkabidata.filter((ayakkabi) => ayakkabi.Gender === 1) : [];
  const [imageyolla, setimageyolla] = useState("");
  const cinsiyetsecilial = (al) => {
    setimageyolla(al);
  };
  const [giveSearch, setGiveSearch] = useState([]);
  const getsearch = (getdata) => {
    setGiveSearch(getdata);
  };
  const [indirim,setindirim]=useState([]);
const indirimliurun=(ind)=>{
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
        {(location.pathname !== '/' ) && (
          <div className="right-section">
            <Search tumcinsler={ayakkabidata} onFilteredDataChange={getsearch} />
            <Register />
            <ShoppingCart />
          </div>
        )}
      </div>

      {/* CategoryIcon bileşeni sadece /uye ve /sepet yollarında görünmez */}
      {(location.pathname !== '/uye' && location.pathname !== '/sepet' && location.pathname !== '/') && (
        <CategoryIcon className="category-icon" selectedCategory={secilikategori} />
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
              <Carousel  indirimal={indirimliurun}/> {/* Carousel bileşeni */}
            </div>
            <Images gender={gender} selectedgender={imageyolla === 'female' ? filterfemale : filtermale} />
          </div>
        } />
        <Route path="/categories" element={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div className="header-container">
              <div className="left-section">
                <GenderSelection gender={gender} m={filtermale} f={filterfemale} onGenderSelect={cinsiyetsecilial} />
              </div>
              <Categories secilid={secili} gender={gender} m={filtermale} f={filterfemale} />
            </div>
          </div>
        } />
        <Route path="/uye" element={<RegisterPage />} />
        <Route path="/sepet" element={<ShoppingCardDetail />} />
        <Route path="/aramasonucu" element={<ImagesSearch giveSearch={giveSearch} />} />
        <Route path="/carouseldetay" elemnet={<CarouselDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
