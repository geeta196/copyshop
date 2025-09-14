import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.css";
import Navbar from "./Navbar";

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state; // menu मधून आलेलं item

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: 1,
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // unique order id तयार करा (random number)
    const orderId = "ORD" + Math.floor(Math.random() * 100000);

    // alert दाखव
    alert(`✅ Order Placed Successfully!\nOrder ID: ${orderId}`);

    // MyOrder page ला data सोबत navigate करा
    navigate("/MyOrder", { state: { ...formData, item, orderId } });
  };

  return (
    <div>
    <Navbar/>
    <div className="order-page">
      <div className="order-box">
        <h2>Order {item?.name}</h2>
        <p>Price: ₹{item?.price}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit Order
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default OrderPage;
