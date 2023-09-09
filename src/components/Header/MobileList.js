import React, { useContext } from "react";
import "./MobileList.scss";
import close from "../../images/icon-close.svg";
import { AppContext } from "../../Contexts/AppContext";

const MobileList = () => {
  const { mobileList, setMobileList } = useContext(AppContext);
  return (
    mobileList && (
      <div className="overlay">
        <div className="mobile_list_container">
          <img src={close} alt="" onClick={() => setMobileList(!mobileList)} />
          <ul>
            <li>
              <a href="@">Collections</a>
            </li>
            <li>
              <a href="@">Men</a>
            </li>
            <li>
              <a href="@">Women</a>
            </li>
            <li>
              <a href="@">About</a>
            </li>
            <li>
              <a href="@">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default MobileList;
