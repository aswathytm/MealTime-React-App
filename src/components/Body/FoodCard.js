import { useState } from "react";
const FoodCard = ({ foodItem, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  //const [cart, setCart] = useState([]);
  const changeQty = (e) => {
    setQuantity(Number(e.target.value));
  };
  const addToCart = () => {
    const totalPrice = foodItem.price * quantity;
    const foodExists = cart.find((item) => item.id === foodItem.id);
    if (foodExists) {
      cart[cart.indexOf(foodExists)].quantity = quantity;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          id: foodItem.id,
          name: foodItem.name,
          price: foodItem.price,
          quantity: quantity,
          totalPrice: totalPrice,
        },
      ]);
    }
    console.log(cart);
  };
  return (
    <div className="food_card">
      <p>{foodItem.id}</p>
      <p>{foodItem.name}</p>
      <p>{foodItem.price}</p>
      <p>{foodItem.description}</p>
      <input
        className="quantity"
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => changeQty(e)}
      ></input>
      <button onClick={addToCart}>+Add</button>
    </div>
  );
};
export default FoodCard;
