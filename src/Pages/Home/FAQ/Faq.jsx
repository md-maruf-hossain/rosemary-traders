import React, { useEffect, useState } from "react";

const Faq = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
      <h2 className="text-2xl font-semibold py-5 sm:text-4xl text-center text-green-600">Frequently Asked Questions</h2>
      <section className="w-full divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200">
        {comments.map((comment) => (
          <details key={comment.key} className="group p-4 text-green-500">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              {comment.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac13 desc-ac13"
              >
                <title id="title-ac13">Open icon</title>
                <desc id="desc-ac13">icon that represents the state of the summary</desc>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">{comment.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
};

export default Faq;
