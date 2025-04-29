import React from "react";

export const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full font-medium max-md:max-w-full">
      <h1 className="self-start p-6 text-2xl tracking-normal leading-none text-orange-500 max-md:px-5">
        Pixel Pluszes
      </h1>
      <div className="flex gap-2 justify-center items-center p-6 text-center max-md:px-5">
        <div className="flex gap-2 items-center self-stretch my-auto text-sm leading-loose text-neutral-900">
          <button
            className="flex gap-1.5 justify-center items-center self-stretch px-2.5 py-1.5 my-auto bg-white rounded-md border border-gray-200 border-solid shadow-[0px_1px_0px_rgba(0,0,0,0.08)]"
            aria-label="Sign up"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8db2a8807b56b216e47b74179a080ec8779b27b4?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
              alt="Sign up icon"
            />
            <span className="self-stretch my-auto">Sign up</span>
          </button>
        </div>
        <button
          className="flex gap-1 items-center self-stretch p-1.5 my-auto text-xs leading-tight text-white bg-orange-500 rounded-2xl min-h-8"
          aria-label="Login Now"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ab86fc68a3c73ea43546cb33085b8e497f16a1?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt="Login icon"
          />
          <span className="self-stretch my-auto">Login Now</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
