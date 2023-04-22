import React from "react";
import emailjs from "@emailjs/browser";
import "../Pages/Contact.css";
// import Topbar from "../Topbar/Topbar";
// import Navbars from "../Navbar/Navbars";
// import Footer from "../Footer/Footer";

const Contact = () => {
  const handleForm = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_ygjkvb9",
        "template_b4co85u",
        event.target,
        "j6SWmhwJJnrgyfx1V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <React.Fragment>
      {/* <Topbar />
      <Navbars /> */}
      <div className="contact">
        <div className="contact-section">
          <h3>Contact Us</h3>
        </div>
        <div className="container mt-5 py-3">
          <div className="col-md-8 mx-auto">
            <div className="card p-4 shadow-lg">
              <form action="" onSubmit={handleForm}>
                <div className="form-group">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="name"
                    placeholder="Enter Firstname Here"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Enter Lastname Here"
                    id="lname"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Here"
                    id="email"
                    required
                    className="form-control"
                  />
                </div>
                <textarea
                  name="message"
                  id=""
                  cols="10"
                  rows="10"
                  placeholder="Enter Your Messages Here"
                  className="form-control mt-3"
                ></textarea>
                <div className="d-grid mx-4 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Contact;
