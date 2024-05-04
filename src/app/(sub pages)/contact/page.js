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
        alt="ZFinity Technology's contact page background image"
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
            If this website has impressed you well, we have barely scratched the surface of what we can do, our mobile and desktop 
            Applications are equally impressive. Do not take our word for it, we have traceable references. If you need help with anything IT related, be it
            Website development, Application development or Database Management System development do not hesitate to get in touch with us.
            Use the form below to send us an email message.
            </p>
        </div>
        <Form />
      </article>
      <Footer />
    </>
  );
}
