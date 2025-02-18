//Code for the Hero section
import { useEffect, useState } from "react";
import { FaReact, FaPython, FaJs } from "react-icons/fa"; // Importing icons
import { SiTailwindcss, SiHtml5, SiCss3, SiRust } from "react-icons/si";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // It will Delay the animation to show content smoothly
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  }, []);

  return (
    <section className="h-[85vh] flex flex-col items-center justify-center px-6 bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="animate-float absolute top-8 left-10 md:top-16 md:left-[30%] text-purple-400 text-4xl md:text-6xl">
          <FaReact />
        </div>
        <div className="animate-float reverse absolute top-20 right-12 md:top-20 md:right-[30%] text-blue-400 text-3xl md:text-5xl">
          <FaPython />
        </div>
        <div className="animate-float absolute bottom-12 left-8 md:bottom-[30%] md:left-24 text-yellow-400 text-3xl md:text-5xl">
          <FaJs />
        </div>
        <div className="animate-float reverse absolute bottom-20 right-8 md:bottom-[30%] md:right-24 text-gray-400 text-3xl md:text-5xl">
          <SiRust />
        </div>
        <div className="animate-float absolute top-28 left-24 md:top-[40%] md:left-[25%] text-teal-400 text-2xl md:text-4xl">
          <SiTailwindcss />
        </div>
        <div className="animate-float reverse absolute bottom-10 left-28 md:bottom-[25%] md:left-[25%] text-orange-400 text-2xl md:text-4xl">
          <SiHtml5 />
        </div>
        <div className="animate-float absolute bottom-14 right-20 md:bottom-[25%] md:right-[25%] text-blue-400 text-2xl md:text-4xl">
          <SiCss3 />
        </div>
      </div>


      <div
        className={`relative flex justify-center transform ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } transition-all duration-700 ease-in-out`}
      >

        <div className="relative">
          <img
            src="/me-clear.png"
            alt="Leon"
            className="w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 object-cover rounded-lg shadow-lg relative z-10"
          />


          <div className="absolute inset-0 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 blur-lg rounded-lg -z-10 animate-pulse" />
        </div>
      </div>


      <div
        className={`text-center transform ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out mt-6`}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          Leon Munene
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-2 font-light tracking-wider text-gray-300">
          PROGRAMMER // CODER
        </p>
      </div>
    </section>
  );
};

export default Hero;
