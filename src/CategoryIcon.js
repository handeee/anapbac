import React from 'react'
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
const CategoryIcon = ({selectedCategory}) => {
    const category = [
        "spor ayakkabı",
        "topuklu ayakkabı",
        "sandalet",
        "terlik",
        "bot",
      ];
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
          {category.map((cat, index) => (
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
