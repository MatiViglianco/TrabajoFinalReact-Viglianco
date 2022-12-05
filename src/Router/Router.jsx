import Home from "../screens/Home/Home";
import ItemDetail from "../screens/ItemDetail/ItemDetail";
import NavBar from "../components/navbar/NavBar";
import AboutUs from "../screens/AboutUs/AboutUs";
import Checkout from "../screens/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/item/:itemId" element={<ItemDetail />} />
        <Route exact path="/category/:cat" element={<Home />} />
        <Route exact path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
