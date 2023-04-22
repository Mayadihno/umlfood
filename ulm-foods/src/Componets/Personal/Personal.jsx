// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../Context/UserPersonal";
// import "../Permission/Permision.css";

// const Personal = () => {
//   const navigate = useNavigate();

//   // const { person, login, logout } = useContext(UserContext);

//   const handleClick = () => {
//     login(person);
//     navigate("/home", { replace: true });
//   };
//   const handleClicks = () => {
//     logout();
//     navigate("/home", { replace: true });
//   };

//   return (
//     <React.Fragment>
//       <div className="background_image"></div>
//       <div className="container">
//         <div className="permision">
//           <h3 className="text-center">
//             welcome to <span> 3m logistics solution</span>
//           </h3>
//           <div className="buttons-com permtbn">
//             <h5 className="text-center">
//               Are you buying as indivdual or company
//             </h5>
//             <div className="buttonssss">
//               <button className="" onClick={handleClick}>
//                 Individual
//               </button>
//               <button className="" onClick={handleClicks}>
//                 Company
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
// export default Personal;
