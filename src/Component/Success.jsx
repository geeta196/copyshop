import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Success.css";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state;

  return (
    <div className="success-page">
      <div className="success-box">
        <h2>🎉 Order Placed Successfully!</h2>
        <p><strong>Order ID:</strong> {order?.orderId}</p>
        <p><strong>Item:</strong> {order?.item?.name}</p>
        <p><strong>Quantity:</strong> {order?.quantity}</p>
        <p><strong>Customer:</strong> {order?.name}</p>

        <button onClick={() => navigate("/MyOrder")} className="btn">
          Go to My Orders
        </button>
        <button onClick={() => navigate("/Menu")} className="btn btn-alt">
          Order More
        </button>
      </div>
    </div>
  );
}

export default Success;
