import React from "react";
import AutoGenerateIcon from "./Icons/AutoGenerateIcon";

const Form = () => {
  return (
    <div className="form-container">
      {/* title */}
      <div className="form-title">
        Tripe Route <i className="ph-light ph-info"></i>
      </div>
      <div className="tripe-text">
        Draw Trip Route by Adding Start point, Way points, and End point
      </div>

      <div className="divider"></div>

      {/* form component start */}
      <div>
        <form className="form">
          <div className="map-form-group">
            <label>Trip name</label>
            <input type="text" placeholder="Trip 2" className="form-field" />
          </div>
          <div className="map-form-group">
            <label>Sector</label>
            <div className="select-container">
              <select className="form-field">
                <option>Marina</option>
                <option>Marina</option>
                <option>Marina</option>
              </select>
              <i className="ph-bold ph-caret-down select-arrow"></i>
            </div>
          </div>
        </form>
      </div>
      {/* form component end */}

      <div className="divider"></div>

      {/* Auto Generate button start */}
      <div className="auto-text">
        <div className="auto-title">
          Auto Generate <i className="ph-light ph-info"></i>
        </div>
        <button type="button" className="auto-generate-icon">
          <AutoGenerateIcon />
        </button>
      </div>
      {/* Auto Generate button end*/}

      <div className="divider"></div>

      {/* points components start */}
      <div className="points">
        <div className="point">
          <div className="gray-text">
            Add <br></br> Start Point
          </div>
          <button type="button" className="point-green-button">
            +
          </button>
        </div>
        <div className="point">
          <div className="dark-text">
            Add <br></br> Start Point
          </div>
          <button type="button" className="point-yellow-button">
            +
          </button>
        </div>
        <div className="point">
          <div className="gray-text">
            Add <br></br> Start Point
          </div>
          <button type="button" className="point-red-button">
            +
          </button>
        </div>
      </div>
      {/* points components end */}
      <div className="divider"></div>
      {/*  button */}
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
