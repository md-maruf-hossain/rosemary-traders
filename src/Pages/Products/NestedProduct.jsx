import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderModal from "../../Component/OrderModal";

const NestedProduct = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    fetch(`/product.json`)
      .then((response) => response.json())
      .then((data) => {
        data.map((selectedProducts) => {
          {
            selectedProducts.items.map((selectedProduct) => {
              if (selectedProduct?.id === id) {
                setProductDetails(selectedProduct);
              }
            });
          }
        });
      })
      .catch((error) => console.error("Error fetching category:", error));
  }, []);

  if (!productDetails) {
    return <p>Loading...</p>;
  }
  console.log(productDetails, "marufff");
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-10 pb-5 uppercase font-bold text-green-600 mb-12">{productDetails.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 p-5 container">
        {productDetails.sub_items.map((item) => (
          <>
            {/*<!-- Component: E-commerce card --> */}
            <div key={item.id} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              {/*  <!-- Image --> */}
              <figure>
                <img src={item.image} alt="card image" className="aspect-video w-full" />
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">{item.name}</h3>
                </header>
              </div>
              {/*  <!-- Action base sized basic button --> */}
              <div className="flex flex-col justify-end p-6 pt-0">
                <OrderModal item={item} />
              </div>
            </div>
            {/*<!-- End E-commerce card --> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default NestedProduct;
