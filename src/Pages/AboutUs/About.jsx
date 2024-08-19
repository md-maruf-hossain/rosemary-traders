import React from "react";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-10 w-6/6 lg:w-5/6 text-center">
        <p className="text-4xl uppercase font-medium mb-2">About Us</p>
        <p className="">
          At Rosemary Traders, we believe in the beauty of diversity. Our mission is to bring the richness of global markets to your doorstep. Whether it's the aromatic allure of exotic spices, the
          vibrancy of international fashion, or the purity of organic seeds, we source only the best products from around the world.
        </p>
      </div>
      <div className="p-10 w-6/6 lg:w-5/6 text-center">
        <p className="text-4xl uppercase font-medium mb-2">Our Mission</p>
        <p className="">“Global Quality, Local Trust.” We're committed to delivering unparalleled products that embody quality, authenticity, and sustainability.</p>
      </div>
      <div className="video-container">
        <iframe
          className="py-10"
          src="https://drive.google.com/file/d/1A1ls9KhvpW2HmiLE6lnLhSxWWLOkFl-y/preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
