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
    // Add more testimonials as needed
  ];

  return (
    <section  id="testimonial" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">TESTIMONIALS</h2>
            <p className="text-lg">
              I am proud of my results. I bring solutions to make life easier
              for our customers.
            </p>
          </div>
          <div className="md:flex mb-8 md:space-x-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">236</h3>
              <p>Awards Won</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">236</h3>
              <p>Awards Won</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">236</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-lg">{testimonial.message}</p>
              <p className="mt-4 text-gray-400">
                - {testimonial.name}, {testimonial.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
