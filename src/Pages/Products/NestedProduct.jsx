import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const NestedProduct = () => {
  const { itemsId } = useParams();

  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    fetch(`/product.json`)
      .then((response) => response.json())
      .then((data) => {
        data.map((selectedProducts) => {
          {
            selectedProducts.items.map((selectedProduct) => {
              if (selectedProduct?.itemsId === itemsId) {
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
      <h1 className="text-2xl mt-10 pb-5 uppercase font-bold text-green-600 mb-12">{productDetails.itemsName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 p-5 container">
        {productDetails.sub_items.map((item) => (
          <>
            {/*<!-- Component: E-commerce card --> */}
            <div key={item.subItemsId} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              {/*  <!-- Image --> */}
              <figure>
                <img src={item.subItemsImage} alt="card image" className="aspect-video w-full" />
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">{item.subItemsName}</h3>
                </header>
              </div>
              {/*  <!-- Action base sized basic button --> */}
              <Link className="flex justify-end p-6 pt-0">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-green-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                  <span>Order now!</span>
                </button>
              </Link>
            </div>
            {/*<!-- End E-commerce card --> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default NestedProduct;
