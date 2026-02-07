import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  link,
}: {
  className?: string;
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm transition-all duration-500 hover:border-red-900/50 hover:shadow-[0_0_40px_rgba(153,27,27,0.15)]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay - always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

        {/* Hover description overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white/90 text-center text-sm leading-relaxed">
            {description.length > 100 ? `${description.slice(0, 100)}...` : description}
          </p>
        </div>

        {/* Hover arrow indicator */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <MoveUpRight className="w-5 h-5 text-white" />
        </div>

        {/* Title at bottom - enhanced styling */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-800 rounded-full" />
            <h3 className="font-bold text-base text-white/95 line-clamp-1 tracking-wide group-hover:text-red-400 transition-colors duration-300 drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
};
