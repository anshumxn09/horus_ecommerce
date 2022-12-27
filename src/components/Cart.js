import React, { useEffect } from "react";
import { useCartContext } from "../context/cartContext";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeItem , clearCart, addOne, minusOne, total_amount, shipping_fee} = useCartContext();
  // console.log(cart)
  useEffect(() => {
    if(cart.length === 0){
      navigate('/products');
    }
  }, [cart])
  return (
    <div className="cartContainer">
      {cart.map((elem) => {
        return (
          <div className="cartItems">
          <button type="button" className="closeBTN" onClick={() => removeItem(elem.id)}><i class="fa-solid fa-trash" /></button>
            <div className="imageB">
              <img src={elem.image} alt="" width={200} height={200} />
            </div>
            <div className="descB">
            <p>Name : <span style={{fontWeight : 'bold'}}>{elem.name}</span></p>
              <p>
                Color :{" "}
                <span
                  className="miniBlock"
                  style={{ backgroundColor: elem.color }}
                ></span>{" "}
              </p>
              <p>
                Price : {Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format(elem.price/100)}
                
              </p>
              <div className="quantityB">
                <button type="button" onClick={() => minusOne(elem.id)} >-</button>
                <p>{elem.quantity}</p>
                <button type="button" onClick={() => addOne(elem.id)} >+</button>
              </div>
              <p className="designB">Subtotal : {Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format(elem.price * elem.quantity / 100)}</p>
            </div>
          </div>
        );
      })}
      <div className="btnsBlocks">
        <Link to={'/products'}>Continue Shopping</Link>
        <Link onClick={clearCart}>Clear Cart</Link>
      </div>
      <div className="shippinInfo">
        <div className="subTotal">
          <p>Subtotal : </p>
          <p>{Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format(total_amount / 100)}</p>
        </div>
        <div className="subTotal">
          <p>Shipping Fee : </p>
          <p>{Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format(shipping_fee / 100)}</p>
        </div>
        <br />
        <hr />
        <div className="subTotal">
          <p>Order Total : </p>
          <p>{Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 2,
                }).format((shipping_fee + total_amount)/100)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
