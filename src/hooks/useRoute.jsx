// import { BrowserRouter, Routes, Route } from 'react-router';
// import Navbar from './components/Navbar';
// import Footer from './components/footer';
// import Home from './pages/Home';

// function App() {

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import LoginPage from "./pages/Authentication/LoginPage";
import Register from "./pages/Authentication/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./components/Layout/AuthProvider";
import RequireAuth from "./components/Layout/RequireAuth";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
