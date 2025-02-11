// components/BenefitsSection.js
const BenefitsSection = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 max-w-[960px] mx-auto">
        {/* Card 1: Unmatched Performance */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/ecf279c9-a276-4ac4-bb6c-32c56f0ee31f.png")',
            }}
          ></div>
          <div>
            <p className="text-white text-base font-medium">
              Unmatched Performance
            </p>
            <p className="text-[#93adc8] text-sm">
              Our innovative cooling technology is designed to deliver superior
              performance, ensuring that your critical systems operate at peak
              efficiency.
            </p>
            <p className="text-[#93adc8] text-sm">
              Our innovative cooling technology is designed to deliver superior
              performance, ensuring that your critical systems operate at peak
              efficiency.
            </p>
          </div>
        </div>
        {/* Card 2: Energy Efficiency */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/58128ced-3af6-4032-a1bd-505b6515e826.png")',
            }}
          ></div>
          <div>
            <p className="text-white text-base font-medium">
              Energy Efficiency
            </p>
            <p className="text-[#93adc8] text-sm">
              Our advanced cooling solutions are engineered to minimize energy
              consumption, helping you reduce costs and achieve environmental
              sustainability.
            </p>
            <p className="text-[#93adc8] text-sm">
              Our advanced cooling solutions are engineered to minimize energy
              consumption, helping you reduce costs and achieve environmental
              sustainability.
            </p>
          </div>
        </div>
        {/* Card 3: Environmental Responsibility */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/3aa625e0-0635-45af-a4e3-b1d36c10a26d.png")',
            }}
          ></div>
          <div>
            <p className="text-white text-base font-medium">
              Environmental Responsibility
            </p>
            <p className="text-[#93adc8] text-sm">
              We are committed to environmental responsibility, developing
              cooling technologies that help reduce the carbon footprint of data
              centers and other facilities.
            </p>
            <p className="text-[#93adc8] text-sm">
              We are committed to environmental responsibility, developing
              cooling technologies that help reduce the carbon footprint of data
              centers and other facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
