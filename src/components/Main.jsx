import React, { useState } from "react";
import { Minus, Plus } from "./icons/IconSvg";
import { imagesTumbnail as thumbnail, imagesTitle } from "./image";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Main({addToCart,count,setCount,image,gallery,setGallery}) {
  
  
  const clickedImage = (index) => {
    const newImage = [...image];
    const findIndex = newImage[index];
    const filterImage = newImage.filter((img) => img === findIndex);

    setGallery(filterImage);
  };

  
  return (
    <div className="row flex justify-around  pt-16 px-10">
      <div className="images">
        <div className="image-title" style={{ width: "450px" }}>
          <img src={gallery || image[0]} style={{ borderRadius: "15px" }} />
        </div>
        <div className="image-controller flex justify-center items-end">
          {thumbnail.map((image, index) => {
            return (
              <img
                onClick={() => clickedImage(index)}
                key={index}
                src={image}
                style={{
                  borderRadius: "10px",
                  width: "100px",
                  margin: "20px 5px",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="content pl-20 pt-10">
        <p className="uppercase text-rose-500">Sneaker Company</p>
        <h1 className="text-4xl font-bold my-7" style={{ maxWidth: "350px" }}>
          Fall Limited Edition Sneakers
        </h1>
        <p style={{ maxWidth: "450px", marginBottom: "50px" }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p>
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>$125.00 </span>
          <span style={{ color: "red", padding: "5px", background: "yellow" }}>
            50%{" "}
          </span>
          <span
            style={{
              display: "block",
              margin: "20px 0",
              textDecoration: "line-through",
            }}
          >
            $250.00
          </span>
        </p>

        <div className="flex">
          <div
            style={{
              width: "150px",
              padding: "0px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              background: "gainsboro",
              borderRadius: "10px",
            }}
          >
            <span
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={count > 0 ? () => setCount(count - 1) : null}
            >
              <Minus />
            </span>
            <span>{count}</span>
            <span
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={count < 4 ? () => setCount(count + 1) : null}
            >
              <Plus />
            </span>
          </div>
          <button
            className="flex justify-center items-center ml-5 bg-red-500"
            onClick={()=>addToCart(count)}
            style={{
              paddingRight: "15px",
              borderRadius: "10px",
            }}
          >
            <AiOutlineShoppingCart
              style={{
                margin: "10px",
              }}
            />{" "}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
