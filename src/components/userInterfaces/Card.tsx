import clsx from "clsx";
import React from "react";

interface CardProps {
  className?: string;
  children: any;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center p-[10rem] m-4 shadow-md border border-secondary ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
