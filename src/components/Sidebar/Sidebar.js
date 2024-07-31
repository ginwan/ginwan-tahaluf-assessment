import "./sidebar.css";
import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import MapIcon from "./Icons/MapIcon";
import TransactionIcon from "./Icons/TransactionIcon";
import ReportIcon from "./Icons/ReportIcon";
import ControlIcon from "./Icons/ControlIcon";
import helpImg from "../../assets/need-help.svg";
import questionMark from "../../assets/question-mark.png";

// Sidebar Component
const Sidebar = () => {
  return (
    <div>
      <section className="sidebar">
        <a href="/" className="logo">
          <div className="logo-icon">
            <i className="ph-bold ph-chart-bar"></i>
          </div>
          Logo
        </a>
        <ul className="side-menu">
          <li>
            <a href="/" className="active">
              <HomeIcon />
              Home
              <div className="menu-dot">
                <i className="ph-fill ph-dot-outline"></i>
              </div>
            </a>
          </li>
          <li>
            <a href="/#">
              <TransactionIcon className="icon" /> Operation
            </a>
          </li>
          <li>
            <a href="/#">
              <MapIcon className="icon" />
              Map
            </a>
          </li>
          <li>
            <a href="/#">
              <ReportIcon className="icon" /> Report
            </a>
          </li>
          <li>
            <a href="/#">
              <ControlIcon className="icon" />
              Control panel
            </a>
          </li>
          <div className="help-container">
            <img
              src={questionMark}
              alt="question mark"
              className="question-img"
            />
            <img src={helpImg} alt="help" className="help-image" />
            <div className="help-text">
              Need help?
              <p>Click here to find Functionalities, Help, and More! </p>
              <button type="button">Discover</button>
            </div>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
