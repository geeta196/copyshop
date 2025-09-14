import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ item }) {
  const navigate = useNavigate();

  const handleOrder = () => {
    // order page ला navigate करून item data सोबत पाठवलं
    navigate("/Order", { state: item });
  };

  return (
    <div className="coffee-card">
      <img src={item.image} alt={item.name} className="coffee-card-img" />
      <div className="coffee-card-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="price">₹{item.price}</p>
        <button onClick={handleOrder} className="order-btn">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Card;
