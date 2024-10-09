import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  const { cart } = useContext(MyContext);
  const cartCount = cart.length;
  return (
    <div className="cartDiv">
      <div style={{ position: "relative", display: "inline-block" }}>
        <button>
          <FontAwesomeIcon
            icon={faHeart}
            className="navFavourite"
            style={{ fontSize: "13px" }}
          />{" "}
        </button>
        <Link to="/cart">
          <button className="cartButton" style={{ fontSize: "26px" }}>
            <FontAwesomeIcon icon={faCartArrowDown} />{" "}
          </button>
        </Link>

        {cartCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-17px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "5px 10px",
              fontSize: "12px",
            }}
          >
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartIcon;
