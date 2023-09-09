import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/reset.scss";
import Carrousel from "./components/Carrousel/Carrousel";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";

import { AppContext } from "./Contexts/AppContext";
import LightBox from "./components/LightBox/LightBox";
import ImageModal from "./components/Modal/ImageModal";

function App() {
  const [mobileList, setMobileList] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        mobileList,
        setMobileList,
        quantity,
        setQuantity,
        showModal,
        setShowModal,
      }}
    >
      <Header />
      <Carrousel />
      <div className="main">
        <LightBox />

        <Description />
      </div>
      {showModal && <ImageModal />}
    </AppContext.Provider>
  );
}

export default App;
