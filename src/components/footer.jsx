import React from "react";
import ItemLayout from "./about/ItemLayout";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-2 px-2">

      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Your trusted partner
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Mining, Construction & maintenance, Civil engineering, Import and export,
          Customs clearing, Freight logistics, Micro financing, Security,
          Precious metals refinery, and Procurement & financing is our business.
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
          className={"col-span-full text-accent"}
        >
          <p className="ml-5 text-xs sm:text-xs">
            Developed by   {" "} <Link href={"https://zfinitytech.com"}  className=" text-sky-600">ZFinity-Technology</Link>  Need our help?  <Link href={"/contact"}  className=" text-sky-600">Contact us</Link>
             
          </p>
          
        </ItemLayout>


      </div>
    </section>
  );
};

export default Footer;
