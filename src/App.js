import AboutR from "./routes/AboutR";
import HomeR from "./routes/HomeR";
import {Route, Routes } from "react-router-dom";
import ServicesR from "./routes/ServicesR";
import ProductsR from "./routes/ProductsR";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeR />} />
      <Route exact path="/AAAbout" element={<AboutR/>} />
      <Route exact path="/" element={<ServicesR/>} />
      <Route exact path="/Products" element={<ProductsR/>} />

    </Routes>
  );
}





