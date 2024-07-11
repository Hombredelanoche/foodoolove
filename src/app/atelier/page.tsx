"use client";
import { useRouter } from "next/navigation";
import React from "react";

const nosAteliers = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Course have been selected");
    router.push("/");
  };
  return (
    <>
      <h1>Order a courses</h1>
      <button onClick={handleClick}>Cliquez-içi</button>
    </>
  );
};

export default nosAteliers;
