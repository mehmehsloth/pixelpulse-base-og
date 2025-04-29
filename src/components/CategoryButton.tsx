import React from "react";

interface CategoryButtonProps {
  icon: string;
  text: string;
  active?: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon,
  text,
  active = false,
}) => {
  return (
    <button
      className={`flex gap-2.5 items-center px-4 py-3.5 rounded-md ${
        active ? "text-orange-600 bg-orange-50" : ""
      }`}
      aria-pressed={active}
    >
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
        aria-hidden="true"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};

export default CategoryButton;
