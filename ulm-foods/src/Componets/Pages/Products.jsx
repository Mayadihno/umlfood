import React from "react";
import "../Pages/Product.css";
import { AddShoppingCartRounded } from "@mui/icons-material";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { UserContext } from "../../Context/UserPersonal";
const Products = ({ product, addTocart }) => {
  const handleClick = () => {
    toast.warning("This Product is out of Stock");
  };
  // const { person } = useContext(UserContext);

  // const func = () => {
  //   const variable = product.price.formatted_with_symbol;
  //   const yake = variable.slice(2);
  //   const final = "Kr" + yake * 10 + ".00";

  //   return final;
  // };
  // const func2 = () => {
  //   const variable = product.price.formatted_with_symbol;

  //   return variable;
  // };
  return (
    <React.Fragment>
      <div className="product">
        <div className="card shadow-lg">
          <Link to={"/description/" + product.id}>
            <div className="card-img-top">
              <img src={product.image.url} alt="" className="img-fluid" />
            </div>
            {product.price.formatted_with_symbol === "kr0.00" && (
              <div className="outStock">
                <div className="outStock-text">
                  <h3>Out of Stock</h3>
                </div>
              </div>
            )}
            <div className="card-body">
              <p className="text-title">{product.name}</p>
              <p
                className="text-body fw-bold text-black"
                dangerouslySetInnerHTML={{
                  __html:
                    product.description.substring(0, 100) +
                    `   .... click to Read More`,
                }}
              ></p>
            </div>
          </Link>
          <div className="cards-footer">
            <span className="text-title">
              {product.price.formatted_with_symbol}
            </span>
            {product.price.formatted_with_symbol !== "kr0.00" ? (
              <div
                className="cards-button"
                onClick={() => addTocart(product.id, 1)}
              >
                <AddShoppingCartRounded />
              </div>
            ) : (
              <div className="cards-button" onClick={handleClick}>
                <ProductionQuantityLimitsRoundedIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
