import { useState } from "react";
import { DateTimePicker, Combobox } from "react-widgets";
import "react-widgets/styles.css";
import "./styles.css";

const SearchForm = ({ onSubmit }) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedroom, setMinBedroom] = useState("");
  const [maxBedroom, setMaxBedroom] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [postcode, setPostcode] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log("Search criteria:", {
      type,
      minPrice,
      maxPrice,
      minBedroom,
      maxBedroom,
      dateAdded,
      postcode,
    });
  };

  return (
    <div className="property-search-form">
      <button
        className="show-advanced-button"
        onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
      >
        {showAdvancedSearch ? "Hide Advanced Search" : "Show Advanced Search"}
      </button>
      {showAdvancedSearch && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type:</label>
            <Combobox
              data={["house", "flat", "any"]}
              value={type}
              onChange={setType}
            />
          </div>

          <div>
            <label>Price:</label>
            <br />
            <input
              className="form-input"
              type="number"
              value={minPrice}
              placeholder="Min Price"
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              className="form-input"
              type="number"
              value={maxPrice}
              placeholder="Max Price"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div>
            <label>No.of bedrooms</label>
            <br />
            <input
              className="form-input"
              type="number"
              placeholder="Min Bedrooms"
              value={minBedroom}
              onChange={(e) => setMinBedroom(e.target.value)}
            />
            <input
              className="form-input"
              type="number"
              placeholder="Max Bedrooms"
              value={maxBedroom}
              onChange={(e) => setMaxBedroom(e.target.value)}
            />
          </div>
          <div>
            <label>Date Added:</label>
            <DateTimePicker
              value={dateAdded}
              onChange={(value) => setDateAdded(value)}
            />
          </div>
          <div>
            <label>Postcode Area:</label>
            <Combobox
              data={["BR1", "NW1"]}
              value={postcode}
              onChange={setPostcode}
            />
          </div>
          <div>
            <label>Availability:</label>
            <Combobox
              data={["For Sale", "For Rent"]}
              value={availability}
              onChange={setAvailability}
            />
          </div>
          <div>
            <button className="submit-button" type="submit">
              Search
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SearchForm;
