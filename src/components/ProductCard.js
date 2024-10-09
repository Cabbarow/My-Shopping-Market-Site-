import { useContext, useEffect } from "react";
import { MyContext } from "../contexts/AppContext";

import { ReactSlider } from "react-slider-image-js";
import "react-slider-image-js/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      // delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

function ProductCard() {
  const { products, cart, setCart, selectedSize, pageSize, setProductDetail } =
    useContext(MyContext);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const urunListesi = () =>
    products
      .filter((product) =>
        selectedSize ? product.category.name === selectedSize : true
      )
      .slice(0, pageSize)
      .map((product) => (
        <Link
          to="/productdetail"
          onClick={() => {
            // setProductDetail(product)
            const item = products.find((x) => x.id === product.id);
            setProductDetail(item);
            localStorage.setItem("detail", JSON.stringify(item));
          }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="container cardContainer"
            key={product.id}
          >
            <motion.div
              className="item product-card"
              initial="hidden"
              animate="visible"
              variants={item}
            >
              <div className="product-image w-57 h-57">
                <ReactSlider
                  images={product.images.map((image) => ({
                    src: image,
                  }))}
                  slideAnimationDuration={"1000ms"}
                  objectFit={"cover"}
                  isAutoSlide={false}
                  autoSlideDuration={5000}
                />
                <button>
                  <FontAwesomeIcon icon={faHeart} className="favouriteHeart" />{" "}
                </button>
              </div>

              <h2 className="product-name font-bold pt-2">{product.title}</h2>
              <h6 className="text-slate-700">{product.category.name}</h6>
              <p className="product-price">
                {product.price} {"TL"}
              </p>
              <div>
                <p className="product-description">
                  {product.description
                    ? product.description
                    : "Sitil Belirtilmemiş"}
                </p>
              </div>

              <button
                className="buy-button"
                onClick={(e) => {
                  e.preventDefault();
                  setCart((prev) => {
                    const exist = prev.find((item) => item.id === product.id);

                    if (exist) {
                      return prev.map((item) =>
                        item.id === product.id
                          ? { ...exist, quantity: exist.quantity + 1 }
                          : item
                      );
                    } else {
                      return [...prev, { ...product, quantity: 1 }];
                    }
                  });
                }}
              >
                Sepete Ekle
              </button>
            </motion.div>
          </motion.div>
        </Link>
      ));

  return urunListesi();
}

export default ProductCard;
