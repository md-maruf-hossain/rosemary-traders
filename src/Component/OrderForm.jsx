import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const OrderForm = ({ item, closeModal }) => {
  const { id, name: productName } = item;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    productName: productName, // New field for Product Name
    productDescription: "",
    quantity: "1", // Default value for quantity
    deliveryDate: "",
    shippingMethod: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    if (/^\d{0,11}$/.test(phoneValue)) {
      // Allow only up to 11 digits (0-9)
      setFormData({
        ...formData,
        phone: phoneValue,
      });
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day

    if (selectedDate >= today) {
      setFormData({
        ...formData,
        deliveryDate: e.target.value,
      });
    }
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    emailjs.sendForm("service_iewh2qy", "template_pda4cny", form.current, "JKo6b2oBPjqdNMbh6").then(
      () => {
        toast.success("Order has been sent successfully");
        // Optionally reset the form
        setFormData({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          productName: formData.productName,
          productDescription: formData.productDescription,
          quantity: formData.quantity,
          deliveryDate: formData.deliveryDate,
          shippingMethod: formData.shippingMethod,
        });
        // Optionally close the modal
        closeModal();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
    form.reset();
  };

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-6">Price Quote Form</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Company Name (if applicable)</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your company name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter the product name"
              readOnly
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <label className="block text-gray-700 font-bold mb-2">Product/Service Description</label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe the product or service"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter the quantity"
              min="1" // Minimum quantity is 1
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Deadline/Delivery Date</label>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleDateChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="md:col-span-2 mb-4">
            <label className="block text-gray-700 font-bold mb-2">Shipping Method (if applicable)</label>
            <input
              type="text"
              name="shippingMethod"
              value={formData.shippingMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter shipping method"
            />
          </div>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
