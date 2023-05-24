import LoginForm from './components/LoginForm'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Detail from './features/product/Detail'
import Cart from './features/cart/Cart'
import Products from './features/product/Products'
import CheckOut from './pages/CheckOut'
import OrderHistory from './pages/OrderHistory'
function App() {
  return (
    <div className="dark:bg-[#1B2223]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/check-out" element={<CheckOut />}></Route>
        <Route path="/my-order" element={<OrderHistory />}></Route>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
