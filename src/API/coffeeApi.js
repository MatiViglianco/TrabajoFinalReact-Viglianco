const coffeeApi = async () => {
  const url = "https://api.sampleapis.com/coffee/hot";
  const resp = await fetch(url);
  const data = await resp.json();

  const products = data.map((products) => ({
    id: products.id,
    title: products.title,
    description: products.description,
    price: "$20",
    pictureUrl: products.image,
    stock: 5,
  }));
  console.log(products);
  return products;
};

export default coffeeApi;
