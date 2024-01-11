import AboutR from "./routes/AboutR";
import HomeR from "./routes/HomeR";
import { Route, Routes } from "react-router-dom";
import ServicesR from "./routes/ServicesR";
import ProductsR from "./routes/ProductsR";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeR />} />
      <Route path="/About" element={<AboutR/>} />
      <Route path="/Services" element={<ServicesR/>} />
      <Route path="/Products" element={<ProductsR/>} />

    </Routes>
  );
}





