import React from 'react'

const ImagesSearch = ({ giveSearch }) => {
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2px",
      marginTop: "20px",
      width: '93%',
    },
    img: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    card: {
      flex: "1 1 calc(20% - 20px)",
      boxSizing: 'border-box',
      marginBottom: '20px',
      marginLeft: '68px',
    },
    pet: {
      marginTop: '25px',
    }
  };

  return (
    <div style={styles.imgContainer}>
      {giveSearch.map((item) => (
        <div key={item.id} className="card" style={styles.card}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img 
                src={item.src}
                alt={`image-${item.id}`}
                style={styles.img}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4" style={styles.pet}>{item.title}</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImagesSearch;
