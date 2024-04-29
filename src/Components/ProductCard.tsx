/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

type Props = {
  image: string;
  price: string;
  name: string;
  handleAddToCart: () => void;
};

const ProductCard: React.FC<Props> = ({
  image,
  price,
  name,
  handleAddToCart,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "silver",
        height: "auto",
        width: "auto",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        position: "relative",
        gap: "10px",
      }}
    >
      <div style={{ height: "70%", width: "100%" }}>
        <img
          src={image}
          alt={name} // Adding alt text for accessibility
          style={{
            width: "100%", // Use 100% width to fill the container
            height: "100px",
            borderRadius: "5px",
          }}
        />
        <div style={{ fontWeight: "600", fontSize: "14px" }}>{name}</div>
        <div style={{ fontSize: "14px" }}>{price}</div>
      </div>
      <div style={{ height: "30%", width: "100%" }}>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
