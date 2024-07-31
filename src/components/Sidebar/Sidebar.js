import "./sidebar.css";
import React, { useState } from "react";
import HomeIcon from "./Icons/HomeIcon";
import MapIcon from "./Icons/MapIcon";
import TransactionIcon from "./Icons/TransactionIcon";
import ReportIcon from "./Icons/ReportIcon";
import ControlIcon from "./Icons/ControlIcon";
import helpImg from "../../assets/need-help.svg";
import questionMark from "../../assets/question-mark.png";

// Sidebar Component
const Sidebar = () => {
  const [active, setActive] = useState(0);

  const handleMenuClick = (index) => {
    setActive(index); // Set active index to the clicked item's index
  };

  const menuItems = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "Operation", icon: <TransactionIcon />, href: "/#" },
    { label: "Map", icon: <MapIcon />, href: "/#" },
    { label: "Report", icon: <ReportIcon />, href: "/#" },
    { label: "Control panel", icon: <ControlIcon />, href: "/#" },
  ];

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
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={active === index ? "active" : ""}
                onClick={() => handleMenuClick(index)}
              >
                {item.icon}
                {item.label}
                {active === index && (
                  <div className="menu-dot">
                    <i className="ph-fill ph-dot-outline"></i>
                  </div>
                )}
              </a>
            </li>
          ))}
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
