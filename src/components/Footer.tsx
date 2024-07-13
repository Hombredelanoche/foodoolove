import GeneralInformations from "@/components/userInterfaces/GeneralInformations";
import Newsletter from "@/components/userInterfaces/Newsletter";
import SocialMedias from "@/components/userInterfaces/SocialMedias";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-col">
        <section className="flex justify-between w-2/2">
          <SocialMedias />
          <Newsletter />
        </section>
        <section>
          <GeneralInformations />
        </section>
      </footer>
    </>
  );
};

export default Footer;
