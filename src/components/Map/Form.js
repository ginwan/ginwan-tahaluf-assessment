import React from "react";
import AutoGenerateIcon from "./Icons/AutoGenerateIcon";

const Form = () => {
  return (
    <div className="form-container">
      <h4>
        Tripe Route <i class="ph-light ph-info"></i>
      </h4>
      <p>Draw Trip Route by Adding Start point, Way points, and End point</p>
      <div className="divider"></div>
      <div>
        <form className="form">
          <div className="form-group">
            <label>Trip name</label>
            <input type="text" placeholder="Trip 2" />
          </div>
          <div className="form-group">
            <label>Sector</label>
            <input type="text" placeholder="Marina" />
          </div>
        </form>
      </div>
      <div className="divider"></div>
      <div className="auto-text">
        <h4>
          Auto Generate <i class="ph-light ph-info"></i>
        </h4>
        <button type="button" className="auto-generate-icon">
          <AutoGenerateIcon />
        </button>
      </div>
      <div className="divider"></div>
      <div className="points">
        <div className="point">
          <h5>Add Start Point</h5>
          <button type="button" className="point-button">
            +
          </button>
        </div>
        <div className="point">
          <h5>Add Start Point</h5>
          <button type="button" className="point-button">
            +
          </button>
        </div>
        <div className="point">
          <h5>Add Start Point</h5>
          <button type="button" className="point-button">
            +
          </button>
        </div>
      </div>
      <div className="container-buttons">
        <button type="submit" className="cancel-button">
          Cancel
        </button>
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
