import React, { useState } from "react";
import { ProductData } from "../constants/productData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Video from "../components/Video";
const Products = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  return (
    <div className="relative w-full justify-between lg:px-10 flex flex-row flex-wrap mx-auto g">
      <Video />
      {ProductData.map((products, index) => {
        return (
          <ProductCard
            key={products.id}
            data={products}
            setIsModal={setIsModal}
            setCurrentProduct={setCurrentProduct}
          />
        );
      })}
      {isModal && (
        <ProductModal onClose={setIsModal} currentProduct={currentProduct} />
      )}
    </div>
  );
};

export default Products;
