import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import "./Feature.css";

const Featured = () => {
  const { isLoading, featureProducts } = useProductContext();
  
  return (
    <div className="featureContainer">
      <h2>Featured Products</h2>
      <div className="productsContainer">
        {featureProducts.map((elem, index) => {
          return (
            <Link to={`/details/${elem.id}`}>
            <div className="blocks" key={index}>
              <img
                src={elem.image}
                alt="images"
              />
              <div className="info">
                <span className="name">{elem.company}</span>
                <span className="price">{Intl.NumberFormat("en-IN", {
                    style : "currency",
                    currency : "INR",
                    maximumFractionDigits : 2,
                }).format(elem.price/100)}</span>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
