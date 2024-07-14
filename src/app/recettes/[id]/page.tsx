import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Recette ${params.productId}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

const RecetteId = ({ params }: Props) => {
  const random = getRandomInt(2);

  if (random != 2) {
    throw new Error("Error loading recette");
  }
  return <div>Detail de la recette {params.productId} </div>;
};

export default RecetteId;
