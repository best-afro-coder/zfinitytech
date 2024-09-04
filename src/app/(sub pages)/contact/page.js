import Image from "next/image";
import bg from "../../../../public/background/op3.png";
import Form from "@/components/contact/Form";
import Footer from "@/components/footer";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="EG Africa's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get in touch
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            For assistance in Mining, Construction & maintenance, Civil engineering, Import and export,
            Customs clearing, Freight logistics, Micro financing, Precious metals refinery or Procurement & financing  feel free to get in touch with us.
            </p>
        </div>
        <Form />
      </article>
      <Footer />
    </>
  );
}
