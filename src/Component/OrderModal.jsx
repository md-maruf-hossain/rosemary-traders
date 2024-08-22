import React, { useState } from "react";

function OrderModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button
        onClick={openModal}
        className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-green-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative w-96">
            <h2 className="text-xl mb-4">This is a Modal</h2>
            <p className="mb-4">Here is some content for the modal.</p>

            {/* First Close Button */}
            <button
              onClick={closeModal}
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-green-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              Close Modal
            </button>

            {/* Second Close Button */}
            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderModal;
