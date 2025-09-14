import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // import missing
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Espresso",
      price: "30.Rs Only",
      img: "https://tse2.mm.bing.net/th/id/OIP.rV5J-0y0QvdnpdnyQSjJcwHaE8?pid=Api&P=0&h=180",
    },
    {
      name: "Cappuccino",
      price: "40.Rs Only",
      img: "https://tse2.mm.bing.net/th/id/OIP.tsuo28RWH5EcxN5hhDpwaQHaE8?pid=Api&P=0&h=180",
    },
    {
      name: "Latte",
      price: "40.Rs Only",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    },
  ];

  const handleAddToCart = (item) => {
    alert(`✅ ${item.name} added to cart!`);
    // navigate("/Cart", { state: item }); // uncomment to go to cart page
  };

  const handleOrderNow = (item) => {
    navigate("/Order", { state: item });
  };

  return (
    <div>
      <Navbar />

      <section className="menu">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>

              <div className="button-group">
                <button className="add-btn" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
                <button className="order-btn" onClick={() => handleOrderNow(item)}>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
