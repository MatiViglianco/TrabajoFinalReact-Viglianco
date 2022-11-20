import { useState, useEffect } from "react";
import CoffeeApi from "../../API/CoffeeApi";
import { Card } from "@mui/material";

function Item() {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState({});

  const getImages = () => {
    const products = CoffeeApi();
    setProducts(products);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="principal_container">
      <h1>products</h1>
      <input
        id="filter"
        title="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="cards-container">
        {products
          .filter((item) => item.products.includes(filter))
          .map((products) => (
            <Card
              id={products.id}
              key={products.id}
              title={products.title}
              category={products.category}
              description={products.description}
              price={products.price}
              pictureUrl={products.pictureUrl}
              stock={products.stock}
            />
          ))}
      </div>
    </div>
  );
}

export default Item;
