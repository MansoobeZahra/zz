import { oswald } from "@/data/constants/fonts";
import { socialMedia } from "@/data/index";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container">
      <div className="w-full pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1
            className={`${oswald.className} font-bold lg:max-w-[45vw] text-2xl text-center`}
          >
            Ready to take{" "}
            <span className="text-red-800 dark:text-red-600">your</span>{" "}
            digital presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a
            href="mailto:abbaszayn08@gmail.com"
       className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white 
             border-2 border-red-500 rounded-full px-8 py-4 flex items-center justify-center 
             transition-all duration-300 ease-in-out 
         hover:scale-110 hover:bg-red-600 hover:text-white hover:border-white 
             active:scale-95 shadow-[0_0_10px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
>
          <span>Let&apos;s get in touch</span>
            <FaLocationArrow />
          </a>        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © {new Date().getFullYear()} Zayn Abbas. All rights reserved.
          </p>
          <div className="flex items-center md:gap-3 gap-6 mt-4 md:md-0">
            {socialMedia.map((info,index) => (
              <a
              key={info.id}
                href={info.href}
              target="_blank"
               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black dark:border-[rgb(150,150,150)] bg-red-50 hover:bg-red-100 text-black dark:text-red-500 transition-all duration-300 dark:bg-inherit"
            >
                      <span
        className={`${
          index === Math.floor(socialMedia.length / 2)
          ? "text-[#f1b773cb]" // beige for middle one
            : "text-red-700"   // red for others
        }`}
        > 
              {info.img}
        </span>
              </a>
          ))}
          </div>
      </div>
      </div>
    </footer>
  );
}
