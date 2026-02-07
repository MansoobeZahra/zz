import Image from "next/image";
import { ubuntu } from "@/data/constants/fonts";
import profileImg from "/public/z.png";
import { FlipWords } from "./ui/flip-words";

export default function HeroSection() {
  return (
    // <section className="w-full flex flex-col items-center justify-center py-28 bg-[#fff8f5] dark:bg-[#0f0f0f] relative overflow-hidden">
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] flex flex-col items-center justify-center py-28 bg-[#fff8f5] dark:bg-[#0f0f0f] overflow-hidden">

      {/* Top Section with Image Centered */}
      <div className="relative w-full flex items-center justify-center py-10 md:py-16">
        {/* Background Shape Behind Image */}
        <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] bg-black/80 rounded-full -z-10"></div>

        {/* Left Text */}
        <div className="absolute left-10 md:left-32 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            I am <br /><span className="text-red-700">John Doe</span>
          </h1>
        </div>

        <div className="flex justify-center items-center mx-20 md:mx-40 mb-8">
          {/* Center Image (Canva-styled) */}

          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex justify-center items-center">
            <Image
              src={profileImg}
              alt="profile photo"
              className="object-contain drop-shadow-[0_0_25px_rgba(255,0,0,0.4)]"
              fill
              priority
            />
          </div>
        </div>




        {/* Right Text */}
        <div className="absolute right-10 md:right-32 text-right">
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base max-w-xs">
            AI & Web Developer specialising in crafting accessible, intelligent,
            and human-centered digital experiences.
          </p>
        </div>
      </div>

      {/* FlipWords + Rest of Content */}
      <div className="text-center flex flex-col items-center gap-6 mt-10 px-4 max-w-3xl">
        <h1
          className={`${ubuntu.className} font-bold text-3xl md:text-5xl flex flex-col leading-tight`}
        >
          <span>
            From Data to <span className="text-red-700">Development</span>,
          </span>
          <span>
            <span className="text-base md:text-lg font-medium text-black dark:text-[rgb(206,206,206)]">
              I Craft Intelligent
            </span>
            <br />
            <FlipWords
              words={[
                "AI-Powered Systems",
                "Impactful Web Experiences",
                "Scalable ML Solutions",
                "Data-Driven Applications",
                "Automated Workflows",
              ]}
              className="text-[rgb(139,94,41)] dark:text-[#f1b773cb] text-center h-[72px] sm:h-auto transition-all duration-700"
            />
            <span className="hidden md:inline">.</span>
          </span>
        </h1>

        <p className="text-gray-800 dark:text-slate-400 text-sm md:text-base mt-2">
          I <b>design, develop, and deploy</b> intelligent digital solutions that
          bridge creativity and technology. From AI-driven systems to responsive
          web experiences, I craft ideas into impact — leveraging expertise in{" "}
          <span className="text-red-700">AI</span> and{" "}
          <span className="text-red-700">Web Development</span>.
        </p>

        <a
          href="#contact"
          className="uppercase font-semibold text-xs bg-black dark:bg-white dark:text-black text-white 
           border-2 border-red-500 rounded-full px-8 py-4 flex items-center justify-center 
           transition-all duration-300 ease-in-out 
           hover:scale-110 hover:bg-red-600 hover:text-white hover:border-white 
           active:scale-95 shadow-[0_0_10px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
        >
          <span>Let&apos;s Connect 🚀</span>
        </a>
      </div>
    </section>
  );
}
