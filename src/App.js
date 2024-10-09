import "./App.css";
import ProductCard from "./components/ProductCard";
import ShowMore from "./components/ShowMore";
import SizeSelect from "./components/SizeSelect";

function App() {
  return (
    <div className="App">
      <div className="pageDiv">
        <div className="sizeDiv">
          <SizeSelect />
        </div>
        <div className="cardContainerTop">
          <ProductCard />
          <ShowMore />
        </div>
      </div>
    </div>
  );
}

export default App;
