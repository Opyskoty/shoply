import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function ProductList() {
  const prodList = useSelector((st) => st.prodList);
  const cart = useSelector(st => st.cart);

  return (
    <div className="ProductList">
      <h2>{cart.length}</h2>
      {Object.keys(prodList).map((id) => (
        <Product id={id} {...prodList[id]} />
      ))}
    </div>
  );
}

export default ProductList;
