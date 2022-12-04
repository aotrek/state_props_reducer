import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  /* const state = useSelector(state => state);
  console.log(state); */
  return (
    <>
      <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
        {product.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </>
  );
}
