import Product from "./Product";
import { products } from "./productsData";

function Home() {
  return (
    <main>
      <h2>Start Shopping</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Home;
