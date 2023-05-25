import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./features/product/Detail";
import CheckOut from "./pages/CheckOut";
import OrderHistory from "./pages/OrderHistory";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
function App() {
  return (
    <div className="dark:bg-[#1B2223] overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Detail />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/check-out" element={<CheckOut />}></Route>
        <Route path="/my-order" element={<OrderHistory />}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
