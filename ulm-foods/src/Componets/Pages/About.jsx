import React from "react";
// import Footer from "../Footer/Footer";
import image1 from "../Home/Images/port1.jpg";
import image2 from "../Home/Images/port2.jpg";
// import Navbars from "../Navbar/Navbars";
import "../Pages/About.css";
// import Topbar from "../Topbar/Topbar";

const About = () => {
  return (
    <React.Fragment>
      {/* <Topbar />
      <Navbars /> */}
      <div className="about">
        <div className="about-section">
          <h3>About Us</h3>
        </div>
        <div className="container mt-4">
          <p>
            We are wholesale exporters & suppliers specialized in processing,
            branding, and packaging of African foodstuffs. Items include soup
            ingredients , egusi, ogbono,Indomie Noodles palm oil, African
            spices, and seasonings. We import & export plantain flour, garri,
            yams and yam flour etc.
          </p>
          <div className="about-img">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <img
                  src={image1}
                  alt="port_image"
                  className="img-fluid rounded-1 mt-2"
                />
              </div>
              <div className="col-md-6">
                <img
                  src={image2}
                  alt="port_image"
                  className="img-fluid rounded-1 mt-2"
                />
              </div>
            </div>
          </div>
          <p className="mt-4">
            Our Company is one of the widely trusted importer and suppliers of
            agricultural products from Nigeria to Denmark and any country in the
            world.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default About;
