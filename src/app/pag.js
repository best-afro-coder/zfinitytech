import Image from "next/image";
import bg from "../../public/background/home-background.png";
import logo from "../../public/logo/znitysvg.svg";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import dynamic from "next/dynamic";
const DModel = dynamic(() => import("@/components/models/DModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
  

     <Image
        priority
        height="100"
        width="200"
        src="/zfn.svg"
        alt="zfinity technologies logo"
        className="fixed animate-bounce"/>
  

      <div className="w-full h-screen">
        
        <Navigation />
        <RenderModel>
        <DModel />
        </RenderModel>
        
      </div>
      <Footer />
    </main>
  );
}
