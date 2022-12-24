import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import Loading from "../mini components/Loading";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { singleProduct, getSingleProduct, isSingleLoading } =
  useProductContext();
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const setIncrease = () => {
      if(quantity < singleProduct.stock) setQuantity(quantity+1);
  }

  const setDecrease = () => {
    if(quantity > 1 ) setQuantity(quantity-1);
  }

  useEffect(() => {
    const SINGLE_API = `https://api.pujakaitem.com/api/products?id=${id}`;
    getSingleProduct(SINGLE_API);
    if(Object.keys(singleProduct).length >= 1) setColor(singleProduct.colors[0]);
  }, []);

  if (isSingleLoading || Object.keys(singleProduct).length <= 1) {
    return <Loading />;
  }

  return (
    <div className="singleContainer">
      <div className="sImage">
        <img
          src={singleProduct.image[0].url}
          alt="image"
          width={350}
          height={350}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="getDetails">
        <h2 style={{ textTransform: "uppercase" }}>{singleProduct.name}</h2>
        <div className="starsP">
          <span>⭐{singleProduct.stars}/5.0</span>
          <span>{`  (${singleProduct.reviews} Customer Reviews)`}</span>
        </div>
        <span style={{ fontWeight: "bolder" }}>{`MRP : ${Intl.NumberFormat(
          "en-IN",
          {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }
        ).format(singleProduct.price / 100)}`}</span>
        <span>{singleProduct.description}</span>
        <span>
          <span style={{ color: "gray" }}>Available : </span>
          {singleProduct.stock > 0 ? `In Stock ${singleProduct.stock}` : "Not Available"}
        </span>
        <span>
          <span style={{ color: "gray" }}>Brand : </span>
          {singleProduct.company}
        </span>
        <span style={{ border: "1px solid black" }}></span>
        {singleProduct.stock > 0 ? (
          <>
            <div className="colorS">
              <span style={{ color: "gray" }}>Color : </span>
              {
                singleProduct.colors.map((elem, index) => {
                  return <div className={color === elem ? 'boxS activatedButton' : 'boxS'} style={{backgroundColor : elem}} key={index} onClick={() => setColor(elem)}></div>
                })
              }
            </div>
            <div className="lowHigh">
              <button onClick={setDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={setIncrease}>+</button>
            </div>
            <button>ADD TO CART</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

{
  /* <div className="colorS">
          <span style={{color: "gray"}}>Color : </span>{singleProduct.company}
          {
            {/* singleProduct.colors.map((elem, index) => {
              return (
                <div className="boxS" width='10px' height='10px' style={{borderRadius : '50%', color: elem}}></div>
              )
            }) */
}
// }
// </div> */
