import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navOptions">
        <Link to="/">
          <button className=" hover:bg-indigo-600 hover:bg-opacity-25  font-mono text-white text-lg rounded-md p-2 h-10 flex justify-center items-center">
            Ana Sayfa
          </button>
        </Link>
        <Link to="/comminication">
          <button className=" hover:bg-indigo-600 hover:bg-opacity-25 font-mono text-white text-lg rounded-md p-2 h-10 flex justify-center items-center">
            İletişim
          </button>
        </Link>
        <Link to="/aboutus">
          <button className=" hover:bg-indigo-600 hover:bg-opacity-25 font-mono text-white text-lg rounded-md p-2 h-10 flex justify-center items-center">
            Hakkımızda
          </button>
        </Link>
      </div>
      <div className="cargoLine-p  text-slate-300 font-mono ">
        Ceylin Bazaar
      </div>
    </>
  );
}

export default Navbar;
