import React from 'react'
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  // console.log(cart);
  return (
    <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
      {cart.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}
