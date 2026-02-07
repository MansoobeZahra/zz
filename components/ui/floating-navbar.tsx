// "use client";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   const pathname = usePathname();
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       let direction = current - scrollYProgress.getPrevious()!;
//       if (scrollYProgress.get() <= 0.05) setVisible(true);
//       else setVisible(direction < 0);
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.nav
//         initial={{ opacity: 1, y: -80 }}
//         animate={{
//           y: visible ? 0 : -80,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{ duration: 0.25 }}
//         className={cn(
//           "fixed top-8 left-0 right-0 flex items-center justify-between px-16 z-[5000] text-black dark:text-white font-medium tracking-wide",
//           className
//         )}
//       >
//         {/* ---- Left Title Section ---- */}
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-red-600 rounded-full"></div>
//           <span className="font-semibold text-lg text-red-600 dark:text-red-500">
//             John Doe
//           </span>
//         </div>

//         {/* ---- Right Navigation Links ---- */}
//         <div className="flex items-center space-x-8">
//           {navItems.map((navItem, idx) => (
//             <React.Fragment key={idx}>
//               <Link
//                 href={navItem.link}
//                 className={cn(
//                   "transition-colors duration-200 hover:text-red-600 dark:hover:text-red-500",
//                   pathname === navItem.link
//                     ? "text-red-600 dark:text-red-500 font-semibold"
//                     : "text-gray-800 dark:text-gray-200"
//                 )}
//               >
//                 {navItem.name}
//               </Link>
//               {idx < navItems.length - 1 && (
//                 <span className="h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </motion.nav>
//     </AnimatePresence>
//   );
// };
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() <= 0.05) setVisible(true);
      else setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -80 }}
        animate={{
          y: visible ? 0 : -80,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className={cn(
          "fixed top-8 left-0 right-0 flex items-center justify-between px-6 md:px-16 z-[5000] text-black dark:text-white font-medium tracking-wide",
          className
        )}
      >
        {/* ---- Left Logo Section ---- */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
          <span className="font-semibold text-lg text-red-600 dark:text-red-500">
            John Doe
          </span>
        </div>

        {/* ---- Desktop Navigation ---- */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((navItem, idx) => (
            <React.Fragment key={idx}>
              <Link
                href={navItem.link}
                className={cn(
                  "transition-colors duration-200 hover:text-red-600 dark:hover:text-red-500",
                  pathname === navItem.link
                    ? "text-red-600 dark:text-red-500 font-semibold"
                    : "text-gray-800 dark:text-gray-200"
                )}
              >
                {navItem.name}
              </Link>
              {idx < navItems.length - 1 && (
                <span className="h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ---- Mobile Hamburger ---- */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-red-600 dark:text-red-500"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ---- Mobile Dropdown Menu basically whT WE CALL RESPONSIVENESS---- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-20 left-0 right-0 mx-4 p-6 rounded-2xl bg-white/90 dark:bg-[#181818]/90 backdrop-blur-md shadow-lg flex flex-col space-y-4 md:hidden"
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "transition-colors text-center text-lg duration-200 hover:text-red-600 dark:hover:text-red-500",
                    pathname === navItem.link
                      ? "text-red-600 dark:text-red-500 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};
