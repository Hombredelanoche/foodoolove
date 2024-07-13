import clsx from "clsx";
import React from "react";

interface buttonProps {
  className?: string;
  color?: string;
  size?: string;
  children: string;
  [key: string]: any;
}

const Button: React.FC<buttonProps> = ({
  className,
  color = "bg-primaryLight text-white",
  size = "px-5 py-3 text-xl font-semibold",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(
        "desabled:bg-slate-200 desabled:text-black rounded-lg shadow-sm hover:bg-primary transition",
        size,
        color,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
