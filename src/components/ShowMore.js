import React, { useContext } from "react";
import { MyContext } from "../contexts/AppContext";

const ShowMore = () => {
  const { setPageSize, products, pageSize } = useContext(MyContext);

  const showMore = () => {
    setPageSize((size) => size + 8);
  };

  return pageSize >= products.length ? null : (
    <div className="showMore">
      <button onClick={showMore}>Show More...</button>
    </div>
  );
};

export default ShowMore;
