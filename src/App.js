import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";

function App() {
  const foodData = [
    { id: 1, name: "Tea", price: 10, description: "" },
    { id: 2, name: "Cofee", price: 15, description: "Hot" },
    { id: 3, name: "Kizhi Porotta", price: 100, description: "Spicy" },
    { id: 4, name: "Kollium beefum", price: 90, description: "Hot nd spicy" },
  ];
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <Header cart={cart} />
      <Body foodData={foodData} cart={cart} setCart={setCart} />
    </div>
  );
}
export default App;
