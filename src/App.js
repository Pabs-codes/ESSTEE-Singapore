import AboutR from "./routes/AboutR";
import HomeR from "./routes/HomeR";
import {Route, Routes } from "react-router-dom";
import ServicesR from "./routes/ServicesR";
import ProductsR from "./routes/ProductsR";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeR />} />
      <Route exact path="/AboutR" element={<AboutR/>} />
      <Route exact path="/ServicesR" element={<ServicesR/>} />
      <Route exact path="/ProductsR" element={<ProductsR/>} />
      <Route exact path="/CorporationR" element={<ProductsR/>} />
      <Route exact path="/ContactR" element={<ProductsR/>} />


    </Routes>
  );
}





