import React from "react";
import image1 from "./smilesImage.jpg";
import "../Smiles/Smiles.css";
const Smiles = () => {
  return (
    <React.Fragment>
      <div className="images">
        <a
          href="https://www.findsmiley.dk/Sider/Search.aspx?k=3m%20Logistics%20Solution"
          target="_blank"
          rel="noreferrer"
        >
          <img src={image1} alt="" className="img-fluid" />
        </a>
      </div>
      <p className="smilesPara">
        See the Danish Veterinary and Food Administration's smiley reports
      </p>
    </React.Fragment>
  );
};

export default Smiles;
