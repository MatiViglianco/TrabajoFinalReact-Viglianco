import React from "react";
import Box from "@mui/material/Box";
import CardProduct from "../../screens/Products/CardProduct";
import axios from "axios";
import styles from "./styles.module.css";

const ItemListConteiner = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const url = "https://api.sampleapis.com/coffee/hot";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Box className={styles.box}>
      {data.slice(0, 16)?.map((product) => {
        const item = {
          id: product.id,
          title: product.title,
          description: product.description,
          price: "$20",
          pictureUrl: product.image,
          stock: 5,
        };
        return <CardProduct product={item} />;
      })}
    </Box>
  );
};

export default ItemListConteiner;
