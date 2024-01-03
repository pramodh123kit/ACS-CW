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
                  {description}
                </p>
              </TabPanel>

              <TabPanel>
                <div className="map-container">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387743.59911923574!2d-74.11842906249999!3d40.70582503780192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1641208179533!5m2!1sen!2suk"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  <img src={picture} alt={type} className="card-image" />
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
