import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from "./Component/About";
import Coffee from "./Component/Coffee";
import Order from './Component/Order';
import Success from './Component/Success';
import Contact from './Component/Contact';
import Footer from "./Component/Footer";
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Menu from "./Component/Menu";
import Card from "./Component/Card";
import MyOrder from './Component/MyOrder';

function App() {
  return (
    <Router>
      {/* <Login/> */}
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Scuccess" element={<Success />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/SignUp" element={<SignUp/>} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/Card" element={<Card />} />
        <Route path="/MyOrder" element={<MyOrder />} />
      </Routes>


      <Footer/>
    </Router>
  );
}

export default App;
