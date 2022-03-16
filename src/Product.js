import { useCart } from "./CartContext";

function Product({ name, price, imageUrl }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    const product = { name, price, imageUrl };
    addToCart(product);
  };

  return (
    <div className="product">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="image"></div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Product;
