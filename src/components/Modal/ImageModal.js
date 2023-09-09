import React, { useContext } from "react";
import "./ImageModal.scss";
import LightBox from "../LightBox/LightBox";
import close from "../../images/icon-close.svg";
import { AppContext } from "../../Contexts/AppContext";

const ImageModal = () => {
  const { setShowModal } = useContext(AppContext);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="image_modal_container">
      <div className="modal_wrapper">
        <div className="close_sign_container" onClick={closeModal}>
          <img src={close} alt="" />
        </div>
        <LightBox />
      </div>
    </div>
  );
};

export default ImageModal;
