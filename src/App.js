import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Collection from "./components/pages/Collection";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import { imagesTitle } from "./components/image";

function App() {
  const [image, setImage] = useState(imagesTitle);
  const [gallery, setGallery] = useState();
  const [count, setCount] = useState(0);

  const addToCart = (count) => {
    console.log("add")
    let sum = count*125
    return sum
  };
  return (
    <div className="container mx-auto px-40">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              image={image}
              gallery={gallery}
              setGallery={setGallery}
              count={count}
              setCount={setCount}
              addToCart={() => addToCart(count)}
            />
          }
        />
        <Route path="collections" element={<Collection />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="shop"
          element={
            <Shop
              count={count}
              addToCart={()=>addToCart(count)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
