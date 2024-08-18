import React, { useEffect, useState } from "react";

const WhyChooseUs = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/why-choose-us.json")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div class="container my-4 p-8 px-6 mx-auto ">
      <div class="mb-16 text-center">
        <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-green-600 sm:text-4xl">Why Choose Us</p>
      </div>
      <div class="flex flex-wrap my-16">
        {comments.map((comment) => (
          <div key={comment.id} class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
            {/* /dasddadad */}
            <div class="flex items-center mb-6">
              <svg width="20" height="20" fill="currentColor" class="w-6 h-6 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">{comment.title}</div>
            </div>
            <p class="leading-loose text-gray-500 text-md">{comment.description}</p>
            {/* dsadad */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
