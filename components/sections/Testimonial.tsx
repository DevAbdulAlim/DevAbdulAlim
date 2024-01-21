import React from "react";

export default function Testimonial() {
  const testimonials = [
    {
      message: "I had a great experience working with this team.",
      name: "John Doe",
      designation: "CEO",
    },
    {
      message: "Their dedication to quality is truly impressive.",
      name: "Jane Smith",
      designation: "COO",
    },
    {
      message: "Working with this team was a pleasure. I would like to...",
      name: "Bob Johnson",
      designation: "CTO",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonial" className="px-3 py-20 text-white bg-gray-700">
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:justify-between">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold text-center md:text-left">
              TESTIMONIALS
            </h2>
            <p className="text-lg text-center md:text-left">
              I am proud of my results. I bring solutions to make life easier
              for our customers.
            </p>
          </div>
          <div className="mb-8 md:flex md:space-x-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">10</h3>
              <p>Awards Won</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">80+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">55</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-900"
            >
              <p className="mb-4 text-lg">{testimonial.message}</p>
              <div className="flex">
                <img
                  className="w-10 h-10 mr-2 rounded-full"
                  src={`https://i.pravatar.cc/150?img=${index + 51}`}
                  alt={testimonial.name}
                />

                <p className="mt-2 text-gray-400">
                  - {testimonial.name}, {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
