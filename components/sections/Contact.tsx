// Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto flex items-center">
        {/* Left Column - Form */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <p className="text-lg mb-8">
            Feel free to reach out if you have any questions or opportunities.
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-4">
            <span className="font-semibold">Email:</span> your.email@example.com
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone:</span> +1 (555) 123-4567
          </p>
          <p className="mb-4">
            <span className="font-semibold">Location:</span> City, Country
          </p>
          {/* Add more contact information as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
