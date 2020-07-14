import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./actions";

function Product({ id, name, price, description, image_url }) {
  const cart = useSelector((st) => st.cart);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(id));
    console.log(cart)
  }
  function removeFromCart() {
    dispatch(remove(id));
    console.log(cart);
  }
  return (
    <li>
      <img src={image_url} alt={name}></img>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </li>
  );
}

export default Product;
