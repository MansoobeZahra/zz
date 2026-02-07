"use client";
import { motion } from "framer-motion";
import { ubuntu, playfair } from "@/data/constants/fonts";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] flex flex-col items-center justify-center min-h-screen py-28 bg-[#fff8f5] dark:bg-[#0f0f0f] overflow-hidden">

      {/* Top Section with Image Centered - Griflan Style */}
      <div className="relative w-full flex items-center justify-center py-10 md:py-16">

        {/* Center: Griflan-Style Logo + Text */}
        <div className="flex flex-col items-center justify-center z-30 -mt-16">
          {/* Z Logo Image with Fire Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative cursor-pointer"
          >
            {/* Glow effect behind the logo */}
            <div className="absolute inset-0 blur-3xl opacity-5 bg-gradient-to-b from-orange-500 via-red-600 to-transparent rounded-full transform scale-110" />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="relative"
            >
              <Image
                src="/Z-logo.png"
                alt="ZIRCON Logo"
                width={220}
                height={220}
                className="object-contain drop-shadow-[0_0_25px_rgba(255,100,0,0.4)]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* ZIRCON Text - Griflan Style with Serif Font */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 relative"
          >
            {/* Decorative curved accent above text */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            >
              <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="opacity-70">
                <path d="M5 10 Q30 -5 55 10" stroke="#c9a55a" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>

            <h2
              className={`${playfair.className} text-7xl md:text-9xl font-normal tracking-[0.08em] bg-clip-text relative`}
              style={{
                background: "linear-gradient(180deg, #f5f0e6 0%, #c9a55a 50%, #8b7355 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(201, 165, 90, 0.3)",
              }}
            >
              ZIRCON
            </h2>

            {/* Decorative curved accent below text */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
            >
              <svg width="40" height="10" viewBox="0 0 40 10" fill="none" className="opacity-60">
                <path d="M5 2 Q20 12 35 2" stroke="#c9a55a" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: FlipWords + Content */}
      <div className="text-center flex flex-col items-center gap-6 mt-10 px-4 max-w-3xl z-20">
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
