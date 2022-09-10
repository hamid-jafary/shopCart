import React from "react";
import { Link } from "react-router-dom";
import image from "../images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
    <>
    <div className="navbar flex justify-between items-center py-5">
      <div className="flex items-center">
        <h1 className="pr-20"><Link to="/" className="text-3xl font-bold">sneakers</Link></h1>
        <ul className="list-none flex text-slate-500">
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/about">About</Link></li>
          
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="flex items-center">
      <Link to="/shop">
        <AiOutlineShoppingCart
          className="text-slate-500"
          style={{ fontSize: "25px", marginRight: "30px",cursor:"pointer" }}
        />

      </Link>

        <img src={image} alt="" className="w-12 h-12" style={{cursor:"pointer" }} />
      </div>
    </div>
    <hr />
    </>
  );
}

export default Navbar;
