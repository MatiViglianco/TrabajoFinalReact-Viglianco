import axios from "axios";
import { useState, useEffect } from "react";

const GetProduct = () => {
  const item = [];
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://api.sampleapis.com/coffee/hot";
    axios.get(url).then((res) => {
      setData(res.data.slice(0, 16));
    });
  }, []);
  data.map((product) => {
    item.push({
      id: product.id,
      category: ["small", "medium", "big"][Math.floor(Math.random() * 3)],
      title: product.title,
      description: product.description,
      price: [10, 15, 20, 25, 30, 35, 40][Math.floor(Math.random() * 7)],
      pictureUrl: product.image,
      stock: [10, 20, 30, 40, 50, 60, 70, 80][Math.floor(Math.random() * 8)],
    });
    return item;
  });
  return item;
};

export default GetProduct;
