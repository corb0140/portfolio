import Button from "@/app/UI/Buttons/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="banner"
      className="banner h-screen w-full px-10 lg:px-64 flex flex-col justify-center"
    >
      <p className="text-secondary pb-6">Hi, my name is</p>
      <p className="text-4xl md:text-6xl lg:text-8xl font-bold font-Roboto tracking-wide pb-2">
        Mark Corbin.
      </p>
      <p className="text-2xl md:text-5xl lg:text-6xl font-bold font-Roboto tracking-wide text-gray-300 pb-10">
        I am a full-stack developer.
      </p>
      <p className="text-gray-300 text-[1rem] tracking-tighter lg:w-[60%]">
        Passionate Junior Web Developer with strong skills in HTML, CSS, and
        JavaScript. Eager to learn and contribute to innovative projects,
        enhancing user experiences through creative and efficient web solutions.
      </p>

      <Link href="mailto:markpc1608@gmail.com">
        <Button design={"relative h-16 w-64 top-12"} text={"Contact Me"} />
      </Link>
    </section>
  );
};

export default Banner;
