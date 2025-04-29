import React from "react";

export const EditorSidebar = () => {
  return (
    <aside className="overflow-hidden mx-auto w-full bg-white rounded-xl border-b border-zinc-100 shadow-[0px_0px_4px_rgba(0,0,0,0.09)] max-md:mt-10">
      <div className="overflow-hidden gap-2.5 px-3.5 py-2.5 w-full text-sm font-medium leading-loose text-center border-b border-zinc-100 text-neutral-900">
        Artboard
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-3.5 py-3 w-full text-xs font-medium leading-loose text-center whitespace-nowrap border-b border-zinc-100 text-neutral-900">
        <div className="flex w-full min-h-7">
          <button className="flex-1 shrink gap-1.5 self-stretch px-2.5 py-1.5 h-full rounded-md border border-gray-200 border-solid basis-0">
            Layout
          </button>
          <button className="flex-1 shrink gap-1.5 self-stretch px-2.5 py-1.5 h-full rounded-none border-t border-r border-b border-solid basis-0 bg-stone-50 border-r-gray-200 border-y-gray-200">
            Rezies
          </button>
        </div>
      </div>
      <div className="w-full">
        <SidebarSection
          title="Layouts"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b2377780c51e64c634710602f24fd1dc6fff0922?placeholderIfAbsent=true"
        >
          <div className="mt-3.5 w-full">
            <LayoutGrid />
          </div>
        </SidebarSection>

        <SidebarSection
          title="Fill"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/83d46dd04398ac2cec3e3e8f1ec30f035dc8cfe4?placeholderIfAbsent=true"
          hasBorder={true}
        >
          <div className="flex gap-3 justify-center items-center mt-3 w-full text-xs font-medium leading-tight text-center whitespace-nowrap text-stone-500">
            <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto w-full basis-0">
              <div className="flex flex-1 shrink gap-2 items-center self-stretch p-1.5 my-auto rounded-2xl basis-0 bg-stone-50">
                <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 bg-white rounded-sm" />
                <span className="self-stretch my-auto">#FFFFFF</span>
              </div>
              <div className="flex gap-2 items-center self-stretch p-1.5 my-auto rounded-2xl bg-stone-50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf92f24750a9ee5332df8f7d7c0d71d6ff0559cb?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Opacity icon"
                  aria-hidden="true"
                />
                <span className="self-stretch my-auto">100%</span>
              </div>
            </div>
          </div>
        </SidebarSection>

        <SidebarSection
          title="Strokes"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44385191051ea598da4aa23686fc0d4d3b993188?placeholderIfAbsent=true"
          hasBorder={true}
        >
          <div className="flex gap-3 justify-center items-center mt-3.5 w-full text-xs font-medium leading-tight text-center whitespace-nowrap text-stone-500">
            <div className="flex flex-1 shrink gap-1 items-center self-stretch my-auto w-full basis-0">
              <div className="flex flex-1 shrink gap-2 items-center self-stretch p-1.5 my-auto rounded-2xl basis-0 bg-stone-50">
                <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 bg-white rounded-sm" />
                <span className="self-stretch my-auto">#FFFFFF</span>
              </div>
              <div className="flex gap-2 items-center self-stretch p-1.5 my-auto rounded-2xl bg-stone-50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf92f24750a9ee5332df8f7d7c0d71d6ff0559cb?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Opacity icon"
                  aria-hidden="true"
                />
                <span className="self-stretch my-auto">100%</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 items-start mt-3.5 w-full text-xs font-medium tracking-normal leading-9 whitespace-nowrap text-neutral-800">
            <button className="flex flex-1 shrink gap-2.5 justify-between items-center px-2.5 h-8 rounded-md border border-gray-200 border-solid basis-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/edffc16534e99570807812aaafd833b2ec3a69e4?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Weight icon"
                aria-hidden="true"
              />
              <span className="self-stretch my-auto">Weight</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1eaad791893ec138ad208ba65af81c0341457cb?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Dropdown icon"
                aria-hidden="true"
              />
            </button>
            <button className="flex flex-1 shrink gap-2.5 justify-between items-center pr-3 pl-3.5 h-8 rounded-md border border-gray-200 border-solid basis-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2bec516e7b773d87d3c1c75cfa00e094ccfa273?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Style icon"
                aria-hidden="true"
              />
              <span className="self-stretch my-auto w-[33px]">Style</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b14178b6a705e5660652c21c16c3d7d5b1443d?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Dropdown icon"
                aria-hidden="true"
              />
            </button>
          </div>
        </SidebarSection>
      </div>
    </aside>
  );
};

const SidebarSection = ({ title, icon, children, hasBorder = false }) => {
  return (
    <div
      className={`overflow-hidden px-3.5 py-4 w-full ${hasBorder ? "border-t border-zinc-100" : ""}`}
    >
      <div className="flex gap-10 justify-between items-center w-full">
        <div className="flex gap-1.5 items-center self-stretch my-auto text-sm leading-loose text-center whitespace-nowrap text-stone-500">
          <img
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            alt={`${title} icon`}
            aria-hidden="true"
          />
          <span className="self-stretch my-auto">{title}</span>
        </div>
        <div className="flex gap-3.5 justify-between items-center self-stretch my-auto w-[46px]">
          <button aria-label="Collapse section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c16caca4024b4cefd4f923520d9c33bc9fe77b0?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Collapse icon"
            />
          </button>
          <button aria-label="More options">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36c81d43b5fc1e84ea593d0831a37d663663b94?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="More options icon"
            />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

const LayoutGrid = () => {
  return (
    <>
      <div className="flex gap-2 items-start w-full">
        <div className="flex flex-1 shrink gap-1 items-start w-full basis-0">
          <div className="flex overflow-hidden flex-col flex-1 shrink items-center bg-white rounded basis-0 h-[73px] w-[73px]">
            <div className="flex flex-col justify-center items-center px-2 rounded bg-stone-50 h-[73px] w-[73px]">
              <div className="w-full min-h-[61px]">
                <div className="flex py-px w-3 min-h-3" />
                <div className="flex gap-1 items-start mt-10 w-full rounded-xl">
                  <div className="flex-1 shrink w-full rounded-xl basis-0">
                    <div className="flex w-6 rounded-sm bg-stone-200 min-h-1" />
                    <div className="flex w-full rounded-sm bg-stone-200 min-h-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col flex-1 shrink items-center px-px bg-white rounded basis-0 h-[73px] w-[73px]">
            <div className="flex flex-col justify-center items-center px-2 rounded bg-stone-50 h-[73px] w-[73px]">
              <div className="w-full">
                <div className="flex py-px w-3 min-h-3" />
                <div className="flex gap-1 items-start mt-1.5 w-full rounded-xl">
                  <div className="flex-1 shrink w-full rounded-xl basis-0">
                    <div className="flex w-6 rounded-sm bg-stone-200 min-h-1" />
                    <div className="flex w-full rounded-sm bg-stone-200 min-h-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b7bd53bdd47569a1bf73a734293e1ec039b128?placeholderIfAbsent=true"
            className="object-contain flex-1 shrink rounded aspect-[0.99] basis-0 w-[72px]"
            alt="Layout template"
          />
        </div>
      </div>
      <div className="flex gap-2 items-start mt-1.5 w-full">
        <div className="flex flex-1 shrink gap-1 items-start w-full basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed42f09138b357801a9e20368606bcea27b6d81e?placeholderIfAbsent=true"
            className="object-contain flex-1 shrink rounded aspect-[0.99] basis-0 w-[72px]"
            alt="Layout template"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8081294e428238c24ac99e946d91fa298ab00f09?placeholderIfAbsent=true"
            className="object-contain flex-1 shrink rounded aspect-square basis-0 w-[73px]"
            alt="Layout template"
          />
          <div className="flex overflow-hidden flex-col flex-1 shrink items-center bg-white rounded basis-0 h-[73px] w-[73px]">
            <div className="px-1.5 pt-5 pb-1.5 rounded bg-stone-50 h-[73px] w-[73px]">
              <div className="rounded-xl max-md:mr-2">
                <div className="flex w-6 rounded-sm bg-stone-200 min-h-1" />
                <div className="flex w-full rounded-sm bg-stone-200 min-h-1" />
              </div>
              <div className="flex shrink-0 mt-7 h-2.5 rounded-sm bg-stone-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-start mt-1.5 w-full min-h-[73px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e398151eebf302d8356e3682293eabbb23e6d8f2?placeholderIfAbsent=true"
          className="object-contain flex-1 shrink rounded aspect-[0.99] basis-0 w-[72px]"
          alt="Layout template"
        />
        <div className="flex overflow-hidden flex-col flex-1 shrink items-center px-px bg-white rounded basis-0 h-[73px] w-[73px]">
          <div className="flex flex-col justify-center px-1.5 bg-orange-50 rounded h-[73px] w-[73px]">
            <div className="flex gap-1 justify-center items-center rounded-xl max-md:mr-1.5">
              <div className="flex flex-col justify-center self-stretch my-auto rounded-xl w-[52px]">
                <div className="flex self-center w-6 bg-orange-200 rounded-sm min-h-1" />
                <div className="flex w-full bg-orange-200 rounded-sm min-h-1" />
              </div>
            </div>
            <div className="flex shrink-0 mt-3.5 h-2.5 bg-orange-200 rounded-sm" />
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e369e44ad9a082650a1374d75e1df8b9cd80e86?placeholderIfAbsent=true"
          className="object-contain flex-1 shrink rounded aspect-[0.99] basis-0 w-[72px]"
          alt="Layout template"
        />
      </div>
    </>
  );
};

export default EditorSidebar;
