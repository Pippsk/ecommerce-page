import React, { useState, useContext } from "react";
import lightboxImg from "../../images/product-1.jpg";
import PhotoGallery from "./PhotoGallery";
import "./LightBox.scss";
import { AppContext } from "../../Contexts/AppContext";

const LightBox = () => {
  const [selectedImage, setSelectedImage] = useState(lightboxImg);
  const { setShowModal } = useContext(AppContext);

  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="lightbox_container">
      <div className="lightbox_image" onClick={openModal}>
        <img src={selectedImage} alt="" />
      </div>

      <PhotoGallery onImageClick={handleImageClick} />
    </div>
  );
};

export default LightBox;
