import Image from "next/image";
import bg from "../../../../public/background/products.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
const GlobeModel = dynamic(() => import("@/components/models/GlobeModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="ZFinity Technology's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <GlobeModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className=" pt-20 font-bold  text-4xl xs:text-5xl sm:text-6xl  lg:text-7xl text-accent">
            ZFinity Technologies
          </h1>
          <p className="font-light text-foreground text-lg">
            Re-thinking Technology
          </p>
        </div>
      </div>

      <AboutDetails />
      <Footer />
    </>
  );
}
