import Image from "next/image";
import bg from "../../public/background/about-background.png";
import logo from "../../public/logo/znitysvg.svg";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import dynamic from "next/dynamic";
const Desk = dynamic(() => import("@/components/models/DeskModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      
      <Image
        priority
        sizes="100vw"
        src="/f2.png"
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        
        <Navigation />
        <RenderModel>
        <Desk />
        </RenderModel>
        <Footer />
      </div>
    </main>
  );
}
