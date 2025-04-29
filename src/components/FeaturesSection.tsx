import React from "react";
import FeatureCard from "./FeatureCard";

export const FeaturesSection = () => {
  return (
    <section
      className="flex overflow-hidden flex-col justify-center py-24 pr-24 pl-28 w-full bg-white max-md:px-5 max-md:max-w-full"
      aria-labelledby="features-heading"
    >
      <div className="flex flex-col max-w-full w-[1230px]">
        <div className="flex flex-col items-center self-center max-md:max-w-full">
          <div className="flex gap-2 items-center text-sm tracking-widest leading-none text-orange-500 uppercase whitespace-nowrap">
            <span className="self-stretch my-auto w-2.5">[</span>
            <span className="self-stretch my-auto">Features</span>
            <span className="self-stretch my-auto w-2.5">]</span>
          </div>
          <h2
            id="features-heading"
            className="mt-3.5 text-4xl font-light tracking-normal text-center text-neutral-800 max-md:max-w-full"
          >
            Bring your imagination to life <br />
            with text, image, or video
          </h2>
        </div>
        <div className="flex flex-col justify-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="overflow-hidden w-full bg-white rounded-2xl border border-solid border-stone-200 border-opacity-30 max-md:max-w-full">
            <div className="flex relative flex-col justify-center items-center px-20 py-56 w-full min-h-[600px] max-md:px-5 max-md:py-24 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bba14f5ed05dddcc8c06ae599315e33583f6956?placeholderIfAbsent=true"
                className="object-cover absolute inset-0 size-full"
                alt="AI generated image example"
              />
              <div className="relative p-5 -mb-11 max-w-full rounded-xl border border-solid bg-white bg-opacity-0 border-white border-opacity-20 shadow-[0px_2px_4px_rgba(25,33,61,0.08)] w-[657px] max-md:mb-2.5">
                <p className="text-sm tracking-wide leading-5 text-white max-md:max-w-full">
                  "A vertical scene where Minecraft Steve is building a Mona
                  Lisa portrait on a giant wall using pixelated blocks. He holds
                  one block at a time, calmly placing it with each soft click.
                  The background shows a half-finished mosaic in painterly
                  Minecraft style."
                </p>
                <div className="flex flex-wrap gap-10 justify-between items-center mt-5 w-full max-md:max-w-full">
                  <div className="flex gap-4 items-center self-stretch my-auto text-sm font-medium leading-none text-center text-white">
                    <div className="flex gap-1.5 items-center self-stretch my-auto">
                      <span className="self-stretch my-auto">ChatGpt 4.0</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa3889949a9acc03fa83a8c80189b732221e000f?placeholderIfAbsent=true"
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4717e15f75a0599038229a094b171d36ad1e51a3?placeholderIfAbsent=true"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                          alt="Format icon"
                        />
                      </button>
                      <button aria-label="Add attachment">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24ffd6d59a019b0fdc5297686f4ca89b3144a668?placeholderIfAbsent=true"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                          alt="Attachment icon"
                        />
                      </button>
                      <button aria-label="Add emoji">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c667813fb40246f1a0c068f73ca8ddedd03424b5?placeholderIfAbsent=true"
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5afbfb1ebc89cb08ddd2db0eaf89337bf4d3496?placeholderIfAbsent=true"
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
          <div className="flex flex-wrap gap-5 items-start self-center mt-10 max-md:max-w-full">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/107f1a86afb124a95221799b47b38b48f95fec93?placeholderIfAbsent=true"
              title="Generate Images"
              description="Using out Ai you can generate images based on your brand requirements."
              highlighted={true}
            />
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e1b19f7b101846caba132695b4f4cfa7f115b4?placeholderIfAbsent=true"
              title="Edit The Images"
              description="After Generating you can edit the images according to your needs and requirments"
              highlighted={false}
            />
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5af5df01a4d6e0308cf3bd48060f9be51421e89f?placeholderIfAbsent=true"
              title="Add Text of your choice"
              description="Ai with text seams impossible add text and ship your carousel post in one go"
              highlighted={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
