import "./midcomponent.css";
import BirdEye from "../../assets/birdEye.png";
import Gear from "../../assets/gear.png";

// This component: is An image that locates in the middle of the page, contents some texts and gear image
const MidComponent = () => {
  return (
    <div className="img-content">
      <img src={BirdEye} alt="imag" className="bg-img" />
      <img src={Gear} alt="gear" className="gear-img" />
      <div className="text">
        <h1>
          Get a bird’s eye <span>view</span> in a snap.
        </h1>
        <p>
          We equip you with the tools to customise your dashboards and track
          fleet status, decorations, and violations at a glance.
        </p>
      </div>
    </div>
  );
};

export default MidComponent;
