import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import SearchBar from "./components/SearchBar/index.jsx";
import FavouriteList from "./components/FavouriteList/index.jsx";
import SearchForm from "./components/SearchForm/index.jsx";
import Card from "./components/Card/Card.jsx";
import propertiesData from "./data/properties.json";
import DetailPage from "./components/DetailPage/DetailPage.jsx";

const App = () => {
  const [properties, setProperties] = useState(propertiesData.properties);
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  const handleSearch = (term, availability) => {
    setSearchTerm(term);
    setSelectedAvailability(term ? availability : "");
  };

  const handleDragStart = (e, property) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(property));
  };

  const handleRemoveFavorite = (propertyId) => {
    const updatedFavourites = favourites.filter(
      (property) => property.id !== propertyId
    );
    setFavourites(updatedFavourites);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedProperty = JSON.parse(data);

    const isAlreadyInFavourites = favourites.some(
      (favProperty) => favProperty.id === draggedProperty.id
    );

    if (isAlreadyInFavourites) {
      alert("This property is already in the favourites list!");
    } else {
      setFavourites([...favourites, draggedProperty]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const filteredProperties = properties.filter(
    (property) =>
      (property.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedAvailability
        ? property.availability.toLowerCase() ===
          selectedAvailability.toLowerCase()
        : true)
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    const savedFavourites = localStorage.getItem("favourites");
    if (savedFavourites) {
      setFavourites(JSON.parse(savedFavourites));
    }
  }, []);

  const addToFavourites = (property) => {
    const isAlreadyInFavourites = favourites.some(
      (favProperty) => favProperty.id === property.id
    );

    if (isAlreadyInFavourites) {
      alert("This property is already in the favourites list!");
    } else {
      setFavourites([...favourites, property]);
    }
  };

  const handleClearAll = () => {
    setFavourites([]);
  };

  return (
    <>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <SearchForm />
      <div className="app-container">
        <div className="app">
          {filteredProperties.map((property) => (
            <Card
              key={property.id}
              property={property}
              handleDragStart={handleDragStart}
              addToFavourites={addToFavourites}
              handleViewDetails={handleViewDetails}
            />
          ))}
          {selectedProperty && (
            <DetailPage
              property={selectedProperty}
              onClose={handleCloseDetails}
            />
          )}
        </div>
        <FavouriteList
          favourites={favourites}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleClearAll={handleClearAll}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      </div>
    </>
  );
};

export default App;
