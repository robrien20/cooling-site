// components/UseCaseSection.js
const UseCaseSection = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold max-w-[720px]">
            Revolutionize your cooling strategy
          </h1>
          <p className="text-white text-sm md:text-base max-w-[720px]">
            Our cutting-edge cooling solutions are designed to meet the unique
            needs of modern data centers, office buildings, and commercial
            facilities. With our advanced technology, you can achieve better
            performance, higher efficiency, and a smaller environmental
            footprint.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/5a0d6eb3-d2a1-44db-9a98-f8be141cc9c8.png")',
              }}
            ></div>
            <p className="text-white text-base font-medium">Data Centers</p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/efa9e262-9c00-4bcb-ada5-63dfeb070d6f.png")',
              }}
            ></div>
            <p className="text-white text-base font-medium">Office Buildings</p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/7b354de8-26b5-40f8-a349-90c85acd0c1c.png")',
              }}
            ></div>
            <p className="text-white text-base font-medium">
              Commercial Facilities
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/ee557b38-81a2-41af-ab86-bbc9ce60dbe3.png")',
              }}
            ></div>
            <p className="text-white text-base font-medium">
              Industrial Applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
