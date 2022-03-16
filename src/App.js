import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Home from "./Home";
import Header from "./Header";
import { CartProvider } from "./CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
