import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import { MyProvider } from "./contexts/AppContext";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Layout from "./components/Layout";
import Comminication from "./components/Comminication";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PrimeReactProvider>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/comminication" element={<Comminication />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/productdetail" element={<ProductDetail />} />
          </Route>
        </Routes>
      </MyProvider>
    </PrimeReactProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
