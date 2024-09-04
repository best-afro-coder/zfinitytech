import Image from "next/image";
import bg from "../../public/images/10.jpg";
import logo from "../../public/images/logo_trans.svg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Footer from "@/components/Foo";

import dynamic from "next/dynamic";

const Truck = dynamic(() => import("@/components/models/Truck"), {
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
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />
    

      <div className="w-full h-screen">
        
        <Navigation />
        <RenderModel>
        <Truck />
        </RenderModel>
        <Footer />
      </div>
      
    </main>
  );
}
