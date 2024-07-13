import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

interface NewsletterProps {
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  return (
    <>
      <article
        className={clsx(
          "flex flex-col items-center w-full bg-amber-100 gap-6  py-10",
          className
        )}
      >
        <h2 className="text-xl font-bold font-playwritePr">
          Inscrivez-vous à la newsletter !
        </h2>
        <div className="w-full flex justify-center items-center max-sm:flex-col gap-5 p-2.5 rounded-full">
          <input
            type="email"
            name="email"
            id="emailNewsletter"
            className="w-2/4 py-2 px-4 text-lg rounded-full font-playwritePr"
            placeholder="Entrer votre email"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <button type="submit">
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="text-4xl text-primaryLight "
              />
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Newsletter;
