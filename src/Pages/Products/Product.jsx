import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderModal from "../../Component/OrderModal";

const Product = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        {
          data.map((item) => {
            if (item.id === id) {
              setProductDetails(item);
            }
          });
        }
      })
      .catch((error) => console.error("Error fetching category:", error));
  }, [id]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }
  // const i = productDetails?.items.map((item) => console.log(item));
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mt-10 pb-5 uppercase font-bold mb-12 text-green-600">{productDetails.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 p-5 container">
        {productDetails?.items.map((item) => (
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
              {item?.sub_items === undefined ? (
                <div className="flex flex-col justify-end p-6 pt-0">
                  <OrderModal item={item} />
                </div>
              ) : (
                <Link to={`/products/${id}/${item.id}`} className="flex justify-end p-6 pt-0">
                  <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-green-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>See Products</span>
                  </button>
                </Link>
              )}
            </div>
            {/*<!-- End E-commerce card --> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Product;
