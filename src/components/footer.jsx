import React from "react";
import ItemLayout from "./about/ItemLayout";
import Link from "next/link";
import Image from "next/image";
import bg from "../../public/background/about-background.png";

const Footer = () => {
  return (
    <section className="py-20 px-10 bg-[url('/background/f1.png')] bg-cover">

      <div className="grid grid-cols-12 gap-4 xs:gap-6   md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            The Future of Technology
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Our journey in Software Development, Mobile and Desktop App Development and 
            Web development is powered by an array of mystical
            tools and languages, with Java, Python, PHP, C, C++ and JavaScript casting the core of our
            enchantments. We wield frameworks like React.js, Next.js, Django and Laravel with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower us to create fast, secure, and dynamic experiences,
            while our design skills ensure every creation is not only functional
            but visually captivating. Join us as we continue to explore new
            spells and technologies to shape the future of IT.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            250+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
        <p className=" w-full text-left">
            Developer <sub className="font-semibold "></sub>
          </p>
          <p className=" w-full text-left">
            ZFinity Technologies <sub className="font-semibold"></sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>


      </div>
    </section>
  );
};

export default Footer;