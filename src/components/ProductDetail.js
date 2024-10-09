import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../contexts/AppContext";
import { ReactSlider } from "react-slider-image-js";
import "react-slider-image-js/dist/index.css";
import { Flex, Rate } from "antd";

function ProductDetail() {
  const { productDetail, setProductDetail } = useContext(MyContext);

  const [value, setValue] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  useEffect(() => {
    const savedDetail = localStorage.getItem("detail");
    if (savedDetail) {
      setProductDetail(JSON.parse(savedDetail));
    }
  }, [setProductDetail]);

  //   useEffect(() => {
  //     localStorage.setItem("detail", JSON.stringify(productDetail));
  //   }, [productDetail]);

  console.log(productDetail);

  return (
    productDetail.id && (
      <div className="cartDiv h-96 w-4/5 ml-24">
        <div className=" flex m-4">
          <div className="border-4 border-solid border-gray-900 border-opacity-100 h-97 mt-4 ml-4 mb-4 mr-4 rounded">
            <ReactSlider
              images={productDetail.images.map((image) => ({
                src: image,
              }))}
              slideAnimationDuration={"1000ms"}
              objectFit={"cover"}
              isAutoSlide={false}
              autoSlideDuration={5000}
            />
          </div>
          <div className="p-3 ml-10 grid">
            <p className="product-name-detail font-bold">
              {productDetail.title}
            </p>
            <p className=" font-bold pt-2 text-gray-600">
              {productDetail.description}
            </p>
            <h6 className="text-slate-700">
              Category: {productDetail.category.name}
            </h6>

            <div className="flex flex-row">
              <select name="sizes" className="bg-slate-300 mt-3 mr-3 mb-3 w-24">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select
                name="color"
                defaultValue="Beyaz"
                className="bg-slate-300 m-3 w-24"
              >
                <option value="Yeşil">Yeşil</option>
                <option value="Sarı">Sarı</option>
                <option value="Lacivert">Lacivert</option>
                <option value="Beyaz">Beyaz</option>
                <option value="Mavi">Mavi</option>
              </select>
            </div>

            <Flex vertical>
              <p className="mb-1 mt-3">Değerlendirme</p>
              <Rate
                className="border-2 p-1 rounded-md w-fit border-slate-500 border-solid border-opacity-100"
                tooltips={desc}
                onChange={setValue}
                value={value}
              />
            </Flex>
            <div className="product-price flex gap-2 justify-start text-lg">
              <p className="mt-3">
                {productDetail.price.toFixed(2)} {"TL"}{" "}
                <span className="text-xs text-gray-600">(KDV Dahil)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
