import React from "react";
import { useNavigate } from "react-router-dom";
import "./Permision.css";

const Permission = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/no-permision", { replace: true });
  };
  const handleClicks = () => {
    navigate("/home", { replace: true });
  };

  return (
    <React.Fragment>
      <div className="background_image"></div>
      <div className="container">
        <div className="permision">
          <h3 className="text-center">
            welcome to <span> 3m logistics solution</span>
          </h3>
          <div className="buttons-com permtbn">
            <h5 className="text-center">Are you over 18 years ?</h5>
            <div className="buttonssss">
              <button className="" onClick={handleClick}>
                No
              </button>
              <button className="" onClick={handleClicks}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Permission;
