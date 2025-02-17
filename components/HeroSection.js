// components/HeroSection.js
"use client";

const HeroSection = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-[960px] mx-auto">
        {/* Hero image with fixed height */}
        <div className="w-full h-64 md:h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://cdn.usegalileo.ai/sdxl10/c774466d-96df-494f-8300-f10d9907d262.png"
            alt="Cooling Technology"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Hero text content placed below the image */}
        <div className="mt-8 text-center md:text-left">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            The Future of Cooling Technology
          </h1>
          <p className="text-white text-sm md:text-base mt-4">
            Our innovative cooling solutions are designed to optimize
            performance, reduce energy consumption, and maximize uptime.
          </p>
          <div className="mt-6">
            <button className="flex items-center justify-center rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold md:h-12 md:px-5 md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
