import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Liste des recettes",
  },
  description: "Page regroupant l'ensemble des recette du catalogue.",
};
const ProductsList = () => {
  return (
    <>
      <div>Mes recettes</div>
      <ol>
        <li>Recette 1</li>
        <li>Recette 2</li>
        <li>Recette 3</li>
        <li>Recette 4</li>
        <li>Recette 5</li>
      </ol>
    </>
  );
};

export default ProductsList;
