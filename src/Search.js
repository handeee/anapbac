import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';

const Search = ({ tumcinsler, onFilteredDataChange }) => {
  const [alldata, setAllData] = useState(tumcinsler);
  const [searchitem, setSearchitem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const results = tumcinsler.filter(item =>
      item.title.toLowerCase().includes(searchitem.toLowerCase())
    );
    
    // Tekilleştirme işlemi
    const uniqueResults = results.reduce((acc, current) => {
      const x = acc.find(item => item.title === current.title);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    
    setAllData(uniqueResults);
    onFilteredDataChange(uniqueResults);
  }, [searchitem, tumcinsler, onFilteredDataChange]);

  const arananveri = (event) => {
    setSearchitem(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const results = tumcinsler.filter(item =>
        item.title.toLowerCase().includes(searchitem.toLowerCase())
      );
      
      // Tekilleştirme işlemi
      const uniqueResults = results.reduce((acc, current) => {
        const x = acc.find(item => item.title === current.title);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      
      setAllData(uniqueResults);
      onFilteredDataChange(uniqueResults);
      navigate('/aramasonucu');
    }
  };

  return (
    <div>
      <div>
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu is-active">
              <div className="navbar-start">
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="panel-block">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Arama yapınız"
                        value={searchitem}
                        onChange={arananveri}
                        onKeyDown={handleKeyDown}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
}

export default Search;
