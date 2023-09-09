import React from "react";
import "./PhotoGallery.scss";
import { galleryImages } from "../../Data/data";

const PhotoGallery = ({ onImageClick }) => {
  return (
    <div className="gallery_container">
      {galleryImages.map((galleryImage, index) => (
        <div
          key={index}
          className="gallery_thumbnail_container"
          onClick={() => onImageClick(galleryImage.url)}
        >
          <img src={galleryImage.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
