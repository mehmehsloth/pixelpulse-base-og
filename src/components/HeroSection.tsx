import React from "react";
import GenerationBox from "./GenerationBox";
import SuggestionButton from "./SuggestionButton";

const HeroSection = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="w-[62%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col self-center mt-52 max-w-full w-[651px] max-md:mt-10">
            <div className="w-full max-md:max-w-full">
              <div className="flex relative flex-col justify-center px-2 w-full text-3xl font-light tracking-normal text-center text-neutral-800 max-md:max-w-full">
                <div className="flex z-0 flex-col justify-center items-center w-full max-md:max-w-full">
                  <h2 className="max-md:max-w-full">
                    Generate Anything Edit In Seconds
                  </h2>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70873fe5333b401ab4d009e8e9a58759c276364?placeholderIfAbsent=true"
                  className="object-contain absolute z-0 w-10 aspect-[1.03] h-[39px] right-[305px] rounded-[78px] top-[-58px]"
                  alt="Decorative element"
                  aria-hidden="true"
                />
              </div>
              <GenerationBox />
            </div>
            <div className="flex flex-wrap gap-2.5 items-center self-center mt-9 text-sm font-medium leading-loose text-center text-stone-500 max-md:max-w-full">
              <div className="flex gap-2 items-center self-stretch my-auto text-orange-500 bg-orange-50">
                <SuggestionButton
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a19a01a59026db27bafa35b0e47e9a130f642b1d?placeholderIfAbsent=true"
                  text="Generate Florence Art"
                  highlighted={true}
                />
              </div>
              <div className="flex gap-2 items-center self-stretch my-auto">
                <SuggestionButton
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e8e22b4efc5309d254716ae311255bbd5c744004?placeholderIfAbsent=true"
                  text="Generate Social Media post"
                  highlighted={false}
                />
              </div>
              <div className="flex gap-2 items-center self-stretch my-auto">
                <SuggestionButton
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b753d6a22823104ca9a8b5d23f0da01a88ef320e?placeholderIfAbsent=true"
                  text="Generate Minecraft"
                  highlighted={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-5 w-[38%] max-md:ml-0 max-md:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f16ebaaa1f75e0cc4cc13e8de9d39de572f1e31f?placeholderIfAbsent=true"
          className="object-contain grow mt-1.5 w-full aspect-[0.66] max-md:max-w-full"
          alt="AI generated image example"
        />
      </div>
    </section>
  );
};

export default HeroSection;
