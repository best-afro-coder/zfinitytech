import React from "react";
import ItemLayout from "./about/ItemLayout";
import Link from "next/link";
import logo from "../../public/images/logo_trans.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="px-2 pt-5">

      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full bg-[url('/images/black.png')] bg-cover  ">

      <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          An energetic, vision driven and multifaceted Company
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Mining, Construction & maintenance, Civil engineering, Import and export,
          Customs clearing, Freight logistics, Micro financing, Security,
          Precious metals refinery, and Procurement & financing is our business.
 
          </p>
          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              Get in touch
            </Link>
        </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Our services in detail
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          1- Mining: 
          <ul>
            <li>mine contracting</li>
            <li>mine engineering consulting</li>
            <li>mine equipment supply and maintenance</li>
          </ul>
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          2- Civil Engineering: 
                <ul>
                  <li>Infrastructure Development: Design and construction of essential infrastructure such as roads, bridges, tunnels, and 
water management systems.</li>
                  <li>Structural Engineering: Development of structural solutions 
                  for mining facilities, ensuring stability and safety. </li>
                  <li>Environmental Engineering: Implementation of systems to manage 
environmental impacts, including waste management and 
pollution control</li>
                  
                </ul>
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          2- Customs clearing: 
                <ul>
                  <li>Customs Brokerage: Handling all customs documentation and 
                  procedures to ensure smooth and timely clearance of goods </li>
                  <li>Regulatory Compliance: Ensuring all imports and exports meet 
                  local and international regulatory requirements. </li>
                  <li>Duty Management: Optimizing duty payments and ensuring 
                  compliance with trade agreements. </li>
                  
                </ul>
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          2- Freight logistics: 
                <ul>
                  <li>Transportation Solutions: Providing tailored logistics solutions 
                  for the transportation of mining materials and equipment </li>
                  <li>Warehousing and Distribution: Secure warehousing facilities and 
                  efficient distribution networks to support mining operations. </li>
                  <li> Supply Chain Coordination: Integrated logistics management to 
                  ensure timely delivery and reduced transportation costs.</li>
                  
                </ul>
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          2- Micro Financing: 
                <ul>
                  <li>Green Financing: Offering financing solutions for eco-friendly 
                  and sustainable mining projects </li>
                  <li>Small Scale Support: Providing microloans to small-scale 
miners and local businesses to promote economic growth and 
sustainability. </li>
                  <li>Financial Advisory: Expert advice on financial planning and 
                  investment for sustainable mining practices. </li>
                  
                </ul>
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          2- Procurement and Financing: 
                <ul>
                  <li>Equipment Procurement: Sourcing and purchasing high-quality 
                  mining equipment and materials from reliable suppliers. </li>
                  <li>Financing Solutions: Providing financing options to support the 
                  acquisition of mining equipment and operational expenses </li>
                  <li>Supplier Management: Building strong relationships with 
suppliers to ensure reliable and cost-effective procurement
 </li>

                </ul>
          </p>

          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              Email us
            </Link>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            EG Africa <sub className="font-semibold text-base"> Serving the world</sub>
          </p>

          

        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            750+{" "}
            <sub className="font-semibold text-base">projects completed</sub>
          </p>
          </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Why choose us?
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            <strong>Professionalism:</strong> 
            We are a company with sound principles, vision, mission and dedication towards excellence.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            <strong>Flexible</strong>
            We are always willing to do whatever it takes 
            to fulfill our responsibilities to our clients and partners
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            <strong>Approach</strong>
            To us, it is not just work - we take pride in the 
solutions we deliver. WE APPLY OUR ENGINEERING 
KNOWLEDGE IN PROBLEM SOLVING AND WE 
IMPLEMENT THE SOLUTIONS LIKE THE ENTREPRENEUR 
WE ARE
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Improve Customer Engagement: Apps engage users more effectively than other channels. Features like push notifications, 
            in-app messaging, and personalized content keep users engaged and interested
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Personalize a Marketing Channel: With an app, you can tailor marketing messages based on user behavior and preferences. 
            This personalized approach increases the effectiveness of your marketing efforts
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Improve Customer Interactions: Apps facilitate seamless interactions between customers and your business. 
            Whether it is customer support, order tracking, or feedback, an app streamlines communication
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
           <strong> Reliable</strong>
           The contract is executed and delivered on time, 
by our technically well experienced and 
qualified staff
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
           <strong> Customer Care</strong>
           Every client is our asset and customer 
satisfaction is our main priority.

          </p>
          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              Read more about us
            </Link>
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
