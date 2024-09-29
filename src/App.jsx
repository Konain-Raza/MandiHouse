import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductData } from "./constants/productData";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div className="bg-[url('https://console.indolj.io/upload/1711524709-Bg.jpg')] bg-cover bg-center min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products products={ProductData} />} />
          <Route path="/home" element={<Products products={ProductData} />} />

          <Route path="/getstarted" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
