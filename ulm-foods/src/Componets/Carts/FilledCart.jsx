import React from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import "../Carts/Style.css";
// import { UserContext } from "../../Context/UserPersonal";
const FilledCart = ({
  cart,
  handleUpdateQty,
  handleEmptyCart,
  handleRemoveCart,
}) => {
  // const { person } = useContext(UserContext);

  // const func = () => {
  //   const variable = cart.subtotal.formatted_with_symbol;
  //   const yake = variable.slice(2);
  //   const final = "Kr" + yake * 10 + ".00";

  //   return final;
  // };
  // const func2 = () => {
  //   const variable = cart.subtotal.formatted_with_symbol;

  //   return variable;
  // };
  return (
    <React.Fragment>
      <div className="container mt-5 py-4">
        <div className="row">
          {cart.line_items.map((items) => {
            return (
              <div className="col-md-4" key={items.id}>
                <CartItems
                  items={items}
                  handleUpdateQty={handleUpdateQty}
                  handleRemoveCart={handleRemoveCart}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4 downSection">
          <h4>SubTotal: {cart.subtotal.formatted_with_symbol}</h4>
          <div className="buttons">
            <button className="mx-3 btn btn-primary" onClick={handleEmptyCart}>
              Empty Cart
            </button>
            <Link to="/checkout">
              <button className=" mx-3">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mbottom"></div>
    </React.Fragment>
  );
};

export default FilledCart;
