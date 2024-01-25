import "./styles.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [setFilterType] = useState("");

  const handleFilter = (type) => {
    setFilterType(type);
    handleSearch(searchValue, type);
  };

  return (
    <>
      <div className="input-container">
        <FaSearch id="search-icon" />
        <input
          placeholder="Search Type or Location"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="sale-btn" onClick={() => handleFilter("sale")}>
          For Sale
        </button>
        <button className="rent-btn" onClick={() => handleFilter("rent")}>
          For Rent
        </button>
      </div>
    </>
  );
};

export default SearchBar;
