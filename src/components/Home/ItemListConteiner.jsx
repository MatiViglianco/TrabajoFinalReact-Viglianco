import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CardProduct from "../../screens/Home/CardItem/CardProduct";
import styles from "./styles.module.css";
import GetProduct from "../../API/coffeeApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ItemListConteiner = () => {
  const items = GetProduct();
  const { cat } = useParams();
  // useEffect(() => {
  //   console.log(items, cat);
  // }, [cat, items]);

  return (
    <Box className={styles.box}>
      <div className={styles.div}>
        <Button className={styles.button} variant="contained">
          <Link to={`/category/small`}>Small</Link>
        </Button>

        <Button className={styles.button} variant="contained">
          <Link to={`/category/medium`}>Medium</Link>
        </Button>

        <Button className={styles.button} variant="contained">
          <Link to={`/category/big`}>Big</Link>
        </Button>

        <Button className={styles.button} variant="contained">
          <Link to={`/category/all`}>All</Link>
        </Button>
      </div>
      {cat === undefined || cat === "all"
        ? items.map((product) => {
            return <CardProduct product={product} />;
          })
        : items
            .filter((i) => i.category === cat)
            .map((product) => {
              return <CardProduct product={product} />;
            })}
    </Box>
  );
};

export default ItemListConteiner;
