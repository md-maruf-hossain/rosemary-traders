import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"; // Import react-hot-toast

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_iewh2qy", "template_jtpx5hh", form.current, "JKo6b2oBPjqdNMbh6").then(
      () => {
        toast.success("Your message has been sent");
        setFormData({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 contrast-75 opacity-60"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2598197517464!2d90.44009957594155!3d23.702413990615767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9da85628617%3A0x6cc3f76ab4485e9e!2sRahman%20Plaza!5e0!3m2!1sen!2sbd!4v1724014874263!5m2!1sen!2sbd"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 lg:pr-10 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">280, Rahman Plaza, Dania, Jatrabari, Dhaka-1236</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:rosemary.traders.bd@gmail.com" className="text-green-500 leading-relaxed">
                rosemary.traders.bd@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+880 1944 448 999</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-green-600 text-4xl mb-1 title-font font-extrabold">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">For more update</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                onChange={handleChange}
                id="message"
                name="message"
                value={formData.message}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Send us your opinion
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
