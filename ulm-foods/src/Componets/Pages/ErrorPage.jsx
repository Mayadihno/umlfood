import React from "react";
import ErrorImage from "../Images/404-error.png";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md">
            <img src={ErrorImage} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="text-center mt-3 py-2">
              <h3 className="text-dark fw-bold">404. That's an Error</h3>
              <h6 className="fw-bold">
                Sorry The Request Url was not Found on this server.That is all
                we Know
              </h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
