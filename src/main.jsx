import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { CartProvider } from "./context/CartContext";
import MainBody from "./components/mainbody.jsx";



const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <StrictMode>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
            <Route
              path="/"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <App />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <>
                    <MainBody />
                    <Products />
                  </>
                }
              />
              <Route path="product-detail/:product_id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
