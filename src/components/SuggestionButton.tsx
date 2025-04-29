import React from "react";

interface SuggestionButtonProps {
  icon: string;
  text: string;
  highlighted?: boolean;
}

export const SuggestionButton: React.FC<SuggestionButtonProps> = ({
  icon,
  text,
  highlighted = false,
}) => {
  return (
    <button
      className={`flex gap-1.5 justify-center items-center self-stretch px-3 py-1.5 my-auto bg-white rounded-md ${
        highlighted
          ? "shadow-sm"
          : "border border-gray-200 border-solid shadow-[0px_1px_0px_rgba(0,0,0,0.08)]"
      }`}
      aria-label={text}
    >
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        alt=""
        aria-hidden="true"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};

export default SuggestionButton;
