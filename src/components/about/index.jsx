import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Energetic and vision driven
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          EG Africa is an energetic, VISION driven, and multi-faceted company 
          organization with roots in South Africa and a growing number of 
          business interests in various countries. EG Africa comprises youth 
          entrepreneurs who have a background in engineering
          </p>

          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Vision
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Our vision is to promote communities that are balanced in harnessing their 
           cultural values and aspirations and advancing competitive modern-day 
           technologies.
          </p>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Mission
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          To prosper together with clintele , shareholders, and employees, and to 
          contribute to a
          prosperous society
          </p>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Our Offer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          At E.g Africa Limited, there are several values 
          which we hold in high regard, and we expect 
          these values in every member of our team. 
          These values are charity, honesty, fortitude, 
          reliability, integrity, temperance, faith, and 
          hope. We believe that these values set us a 
          step above the rest and allow our team members to provide high-quality security services in a very professional 
          and efficient manner.
          </p>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Company structure
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Our organogram is made up of an executive team and 
technical team.
The technical teams are headed by Heads of Divisions who are 
specialists individuals experienced to manage and lead any 
project scope in their jurisdiction.
E.g Africa Consulting: The Mining Exploration is headed by a 
seasoned Mechanical Engineer who has vast knowledge in the 
mining industry in South Africa. Mainly in coal mining, Chrome 
mining, gold mining, Power energy generation and power station 
maintenance.
E.g Africa Consulting: The Infrastructure and Engineering 
division is headed by a Civil Engineer who has rich experience in a 
wide range of Infrastructure development projects for both 
public and government.
His Project management skills cover most of what we do at E.g 
Africa.

          </p>

          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Our Values
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          At E.g Africa 
International Limited, there are several values which we hold in high
regard, and we expect 
these values in every 
member of our team. These values are charity, honesty, 
fortitude, reliability, 
integrity, temperance, 
faith, and hope. We
believe that these values set us a step 
above the rest, and allow our team members to provide 
high quality security services in a very 
professional and 
efficient manner. CORPORATE PHILOSOPHY
Based on the firm belief 
of establishing long term sustainable relationships, we are a mid-size company with our eyes set on growing towards becoming one 
of the most reliable names when it comes to quality solutions.
          </p>

          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Our Principles
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Integrity and corporate governance – Our success is dependent on trust and 
          support from all stakeholders, employees, suppliers, clients, contractors, 
          government, and local communities. This is why we are committed to the highest 
          standards of integrity and sustainability. We aim to have the maximum level of 
          transparency in our dealings with government authorities and have zero tolerance 
          for corruption. We believe that good corporate governance adds shareholder value 
          and hence, our board is made up of well-qualified and experienced members in the 
          mining industry and running companies. We are still looking into bettering our 
          corporate governance by bringing on board more qualified personnel
          </p>

          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Management Policy
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          To take up the challenges of innovation and to respond to market needs as a diversified and multi-faceted trading company.
          </p>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Action guideline
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          To deliver customer satisfaction with creativity, innovation, sincerity and gratitude, 
          and to act in compliance with the law and ethics.
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


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
