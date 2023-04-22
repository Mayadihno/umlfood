import React from "react";
import { useNavigate } from "react-router-dom";
import "./Permision.css";

const NoPermision = () => {
  const navigate = useNavigate();
  const handlebtn = () => {
    navigate("/", { replace: true });
  };
  return (
    <React.Fragment>
      <div className="background_image"></div>
      <div className="container">
        <div className="permision">
          <h3 className="welcome">
            welcome to <span> 3m logistics solution</span>
          </h3>
          <div className="over">
            <h5>You must be over 18 years of age to shop on this webstore</h5>
            <div className="overButton">
              <button onClick={handlebtn}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoPermision;
