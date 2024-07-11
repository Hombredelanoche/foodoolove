import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

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
  return <div>Detail de la recette {params.productId} </div>;
};

export default RecetteId;
