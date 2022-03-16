import { useCart } from "./CartContext";

function Cart() {
  const { products, cartTotalValue } = useCart();

  return (
    <main>
      <h2>Your Cart</h2>
      <p>Your cart total is Rs. {cartTotalValue}</p>
    </main>
  );
}

export default Cart;
