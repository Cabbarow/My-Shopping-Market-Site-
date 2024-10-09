import React, { useContext, useEffect } from "react";
import { MyContext } from "../contexts/AppContext";
import { ReactSlider } from "react-slider-image-js";
import "react-slider-image-js/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  const { cart, setCart, total } = useContext(MyContext);
  const productCount = cart.length;

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cartDiv">
      {productCount === 0 ? (
        <div className="cartPage">
          <h1>Sepetinizde Ürün Bulunmamaktadır.</h1>
        </div>
      ) : (
        <div className="bg-slate-300">
          <h1>Sepetinizde {productCount} ürün var.</h1>
          <div className="topButtons">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded-md p-1 h-10 flex justify-center items-center"
              onClick={() => setCart([])}
            >
              Sepeti Boşalt
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded-md p-1 h-10 flex justify-center items-center">
              Satın Al {total.toFixed(2)} $
            </button>
          </div>
          <div className="cartPage">
            {cart.map((urun, index) => (
              <div
                key={urun.id}
                className="cardContainer bg-slate-300 p-2 rounded-xl "
              >
                <div className="product-card">
                  <div className="product-image w-57 h-57">
                    <ReactSlider
                      images={urun.images.map((image) => ({
                        src: image,
                      }))}
                      slideAnimationDuration={"1000ms"}
                      objectFit={"cover"}
                      isAutoSlide={false}
                      autoSlideDuration={5000}
                    />
                    <button>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="favouriteHeart"
                      />{" "}
                    </button>
                  </div>
                  <p className="product-name font-bold pt-2">{urun.title}</p>
                  <hr className="hrCart" />
                  <h6 className="text-slate-700">{urun.category.name}</h6>
                  <div className="product-price flex gap-2 justify-center  text-lg ">
                    <p>
                      {urun.price.toFixed(2)} {"TL"}
                    </p>
                    *<p>{urun.quantity} Ürün</p>
                  </div>

                  <div className="quantity">
                    <button
                      className="plus-minus"
                      disabled={urun.quantity === 1}
                      onClick={() => {
                        if (urun.quantity > 0) {
                          setCart((prev) => {
                            let newArray = [...prev];
                            newArray.splice(index, 1, {
                              ...urun,
                              quantity: urun.quantity - 1,
                            });

                            return newArray;
                          });
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faCircleMinus} />
                    </button>

                    <button
                      className="plus-minus"
                      onClick={() => {
                        setCart((prev) => {
                          let newArray = [...prev];
                          newArray.splice(index, 1, {
                            ...urun,
                            quantity: urun.quantity + 1,
                          });

                          return newArray;
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faCirclePlus} />
                    </button>
                  </div>
                  <div className="flex justify-center m-2">
                    <button
                      className="deleteButton bg-red-500 hover:bg-red-600 text-white text-lg rounded-md p-5 h-10 flex justify-center items-center"
                      onClick={() =>
                        setCart((prev) =>
                          prev.filter((item) => item.id !== urun.id)
                        )
                      }
                    >
                      Ürünü Sil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
