import Button from "@/app/UI/Buttons/Button";
import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="px-10 lg:px-72 py-10 lg:pb-36">
      <SectionTitle number="04" title="Contact" />

      <div className="flex flex-col items-center lg:pt-10">
        <h2 className="font-Roboto tracking-wide pt-5 text-3xl lg:text-6xl font-bold">
          Get In Touch
        </h2>

        <p className="text-center text-sm md:text-[1rem] px-5 pt-6 pb-6 lg:px-24 leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          doloremque magnam delectus minima amet iste facere, hic esse ad fugit!
        </p>

        <Link href="mailto:markpc1608@gmail.com">
          <Button design="relative h-14 w-36" text="Say Hello" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
