// components/HeroSection.js
const HeroSection = () => {
  return (
    <section className="px-4 md:px-40 flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] w-full">
        <div className="flex flex-col gap-6 px-4 py-10 md:flex-row">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:w-1/2"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/c774466d-96df-494f-8300-f10d9907d262.png")',
            }}
          ></div>
          <div className="flex flex-col gap-6 justify-center md:w-1/2">
            <h1 className="text-white text-4xl font-black leading-tight md:text-5xl">
              The future of cooling technology
            </h1>
            <p className="text-white text-sm md:text-base">
              Our innovative cooling solutions are designed to optimize
              performance, reduce energy consumption, and maximize uptime. With
              our advanced technology, you can achieve more efficient cooling,
              lower costs, and a smaller environmental footprint.
            </p>
            <button className="flex w-full max-w-xs items-center justify-center rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold md:h-12 md:px-5 md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
