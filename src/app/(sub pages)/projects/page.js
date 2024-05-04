import Image from "next/image";
import bg from "../../../../public/background/home.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Footer from "@/components/footer";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const PenModel = dynamic(() => import("@/components/models/PenModel"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>

    <h1 className="font-bold  text-2xl xs:text-3xl sm:text-4xl  lg:text-5xl text-accent"> Some of our projects </h1>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <PenModel />
        </RenderModel>
        
      </div>
      <Footer />
    </>
  );
}
