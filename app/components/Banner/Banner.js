import Button from "@/app/UI/Buttons/Button";
import React from "react";

const Banner = () => {
  return (
    <section
      id="banner"
      className="banner h-screen w-full px-10 flex flex-col justify-center"
    >
      <p className="text-secondary pb-6">Hi, my name is</p>
      <p className="text-4xl md:text-6xl font-bold font-Roboto tracking-wide pb-2">
        Mark Corbin.
      </p>
      <p className="text-2xl md:text-5xl font-bold font-Roboto tracking-wide text-gray-300 pb-10">
        I am a full-stack developer.
      </p>
      <p className="text-gray-300 text-[1rem] tracking-tighter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quae
        sunt a quidem, nemo aperiam corporis ut provident! Cupiditate asperiores
        accusamus natus tempore autem veritatis dolore molestiae quis neque
        expedita!
      </p>

      <Button design={"relative h-16 w-64 top-12"} text={"Contact Me"} />
    </section>
  );
};

export default Banner;
