import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-1 w-full bg-white rounded-xl max-md:max-w-full">
      <div className="px-10 py-12 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
        <div className="w-full font-medium max-md:max-w-full">
          <h2 className="text-2xl tracking-normal leading-none text-orange-500">
            Pixel Pluszes
          </h2>
          <nav className="mt-8 w-full text-base leading-relaxed whitespace-nowrap text-zinc-600 max-md:max-w-full">
            <div className="flex gap-8 items-start w-full max-md:max-w-full">
              <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
                <ul className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
                  <li className="flex gap-2 items-center self-stretch my-auto">
                    <a
                      href="#"
                      className="overflow-hidden gap-2 self-stretch my-auto"
                    >
                      Homepage
                    </a>
                  </li>
                  <li className="flex gap-2 items-center self-stretch my-auto">
                    <a
                      href="#"
                      className="overflow-hidden gap-2 self-stretch my-auto"
                    >
                      Features
                    </a>
                  </li>
                  <li className="flex gap-2 items-center self-stretch my-auto">
                    <a
                      href="#"
                      className="overflow-hidden gap-2 self-stretch my-auto"
                    >
                      Templates
                    </a>
                  </li>
                  <li className="flex gap-2 items-center self-stretch my-auto">
                    <a
                      href="#"
                      className="overflow-hidden gap-2 self-stretch my-auto"
                    >
                      Usecase
                    </a>
                  </li>
                  <li className="flex gap-2 items-center self-stretch my-auto">
                    <a
                      href="#"
                      className="overflow-hidden gap-2 self-stretch my-auto"
                    >
                      Help
                    </a>
                  </li>
                  <li className="flex gap-2 items-center self-stretch my-auto">
                    <a
                      href="#"
                      className="overflow-hidden gap-2 self-stretch my-auto"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <hr className="mt-10 w-full bg-gray-100 border border-gray-100 border-solid min-h-px max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-10 w-full max-md:max-w-full">
          <p className="self-stretch my-auto text-sm leading-5 text-gray-500 max-md:max-w-full">
            © Pixel Pluszes 2025 – Go to market with unique data and the
            ability to act on it . ,zq.
          </p>
          <div className="flex gap-6 items-center self-stretch my-auto">
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1dce7849a39d5b1b4aa2929ec7d546d9b79b53f?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Twitter icon"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a88df35c0583df855d2776520a216e4ad91186?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Facebook icon"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f309432b863a5d5f0132377bd7c03b5e622aa3ca?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Instagram icon"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/77bde3f49336d903a71ba572a41b29555263f942?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="LinkedIn icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
