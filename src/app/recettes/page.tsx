import { recetteElements } from "@/constants/constantsElements";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <section className="flex flex-col">
        <h1 className="text-center text-3xl font-bold my-4">Nos recettes</h1>
        <article className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {recetteElements.map(({ id, src, name, chef }) => (
            <Link key={id} href={`/photoRecettes/${id}`}>
              <h2 className="text-center font-playwritePr font-bold ">
                {name}
              </h2>
              <Image
                alt={name}
                src={src}
                width={400}
                height={400}
                className="w-full object-cover aspect-square"
              />
              <small> {chef} </small>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default ProductsList;
