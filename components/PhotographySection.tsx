"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { useState, useEffect, useMemo, useCallback } from "react";
import { X } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600"] });

// All portfolio images - full collection
const allPhotos = [
  "/portfolio/1735288476191-01-01.jpeg",
  "/portfolio/1737107141160-01.jpeg",
  "/portfolio/1738774133374-01.jpeg",
  "/portfolio/1742237871284-01.jpeg",
  "/portfolio/1752769352893.jpg",
  "/portfolio/188A5035 (1)-01.jpeg",
  "/portfolio/20210123_105811-01.jpeg",
  "/portfolio/20210123_161337-01.jpeg",
  "/portfolio/20211205_105523-01.jpeg",
  "/portfolio/AIRetouch_20250826_185503216-01.jpeg",
  "/portfolio/DSC_0177.jpg",
  "/portfolio/DSC_0230.jpg",
  "/portfolio/DSC_0231.jpg",
  "/portfolio/DSC_0295.jpg",
  "/portfolio/IMG-20250406-WA0060-01.jpeg",
  "/portfolio/IMG-20251123-WA0037 (2)-01.jpeg",
  "/portfolio/IMG_0070.JPG",
  "/portfolio/IMG_0186.JPG",
  "/portfolio/IMG_0294.jpg",
  "/portfolio/IMG_0455-2.jpg",
  "/portfolio/IMG_0466.JPG",
  "/portfolio/IMG_0529.JPG",
  "/portfolio/IMG_0690-01.jpeg",
  "/portfolio/IMG_20250101_001922-01.jpeg",
  "/portfolio/IMG_20250401_131639.jpg",
  "/portfolio/IMG_20250405_180454 (1).jpg",
  "/portfolio/IMG_20250411_162758.jpg",
  "/portfolio/IMG_20250610_082502.jpg",
  "/portfolio/IMG_20250610_112239-01.jpeg",
  "/portfolio/IMG_20250610_172607.jpg",
  "/portfolio/IMG_20250610_174244.jpg",
  "/portfolio/IMG_20250611_143415.jpg",
  "/portfolio/IMG_20250708_191752.jpg",
  "/portfolio/IMG_20250709_144811.jpg",
  "/portfolio/IMG_20250715_172821.jpg",
  "/portfolio/IMG_20250716_080244.jpg",
  "/portfolio/IMG_20250716_094207.jpg",
  "/portfolio/IMG_20251018_185139.jpg",
  "/portfolio/IMG_20251103_160208-01.jpeg",
  "/portfolio/IMG_20251106_170109-01.jpeg",
  "/portfolio/IMG_20251118_152011-01.jpeg",
  "/portfolio/IMG_20251130_135211.jpg",
  "/portfolio/IMG_3994.JPG",
  "/portfolio/IMG_4858-01.jpeg",
  "/portfolio/IMG_4933-01.jpeg",
  "/portfolio/IMG_5377.jpg",
  "/portfolio/IMG_7020-01.jpeg",
  "/portfolio/IMG_8546.JPG",
  "/portfolio/IMG_8547.JPG",
  "/portfolio/IMG_8550-2.JPG",
  "/portfolio/IMG_8550.JPG",
  "/portfolio/IMG_8560.JPG",
  "/portfolio/IMG_8800.JPG",
  "/portfolio/IMG_9087.JPG",
  "/portfolio/IMG_9096.JPG",
  "/portfolio/IMG_9207.JPG",
  "/portfolio/IMG_9213.JPG",
  "/portfolio/IMG_9310.JPG",
  "/portfolio/IMG_9321.jpg",
  "/portfolio/IMG_9335.jpg",
  "/portfolio/IMG_9496.JPG",
  "/portfolio/IMG_9536.jpg",
  "/portfolio/IMG_9819.jpg",
  "/portfolio/PicRetouch_20241225_033408965-01.jpeg",
  "/portfolio/PicsArt_12-01-05.46.37.jpg",
  "/portfolio/Snapchat-1316420494.jpg",
  "/portfolio/Snapchat-1389634244.jpg",
  "/portfolio/Snapchat-349961320.jpg",
  "/portfolio/_DSC45922.jpg",
  "/portfolio/f43c9a15-cf11-4199-901e-b8d0b534512c-01.jpeg",
];

// Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Optimized image component with crossfade
function CrossfadeImage({
  src,
  prevSrc,
  isTransitioning,
  onClick,
  priority = false,
  showHint = false,
}: {
  src: string;
  prevSrc: string;
  isTransitioning: boolean;
  onClick: () => void;
  priority?: boolean;
  showHint?: boolean;
}) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer"
      onClick={onClick}
    >
      {/* Previous image (fades out) */}
      <Image
        src={prevSrc}
        alt="Photography"
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        quality={75}
        className={`object-cover transition-opacity duration-700 ease-in-out ${isTransitioning ? "opacity-100" : "opacity-0"
          }`}
      />
      {/* Current image (fades in) */}
      <Image
        src={src}
        alt="Photography"
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        quality={75}
        priority={priority}
        className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${isTransitioning ? "opacity-0" : "opacity-100"
          }`}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        {showHint && (
          <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view
          </span>
        )}
      </div>
    </div>
  );
}

export default function PhotographySection() {
  const [currentSet, setCurrentSet] = useState(0);
  const [prevSet, setPrevSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const displayCount = 5;

  // Shuffle photos on mount
  const shuffledPhotos = useMemo(() => shuffleArray(allPhotos), []);
  const totalSets = Math.ceil(shuffledPhotos.length / displayCount);

  // Create sets of photos
  const photoSets = useMemo(() => {
    const sets = [];
    for (let i = 0; i < totalSets; i++) {
      const start = i * displayCount;
      const set = shuffledPhotos.slice(start, start + displayCount);
      while (set.length < displayCount) {
        set.push(shuffledPhotos[set.length % shuffledPhotos.length]);
      }
      sets.push(set);
    }
    return sets;
  }, [shuffledPhotos, totalSets]);

  // Navigate with smooth crossfade
  const navigateTo = useCallback(
    (newSet: number) => {
      if (isTransitioning || newSet === currentSet) return;
      setPrevSet(currentSet);
      setIsTransitioning(true);
      setCurrentSet(newSet);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning, currentSet]
  );

  const nextSet = useCallback(
    () => navigateTo((currentSet + 1) % totalSets),
    [currentSet, totalSets, navigateTo]
  );
  const prevSetNav = useCallback(
    () => navigateTo((currentSet - 1 + totalSets) % totalSets),
    [currentSet, totalSets, navigateTo]
  );

  // Auto-cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSet, 5000);
    return () => clearInterval(interval);
  }, [nextSet]);

  const displayPhotos = photoSets[currentSet] || photoSets[0];
  const prevPhotos = photoSets[prevSet] || photoSets[0];

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreenImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Navigate fullscreen images
  const navigateFullscreen = (direction: "next" | "prev") => {
    if (!fullscreenImage) return;
    const currentIndex = shuffledPhotos.indexOf(fullscreenImage);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % shuffledPhotos.length
        : (currentIndex - 1 + shuffledPhotos.length) % shuffledPhotos.length;
    setFullscreenImage(shuffledPhotos[newIndex]);
  };

  return (
    <>
      <section
        id="photography"
        className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-20 bg-[#fff8f5] dark:bg-[#0f0f0f]"
      >
        {/* Title */}
        <div className="text-center mb-14 px-4">
          <h1
            className={`${oswald.className} text-2xl md:text-4xl flex flex-col text-center gap-3`}
          >
            <span className="text-base font-light text-red-900">Photography</span>
            <span className="font-semibold">
              Capturing <span className="text-red-600">Moments & Stories</span>
            </span>
          </h1>
        </div>

        {/* Gallery Container - Static Grid, Only Images Transition */}
        <div className="relative px-6 md:px-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[400px] md:h-[550px]">
            {/* Large left image */}
            <div className="row-span-2">
              <CrossfadeImage
                src={displayPhotos[0]}
                prevSrc={prevPhotos[0]}
                isTransitioning={isTransitioning}
                onClick={() => setFullscreenImage(displayPhotos[0])}
                priority
                showHint
              />
            </div>

            {/* Top middle */}
            <CrossfadeImage
              src={displayPhotos[1]}
              prevSrc={prevPhotos[1]}
              isTransitioning={isTransitioning}
              onClick={() => setFullscreenImage(displayPhotos[1])}
            />

            {/* Top right */}
            <CrossfadeImage
              src={displayPhotos[2]}
              prevSrc={prevPhotos[2]}
              isTransitioning={isTransitioning}
              onClick={() => setFullscreenImage(displayPhotos[2])}
            />

            {/* Bottom middle */}
            <CrossfadeImage
              src={displayPhotos[3]}
              prevSrc={prevPhotos[3]}
              isTransitioning={isTransitioning}
              onClick={() => setFullscreenImage(displayPhotos[3])}
            />

            {/* Bottom right */}
            <CrossfadeImage
              src={displayPhotos[4]}
              prevSrc={prevPhotos[4]}
              isTransitioning={isTransitioning}
              onClick={() => setFullscreenImage(displayPhotos[4])}
            />
          </div>

          {/* Elegant Swipe Line Indicator */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSetNav}
              className="text-zinc-500 hover:text-red-500 transition-colors duration-300 text-lg"
            >
              ←
            </button>
            <div className="flex gap-1">
              {Array.from({ length: Math.min(totalSets, 14) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigateTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ease-out ${i === currentSet
                    ? "bg-gradient-to-r from-red-500 to-red-700 w-8"
                    : "bg-zinc-600 w-3 hover:bg-zinc-500"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={nextSet}
              className="text-zinc-500 hover:text-red-500 transition-colors duration-300 text-lg"
            >
              →
            </button>
          </div>

          {/* Image counter */}
          <p className="text-center text-zinc-500 text-xs mt-3">
            {currentSet * displayCount + 1} -{" "}
            {Math.min((currentSet + 1) * displayCount, shuffledPhotos.length)}{" "}
            of {shuffledPhotos.length} photos
          </p>
        </div>
      </section>

      {/* Fullscreen Preview Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 z-10"
            onClick={() => setFullscreenImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              navigateFullscreen("prev");
            }}
          >
            ←
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              navigateFullscreen("next");
            }}
          >
            →
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreenImage}
              alt="Full view"
              fill
              sizes="100vw"
              quality={90}
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {shuffledPhotos.indexOf(fullscreenImage) + 1} of{" "}
            {shuffledPhotos.length}
          </p>
        </div>
      )}
    </>
  );
}
