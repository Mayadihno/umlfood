import React from "react";
import "../Loading/Loading.css";

const Loading = () => {
  return (
    <React.Fragment>
      <div className="container mt-5 py-4">
        <div className="bar">
          <div className="ball"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loading;
