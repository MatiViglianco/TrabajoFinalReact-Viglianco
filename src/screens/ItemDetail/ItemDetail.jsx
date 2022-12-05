import ItemCount from "../../components/Home/ItemCount";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GetProduct from "../../API/coffeeApi";
import FormatItemDetail from "./FormatItemDetail";

const ItemDetail = () => {
  const items = GetProduct();
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  console.log(items);
  useEffect(() => {
    setProduct(itemId);
    console.log(setProduct, itemId);
  }, [itemId]);
  return (
    <div>
      <h1>{itemId}</h1>
      <ItemCount />
      {items
        .filter((i) => i.id === +itemId)
        .map((product) => {
          return <FormatItemDetail product={product} />;
        })}
    </div>
  );
};

export default ItemDetail;
