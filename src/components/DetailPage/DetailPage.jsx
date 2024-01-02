import "./DetailPage.css";

const DetailPage = ({ property, onClose }) => {
  const { type, bedrooms, price, location, picture, status, description } =
    property;

  return (
    <div className="property-container">
      {/* <div> */}
      {/* <span className="close" onClick={onClose}>
          &times;
        </span> */}
      <img src={picture} alt={type} className="card-image" />
      <div className="card-content">
        <p className="cardd-title">Type {type}</p>
        <p className="cardd-text">Bedrooms: {bedrooms}</p>
        <p className="cardd-text">Price: {price}</p>
        <p className="cardd-text">Status: To {status}</p>
        <p className="cardd-text">Location: {location}</p>
        <p className="cardd-text">{description}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DetailPage;
