import FoodCard from "./FoodCard";

const Body = ({ foodData, cart, setCart }) => {
  return (
    <div className="body">
      <h2>Items Available</h2>
      {foodData.map((foodItem) => {
        return (
          <FoodCard
            foodItem={foodItem}
            key={foodItem.id}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
      <h2>Your Cart</h2>
      {cart.map((foodItem) => {
        return (
          <div className="cartView">
            <p>Name : {foodItem.name} </p>
            <p>Item price : {foodItem.price}</p>
            <p>No of Quantity : {foodItem.quantity}</p>
            <p>Total price : {foodItem.totalPrice}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Body;
