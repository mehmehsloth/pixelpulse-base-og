import React from "react";

export const TemplatesSection = () => {
  return (
    <section
      className="flex overflow-hidden flex-col justify-center items-start px-28 py-20 w-full bg-white max-md:px-5 max-md:max-w-full"
      aria-labelledby="templates-heading"
    >
      <div className="flex flex-col items-center max-w-full w-[1200px]">
        <div className="flex flex-col items-center max-w-full w-[1058px]">
          <div className="flex gap-2 items-center text-sm tracking-widest leading-none text-orange-500 uppercase whitespace-nowrap">
            <span className="self-stretch my-auto w-2.5">[</span>
            <span className="self-stretch my-auto">Templates</span>
            <span className="self-stretch my-auto w-2.5">]</span>
          </div>
          <h2
            id="templates-heading"
            className="mt-5 text-4xl font-light tracking-normal text-center text-neutral-800 max-md:max-w-full"
          >
            More Than 300+ Templates that <br />
            you can use for your brand
          </h2>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d71f26d32cec1ea8a493446eb6ff7b4028974d0?placeholderIfAbsent=true"
        className="object-contain w-full aspect-[1.87] max-md:max-w-full"
        alt="Template examples grid"
      />
    </section>
  );
};

export default TemplatesSection;
