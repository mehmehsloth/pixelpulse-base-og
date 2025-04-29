import React from "react";
import CategoryButton from "./CategoryButton";

export const ExamplesSection = () => {
  return (
    <section
      className="flex overflow-hidden flex-col justify-center items-center px-28 py-24 w-full bg-white max-md:px-5 max-md:max-w-full"
      aria-labelledby="examples-heading"
    >
      <div className="max-w-full w-[1232px]">
        <div className="flex flex-col max-w-full w-[403px]">
          <div className="flex gap-2 items-center self-start text-sm tracking-widest leading-none text-orange-500 uppercase whitespace-nowrap">
            <span className="self-stretch my-auto w-2.5">[</span>
            <span className="self-stretch my-auto">Examples</span>
            <span className="self-stretch my-auto w-2.5">]</span>
          </div>
          <h2
            id="examples-heading"
            className="mt-8 text-4xl font-light tracking-normal text-neutral-800"
          >
            See the possibilities with some examples
          </h2>
        </div>
        <div className="overflow-hidden mt-12 w-full bg-orange-50 rounded-2xl max-md:mt-10">
          <div className="flex relative flex-col justify-center items-center px-20 py-52 w-full min-h-[570px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46524df4c416407e6f2acea7154e314287dd5cb8?placeholderIfAbsent=true"
              className="object-cover absolute inset-0 size-full"
              alt="AI generated example"
            />
            <div className="relative p-5 mb-0 max-w-full rounded-xl border border-solid bg-white bg-opacity-0 border-white border-opacity-20 shadow-[0px_2px_4px_rgba(25,33,61,0.08)] w-[657px] max-md:mb-2.5">
              <p className="text-sm tracking-wide leading-5 text-white max-md:max-w-full">
                "A vertical scene where Minecraft Steve is building a Mona Lisa
                portrait on a giant wall using pixelated blocks. He holds one
                block at a time, calmly placing it with each soft click. The
                background shows a half-finished mosaic in painterly Minecraft
                style."
              </p>
              <div className="flex flex-wrap gap-10 justify-between items-center mt-5 w-full max-md:max-w-full">
                <div className="flex gap-4 items-center self-stretch my-auto text-sm font-medium leading-none text-center text-white">
                  <div className="flex gap-1.5 items-center self-stretch my-auto">
                    <span className="self-stretch my-auto">ChatGpt 4.0</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/58313f5760a622ead8d8a9b8cae82961609abc20?placeholderIfAbsent=true"
                      className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                      alt="ChatGPT icon"
                      aria-hidden="true"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c573ddddee7edc7114f2f02f5430d7bc08dcd0f?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        alt="Attachment icon"
                      />
                    </button>
                    <button aria-label="Add emoji">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1048944f3b2d85cf800a2b739e0dc6c29cf439b?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        alt="Emoji icon"
                      />
                    </button>
                  </div>
                  <button
                    className="flex gap-1 items-center self-stretch p-1.5 my-auto text-xs font-medium leading-tight text-center text-white bg-orange-500 rounded-2xl"
                    aria-label="Generate Now"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1aaf06bd35905edba88d83be8b16e54f46e45d8?placeholderIfAbsent=true"
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                      alt="Generate icon"
                      aria-hidden="true"
                    />
                    <span className="self-stretch my-auto">Generate Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 justify-center items-start mt-8 text-sm tracking-widest leading-none text-center text-black uppercase max-md:max-w-full">
        <CategoryButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f4258793ac6ed1ea40f0f074dd4494aa8ed202?placeholderIfAbsent=true"
          text="Landscape"
          active={true}
        />
        <CategoryButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bfefac38bdc8c985d4b2a62c6cc246b8ccb423ac?placeholderIfAbsent=true"
          text="Social Media"
          active={false}
        />
        <CategoryButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1c77217826cbc8d1ff4ab597fe6a6696886f1513?placeholderIfAbsent=true"
          text="Product Images"
          active={false}
        />
        <CategoryButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6371493aaba8642afd8195c2b0b53619a8bc7a0b?placeholderIfAbsent=true"
          text="Artistic"
          active={false}
        />
      </div>
    </section>
  );
};

export default ExamplesSection;
