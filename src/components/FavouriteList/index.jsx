import React, { useRef } from "react";
import "./styles.css";

const FavouriteList = ({
  favourites,
  handleDrop,
  handleDragOver,
  handleClearAll,
  handleRemoveFavorite,
}) => {
  const containerRef = useRef(null);

  const handlePropertyClick = (propertyId) => {
    handleRemoveFavorite(propertyId);
  };

  const handleDragStart = (e, property) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(property.id));
  };

  const handleDragLeaveWrapper = (e) => {
    e.preventDefault();

    const draggedPropertyId = e.dataTransfer.getData("text/plain");

    handleRemoveFavorite(draggedPropertyId);
  };

  const handleDropContainer = (e) => {
    containerRef.current.classList.remove("drag-over");

    const draggedPropertyId = e.dataTransfer.getData("text/plain");

    handleRemoveFavorite(draggedPropertyId);
  };

  const handleDragEnd = (e, property) => {
    e.preventDefault();

    handleRemoveFavorite(property.id);
  };

  return (
    <div
      className="favourite-list-wrapper"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeaveWrapper(e)}
    >
      <div className="clear-all-button-container">
        <h2 className="fav-heading">Favourite Houses</h2>
        <button onClick={handleClearAll} className="clear-all-button">
          Clear All
        </button>
      </div>
      <div className="favourite-list-container">
        {favourites.map((property) => (
          <div
            key={property.id}
            className="favourite-item-card"
            draggable
            onDragStart={(e) => handleDragStart(e, property)}
            onDragEnd={(e) => handleDragEnd(e, property)}
          >
            <img
              src={"../src/assets/images/C.PNG"}
              alt={property.type}
              className="fav-card-image"
            />
            <div className="card-content">
              <p className="fav-card-type">Type {property.type}</p>
              <p className="fav-card-text">Bedrooms: {property.bedrooms}</p>
              <p className="fav-card-text">Price: {property.price}</p>
              <p className="fav-card-text">
                availability: To {property.availability}
              </p>
              <p className="fav-card-text">Location: {property.location}</p>
              <a href={"/"} className="fav-card-link">
                View Details
              </a>
              <button
                className="remove-fav"
                onClick={() => handlePropertyClick(property.id)}
              >
                Remove from Favourites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteList;
