import React from "react";
import ItemLayout from "./about/ItemLayout";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="px-2 pt-5">

      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full bg-[url('/background/f1.png')] bg-cover  ">

      <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            The Future of Technology
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            We are the best in Software Development, Data Science, Mobile and Desktop App Development and 
            Web development. We use the latest technologies to develop fast, flexible and scalable products. 
            Join us as we continue to explore new technologies to shape the future of IT.
          </p>
          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              Request a Quote
            </Link>
        </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Why must a Business have a Website?
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          1- Credibility and Professionalism: 
                A well-designed website showcases your brand’s credibility and professionalism. 
                It elevates your business by providing an intuitive user experience, 
                polished designs, and responsive performance.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          2- Increased Discoverability: 
                Having a website allows potential customers to find your business online. 
                When people search for products or services related to your industry, 
                having a website ensures that you appear in search results.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          3- 24/7 Availability: 
                Unlike physical stores, your website is accessible 24/7. 
                Customers can learn about your offerings, browse products, and make inquiries at any time, 
                even outside regular business hours.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          4- Access to New Markets: 
                A website expands your reach beyond your local area. 
                You can attract customers from different regions or even globally, 
                opening up new market opportunities.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          5- Cost-Effective Marketing: 
                Websites provide a cost-effective way to market your business. 
                You can use digital marketing channels, such as social media integration and 
                search engine optimization (SEO), to reach a broader audience.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          6- Direct Sales: 
                If you offer products, an e-commerce website allows you to sell directly to customers online. 
                This streamlines the purchasing process and increases sales potential.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          7- Information and Support: 
                Use your website to provide FAQs, news updates, 
                and other helpful information. It becomes a valuable resource for both existing and 
                potential customers.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          8- Competitor Intelligence: 
                Analyze your competitors by studying their websites. 
                Understand their offerings, pricing, and strategies to stay competitive in the market
          </p>


          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              Contact us
            </Link>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Websites From as little as  <sub className="font-semibold text-base">R1000</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            750+{" "}
            <sub className="font-semibold text-base">websites developed</sub>
          </p>
          </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Why must you have a Business Mobile Application?
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Build a Stronger Brand: Having a mobile app allows you to reinforce your brand identity. 
            Users interact with your app regularly, which helps create brand recognition and loyalty.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Connect with Customers Better: Mobile apps provide a direct channel for communication with your customers. 
            You can send personalized notifications, updates, and offers, fostering a stronger connection
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Provide Value to Customers: Apps allow you to offer additional value to your customers. Whether it’s exclusive discounts, loyalty rewards, 
            or useful features, an app enhances the overall customer experience
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
            Whether it’s customer support, order tracking, or feedback, an app streamlines communication
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base">
           Capitalize on a Niche: If your business caters to a specific niche, an app can target that audience effectively. 
           Niche apps often provide specialized features that cater to specific user needs
          </p>
          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              Contact us
            </Link>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Applications From as little as  <sub className="font-semibold text-base">R1000</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            500+{" "}
            <sub className="font-semibold text-base">applications developed</sub>
          </p>
          </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            DATA SCIENCE
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          The uses of Data Science to a Business
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Making Better Business Decisions:
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Companies can use data and risk analysis practices to make informed decisions. 
          By collecting and analyzing data within the organization, 
          data scientists provide objective evidence that guides difficult business choices
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Measuring Performance
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Data science allows businesses to measure performance across the organization. 
          Trends and empirical evidence help organizations come up with solutions based on data-driven insights.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Providing Information to Internal Finances
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Data science can predict outcomes, generate financial reports, and analyze economic trends. 
          This information helps companies make informed decisions related to budgeting, finances, and expenses.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Develop Better Products
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Data analysis provides verifiable and evidence-based insights. 
          Companies can use a data-driven approach to understand their target audiences, 
          identify preferences, and tailor products accordingly.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Increasing Efficiency
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Workplace data collection enables testing and measuring different methods, 
          leading to increased operational efficiency. 
          By optimizing daily operations, businesses can handle more workload effectively1
          </p>
        </ItemLayout>
        
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Mitigating Risk and Fraud
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Data science helps identify patterns associated with fraudulent activities. 
          By analyzing historical data, companies can reduce the risk of fraud and error.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Predicting Outcomes and Trends
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Predictive modeling allows businesses to anticipate future trends, customer behavior, 
          and market dynamics. This foresight aids in strategic planning and decision-making.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Improving Customer Experiences
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
          Data-driven insights help enhance customer service, personalize experiences, and address pain points. 
          Understanding customer behavior leads to better service delivery and loyalty
          </p>
          <Link
              href={"/contact"}
              className="px-6 inline-block bg-[#c44141] mt-2 hover:bg-slate-800 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-center  text-white"
            >
              So, get it touch with us
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
            Developed by   {" "} <Link href={"https://zfinitytech.com"}  className=" text-sky-600">ZFinity-Technology</Link>  Need a quick quote?  <Link href={"/contact"}  className=" text-sky-600">Contact us</Link>  Our Applications{" "} <Link href={"https://e-nvoice.zfinitytech.com"}  className=" text-sky-600">Invoice Generator</Link> |  <Link href={"https://e-card.zfinitytech.com"}  className=" text-sky-600">Digital Business Cards Creator</Link> | <Link href={"https://qrcode.zfinitytech.com"}  className=" text-sky-600">QR Code Generator</Link> | <Link href={"https://mylinks.zfinitytech.com"}  className=" text-sky-600">Have all your links in one place</Link>
             
          </p>
          
        </ItemLayout>


      </div>
    </section>
  );
};

export default Footer;
