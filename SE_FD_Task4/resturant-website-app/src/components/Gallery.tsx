import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Elegant dining room with warm ambiance",
    },
    {
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Private dining area for special occasions",
    },
    {
      url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Our expert chefs at work",
    },
    {
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Artfully plated signature dishes",
    },
    {
      url: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Bar area with premium spirits",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-gray-300 max-w-3xl mx-auto">Gallery</h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            Step inside our world of culinary excellence and elegant atmosphere
          </p>
        </div>
        {/* Main Carousel */}
        <div className="relative mb-8">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
            <img
              src={images[currentSlide].url}
              alt={images[currentSlide].caption}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg font-medium">
                {images[currentSlide].caption}
              </p>
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentSlide === index
                  ? "border-amber-500"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-amber-500"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
