import React, { useState,useEffect } from 'react'
import { NavLink } from "react-router-dom";
const styles = {
    toplu: {
      marginLeft: "70px",
    },
    selected: {
      fontWeight: "bold", // Seçili kategori için stil
      color: "blue", // Seçili kategori için renk
    },
  };

const CategoryIcon = ({selectedCategory,selectedgender}) => {
  // const fonk = () => {
  //   return selectedgender.map(item => item.category);

  // };
  const [categories, setCategories] = useState([]);

  const getResimler = async () => {
    try {
      const response = await fetch('http://10.0.0.201:8000/category/');
      const data = await response.json();
      console.log(data.value);
      const categoryValues = data.value.map((item) => item.value);
      setCategories(categoryValues);
    } catch (error) {
      console.error('Veri alınamadı', error);
    }
  };

  useEffect(() => {
    getResimler();
  }, []);

// const categories=fonk();
    // const category = [
    
    //     "spor",
    //     "topuklu ayakkabı",
    //     "sandalet",
    //     "terlik",
    //     "bot",
    //   ];
    const handleCategoryClick = (category) => {
        selectedCategory(category);
      };
  return (
    <div>
         <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={styles.toplu}
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          {categories.map((cat, index) => (
              <NavLink
              to="/categories"
                key={index}
                className={`navbar-item ${selectedCategory === cat ? 'is-selected' : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default CategoryIcon
