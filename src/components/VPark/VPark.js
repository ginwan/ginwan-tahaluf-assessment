import "./vpark.css";
import WindowIcon from "./Icons/WindowIcon";
import MenuIcon from "./Icons/MenuIcon";
import CarIcon from "./Icons/CarIcon";
import CameraIcon from "./Icons/CameraIcon";
import WifiIcon from "./Icons/WifiIcon";
import MemoryIcon from "./Icons/MemoryIcon";
import CPUTempIcon from "./Icons/CPUTempIcon";
import { useState } from "react";

const VPark = () => {
  // Set initial menu state: true for the first item (index 0), false for the rest
  const [menu, setMenu] = useState([true, ...Array(6).fill(false)]);

  //   Function to change menu status
  const toggleMenu = (index) => {
    setMenu((prevMenu) => {
      const newMenu = [...prevMenu];
      newMenu[index] = !newMenu[index];
      return newMenu;
    });
  };

  return (
    <div className="vpark-container">
      <div className="card-top">
        <p>VPark Fleet</p>
        <div className="vpark-icons">
          <div className="vpark-icon-container">
            <WindowIcon />
          </div>
          <div className="vpark-icon-container">
            <MenuIcon />
          </div>
        </div>
      </div>
      {Array.from({ length: 7 }, (_, index) => (
        <div className="vpark-info-container" key={index}>
          <div
            className={`vpark-info ${menu[index] ? "show-info" : "hide-info"}`}
            onClick={() => toggleMenu(index)}
          >
            <p>
              {index === 0 || index === 3 ? (
                <i className="ph-fill ph-dot-outline yellow-dot"></i>
              ) : index === 1 || index === 2 ? (
                <i className="ph-fill ph-dot-outline green-dot"></i>
              ) : (
                <i className="ph-fill ph-dot-outline red-dot"></i>
              )}
              Smart vechile {index + 1}
            </p>
            {menu[index] ? (
              <i className="ph-bold ph-caret-up"></i>
            ) : (
              <i className="ph-bold ph-caret-down"></i>
            )}
          </div>
          <div className="car-icon">
            <CarIcon />
          </div>
          {menu[index] && (
            <ul className="vechile-data">
              <li className="list-item">
                <CameraIcon />
                <div className="item-name">Camera</div>
                <div className="item-status">Online</div>
                <div className="active-status">
                  Active <i className="ph-fill ph-dot-outline"></i>
                </div>
              </li>
              <li className="list-item">
                <WifiIcon />
                <div className="item-name">Network</div>
                <div className="item-status">Available</div>
                <div className="active-status">
                  Active <i className="ph-fill ph-dot-outline"></i>
                </div>
              </li>
              <li className="list-item">
                <MemoryIcon />
                <div className="item-name">Memory</div>
                <div className="item-status">20%</div>
                <div className="active-status">
                  Normal <i className="ph-fill ph-dot-outline"></i>
                </div>
              </li>
              <li className="list-item">
                <CPUTempIcon />
                <div className="item-name">CPU Temp</div>
                <div className="item-status">High</div>
                <div className="high-status">
                  High <i className="ph-fill ph-dot-outline"></i>
                </div>
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default VPark;
