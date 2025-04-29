import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  highlighted = false,
}) => {
  return (
    <article
      className={`flex flex-col px-5 py-3.5 min-w-60 w-[350px] ${
        highlighted ? "bg-orange-50" : "border border-solid border-zinc-100"
      } rounded-xl`}
    >
      <div className="flex gap-2.5 items-start self-start text-sm leading-none text-neutral-900">
        <img
          src={icon}
          className="object-contain shrink-0 w-4 aspect-square"
          alt=""
          aria-hidden="true"
        />
        <h3>{title}</h3>
      </div>
      <p className="mt-2.5 text-sm leading-5 text-gray-600">{description}</p>
    </article>
  );
};

export default FeatureCard;
