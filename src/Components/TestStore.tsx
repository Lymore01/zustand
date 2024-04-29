/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useSearch } from "../store/useStore";
import { useCart } from "../store/useStore";
import { products } from "../Utils/sampleProducts";

const TestStore = () => {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // useSearch.setState({ input: value });
  };

  const cart = useCart((state) => state.cartItem);
  const cartLength = cart.length;

  useEffect(() => {
    useSearch.setState({ input: value });
  }, [value]);

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((id: number) => {
      const idProd = products.find((prod) => prod.id === id); // Use find instead of filter
      if (idProd) {
        const price = Number(idProd.price.replace("$", "").trim());
        totalPrice += price;
      }
    });
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    console.log(total);
  }, []);

  return (
    <>
      <div>
        <input
          value={value}
          placeholder="Search here..."
          style={{
            height: "30px",
            width: "300px",
            borderRadius: "5px",
            borderStyle: "none",
            padding: 8,
            textDecoration: "Capitalize",
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button
          style={{
            marginLeft: "20px",
            background: "black",
          }}
          onClick={handleSubmit}
        >
          Cart (<span>{cartLength}</span>)
        </button>
        <p>Total : ${total}</p>
      </div>
    </>
  );
};

export default TestStore;
