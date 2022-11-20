import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./styles.module.css";

function CardProduct({ product }) {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <img
          className={styles.img}
          component="img"
          alt={`products/${product.id}`}
          src={product.pictureUrl}
        />
        <div className={styles.content}>
          <div className={styles.title}>
            <Typography gutterBottom variant="h3" component="div">
              {product.title}
            </Typography>
            <Typography
              style={{ marginRight: "1rem" }}
              variant="h4"
              color="text.dark"
            >
              {product.price}
            </Typography>
          </div>
          <Typography
            style={{ paddingBottom: "4rem", width: "80%" }}
            variant="body1"
          >
            {product.description}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default CardProduct;
