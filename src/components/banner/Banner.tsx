import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      <div className="container mx-auto px-10 py-4 md:py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover a World of <span className="text-yellow-400">Books</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your next favorite book is just a click away. Dive into endless
            stories and adventures.
          </p>
          <div>
            <a
              href="#"
              className="px-8 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              Explore Now
            </a>
            <a
              href="#"
              className="ml-4 px-8 py-3 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
          <Image
            src="/bookBanner.jpg"
            alt="Books"
            width={400} // Adjusted width for better clarity
            height={400} // Adjusted height to maintain aspect ratio
            className="rounded-lg shadow-lg w-3/4 md:w-full object-cover" // Ensure object-cover to handle scaling
            quality={100} // Increase image quality
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-400 opacity-20 rounded-full blur-xl transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-800 opacity-20 rounded-full blur-xl transform translate-x-16 translate-y-16"></div>
    </section>
  );
}
