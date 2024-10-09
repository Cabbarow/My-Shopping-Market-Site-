import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [productDetail, setProductDetail] = useState({});

  const [pageSize, setPageSize] = useState(8);

  const [selectedSize, setSelectedSize] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setProducts(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const calculatedTotalPrice = (cart) => {
    const totalPrice = cart.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0);

    setTotal(totalPrice);
  };

  useEffect(() => {
    calculatedTotalPrice(cart);
  }, [cart]);

  const value = {
    products,
    setProducts,
    cart,
    setCart,
    selectedSize,
    setSelectedSize,
    calculatedTotalPrice,
    total,
    pageSize,
    setPageSize,
    productDetail,
    setProductDetail,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
