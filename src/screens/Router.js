import Home from "./Home/Home";
import Item from "../components/Home/ItemId";
import NavBar from "../../src/components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/item/:itemId" element={<Item />} />
        {/* <Route exact path="/category/:categoryId" element={<Category/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
