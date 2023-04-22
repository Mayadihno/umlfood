import React from "react";
// import { useContext } from "react";
// import { UserContext } from "../../Context/UserPersonal";
import "../Carts/Style.css";

const CartItems = ({ items, handleUpdateQty, handleRemoveCart }) => {
  // const { person } = useContext(UserContext);

  // const func = () => {
  //   const variable = items.line_total.formatted_with_symbol;
  //   const yake = variable.slice(2);
  //   const final = "Kr" + ((yake * 25) % +".00");

  //   return final;
  // };
  // const func2 = () => {
  //   const variable = items.line_total.formatted_with_symbol;

  //   return variable;
  // };
  return (
    <React.Fragment>
      <div className="card cartItem mt-4">
        <div className="card-img-top">
          <img src={items.image.url} alt="" className="img-fluid" />
        </div>
        <div className="card-body">
          <div className="name">
            <h4>{items.name}</h4>
            <h4>{items.line_total.formatted_with_symbol}</h4>
          </div>
        </div>
        <div className="card-footer">
          <h6>Quantity: {items.quantity}</h6>
          <div className="add">
            <button
              className="mx-3 btnadd"
              onClick={() => handleUpdateQty(items.id, items.quantity + 1)}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
            <button
              className=" mx-3 btnadd"
              onClick={() => handleUpdateQty(items.id, items.quantity - 1)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => handleRemoveCart(items.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItems;
