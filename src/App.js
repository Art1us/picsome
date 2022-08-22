import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
