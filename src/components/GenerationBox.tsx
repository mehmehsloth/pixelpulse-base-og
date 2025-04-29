import React from "react";

export const GenerationBox = () => {
  return (
    <div className="mt-6 w-full max-md:max-w-full">
      <div className="p-5 w-full bg-white rounded-xl shadow-sm max-md:max-w-full">
        <p className="text-sm tracking-wide leading-5 text-stone-400 max-md:max-w-full">
          Write down what you for your brand social Media
        </p>
        <hr className="mt-4 w-full min-h-0 border border-solid border-zinc-100 max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto text-sm font-medium tracking-normal leading-none text-center text-neutral-900">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <span className="self-stretch my-auto">ChatGpt 4.0</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a65a5a9c64fca7b9dbc41636b6c48b737421c85?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                alt="ChatGPT icon"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center self-stretch my-auto min-w-60 w-[344px]">
            <div className="flex gap-3 items-center self-stretch my-auto">
              <button aria-label="Format text">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c304de8764d982edabc2607fd2530d43dc10aa11?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  alt="Format icon"
                />
              </button>
              <button aria-label="Add attachment">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc06b4146c9f2bfebd167d60e49da94d6c85f300?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  alt="Attachment icon"
                />
              </button>
              <button aria-label="Add emoji">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2d0bed07ec563641b6d282f89371a7f07656c3?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  alt="Emoji icon"
                />
              </button>
            </div>
            <button
              className="flex gap-1 items-center self-stretch p-1.5 my-auto text-xs font-medium leading-tight text-center text-white bg-orange-500 rounded-2xl shadow-sm"
              aria-label="Generate Now"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73681c36cee47323e8c12e2227868ce9759c2624?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Generate icon"
              />
              <span className="self-stretch my-auto">Generate Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationBox;
