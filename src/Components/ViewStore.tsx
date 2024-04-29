/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useMemo } from "react";
import { useSearch, useCart } from "../store/useStore";
import { products } from "../Utils/sampleProducts";
import ProductCard from "./ProductCard";

const ViewStore = () => {
  const [Products, setProducts] = useState(products);
  const value = useSearch((state) => state.input);
  const cart = useCart((state) => state.cartItem);

  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    if (value !== "") {
      return products.filter((prod) =>
        prod.name.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      return products;
    }
  }, [value]);

  // Update products state based on search value
  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  // Add product to cart
  const handleAddToCart = (id: number) => {
    if (!cart.includes(id)) {
      const updatedCart = [...cart, id];
      useCart.setState({ cartItem: updatedCart });
    } else {
      alert("Product is already in the cart");
    }
  };

  return (
    <>
      <div
        style={{
          width: "auto",
          background: "",
          marginTop: "20px",
          borderRadius: "5px",
          padding: "8px",
          color: "black",
          display: "grid",
          gridTemplateRows: "auto auto", // 2 rows
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns in each row
          gap: "16px", // Gap between grid items
        }}
      >
        {Products.length === 0 && (
          <p
            style={{
              color: "white",
              font: "600",
            }}
          >
            No search results
          </p>
        )}
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            handleAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ViewStore;
