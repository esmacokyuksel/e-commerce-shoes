import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import AuthPage from "./Pages/AuthPage";
import CardPage from "./Pages/CardPage";
import ContactPage from "./Pages/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<CardPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
