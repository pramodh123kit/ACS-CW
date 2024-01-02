import { useState } from "react";
import DetailPage from "../DetailPage/DetailPage";
import "./Card.css";

const Card = ({ property, handleDragStart, addToFavourites }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleAddToFavourites = () => {
    addToFavourites(property);
  };

  const { type, bedrooms, price, location, picture, status } = property;

  return (
    <div
      className="card"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, property)}
    >
      <img src={picture} alt={type} className="card-image" />
      <div className="card-content">
        <p className="card-title">Type {type}</p>
        <p className="card-text">Bedrooms: {bedrooms}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Status: To {status}</p>
        <p className="card-text">Location: {location}</p>
        <button className="card-link" onClick={handleViewDetails}>
          View Details
        </button>
        <button className="add-fav" onClick={handleAddToFavourites}>
          Add to Favourites
        </button>
        {showDetails && (
          <DetailPage property={property} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
};

export default Card;
