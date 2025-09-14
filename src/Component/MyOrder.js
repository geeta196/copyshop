import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar"; // ✅ Import Navbar
import "./MyOrder.css";

function MyOrder() {
  const location = useLocation();
  const { name, phone, quantity, address, item, orderId } = location.state || {};

  return (
    <div>
      <Navbar/> 
      <div className="myorder-page">
        <div className="myorder-box">
          <h2>🎉 Order Confirmed!</h2>
          {orderId && <p><strong>Order ID:</strong> {orderId}</p>}
          {item && <p><strong>Item:</strong> {item.name}</p>}
          {item && <p><strong>Price:</strong> {item.price}</p>}
          {quantity && <p><strong>Quantity:</strong> {quantity}</p>}
          {name && <p><strong>Customer:</strong> {name}</p>}
          {phone && <p><strong>Phone:</strong> {phone}</p>}
          {address && <p><strong>Delivery Address:</strong> {address}</p>}
          <p className="success-msg">✅ Your coffee will be delivered soon. Thank you!</p>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
