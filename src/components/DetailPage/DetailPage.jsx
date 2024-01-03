import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./DetailPage.css";

const DetailPage = ({ property, onClose }) => {
  const {
    type,
    bedrooms,
    price,
    tenure,
    location,
    picture,
    availability,
    description,
    floorPlanImage,
    googleMapsEmbedLink,
    additionalImages,
    added,
  } = property;

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="detailPage-container">
        <div>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <Carousel showThumbs={false}>
            <div>
              <img src={picture} alt={type} className="card-image" />
            </div>
            {additionalImages &&
              additionalImages.length > 0 &&
              additionalImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Image ${index}`}
                    className="card-image"
                  />
                </div>
              ))}
          </Carousel>
          <div className="detail-card-content">
            <p className="detail-card-title">Type {type}</p>
            <p className="detail-text">
              <span className="attri-name">Availability:</span> To{" "}
              {availability}
            </p>
            <p className="detail-text">
              <span className="attri-name">Bedrooms:</span> {bedrooms}
            </p>
            <p className="detail-text">
              <span className="attri-name">Price:</span> {price}
            </p>
            <p className="detail-text">
              <span className="attri-name">Tenure:</span> {tenure}
            </p>
            <p className="detail-text">
              <span className="attri-name">Added Date:</span> {added.month}/
              {added.day}/{added.year}
            </p>
            <p className="detail-text">
              <span className="attri-name">Location:</span> {location}
            </p>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Location Map</Tab>
              </TabList>

              <TabPanel>
                <p className="detail-text">
                  <span className="attri-name">Desscription:</span>
                  <br />
                  {description}
                </p>
              </TabPanel>

              <TabPanel>
                <div>
                  <img
                    src={floorPlanImage}
                    alt={type}
                    className="floor-image"
                  />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="map-container">
                  <iframe
                    title="Google Maps"
                    src={googleMapsEmbedLink}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
