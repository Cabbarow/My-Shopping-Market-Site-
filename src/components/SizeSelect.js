import React, { useContext } from "react";
import { SelectButton } from "primereact/selectbutton";
import { MyContext } from "../contexts/AppContext";

function SizeSelect() {
  const { selectedSize, setSelectedSize } = useContext(MyContext);
  const items = [
    { name: "Clothes", value: 1 },
    { name: "Electronics", value: 2 },
    { name: "Furniture", value: 3 },
    { name: "Shoes", value: 4 },
    { name: "Miscellaneous", value: 5 },
    { name: "Tüm Ürünler", value: 6 },
  ];
  const handleSizeChange = (event) => {
    event.value === "Tüm Ürünler"
      ? setSelectedSize("")
      : setSelectedSize(event.value);
    console.log(event.value);
  };

  return (
    <div className="sizeSelect">
      <SelectButton
        className="sizeBoxes"
        value={selectedSize}
        onChange={handleSizeChange}
        optionLabel="name"
        optionValue="name"
        options={items}
      />
    </div>
  );
}

export default SizeSelect;
