import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons/faSnapchat";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface SocialMediasProps {
  className?: string;
}

const SocialMedias: React.FC<SocialMediasProps> = ({ className }) => {
  return (
    <>
      <article
        className={clsx(
          "flex w-full flex-col justify-center items-center gap-10 bg-amber-100 px-8 py-10",
          className
        )}
      >
        <h2 className="text-xl font-bold font-playwritePr">Suivez-nous !</h2>
        <div className="flex gap-14 text-xl font-playwritePr">
          <Link href="/" title="reseauFacebookFoodoLove">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="/" title="reseauInstagramFoodoLove">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="/" title="reseauTiktokFoodoLove">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
          <Link href="/" title="reseauYoutubeFoodoLove">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link href="/" title="reseauSnapchatFoodoLove">
            <FontAwesomeIcon icon={faSnapchat} />
          </Link>
        </div>
      </article>
    </>
  );
};

export default SocialMedias;
