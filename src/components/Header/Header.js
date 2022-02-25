const Header = ({ Cart }) => {
  return (
    <div className="header">
      <div className="header_nav">
        <h1>Vyakunerate Chai</h1>
      </div>
      <div className="dp">
        <img
          className="bg"
          src="./img/react.png"
          width="200px"
          height="300px"
          alt="React meal"
        />
      </div>
      <div className="header_about">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};
export default Header;
