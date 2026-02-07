// // import Image from "next/image";

// // export default function PhotographySection() {
// //   const photos = [
// //     { src: "/profile12.png", alt: "Nature" },
// //     { src: "/profile12.png", alt: "Street" },
// //     { src: "/profile1.jpg", alt: "Portrait" },
// //     { src: "/profile12.png", alt: "Travel" },
// //   ];

// //   return (
// //     <section
// //       id="photography"
// //       className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] py-20 bg-[#fff8f5] dark:bg-[#0f0f0f]"
// //     >
// //       {/* Title */}
// //       <div className="text-center mb-10">
// //         <h2 className="text-4xl md:text-5xl font-bold text-red-700">
// //           My Photography
// //         </h2>
// //         <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
// //           Capturing moments that inspire creativity & emotion 🎞️
// //         </p>
// //       </div>

// //       {/* Photo Grid */}
// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-6 md:px-16">
// //         {photos.map((photo, index) => (
// //           <div
// //             key={index}
// //             className="relative overflow-hidden rounded-2xl group cursor-pointer"
// //           >
// //             <Image
// //               src={photo.src}
// //               alt={photo.alt}
// //               width={500}
// //               height={500}
// //               className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
// //             />
// //             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
// //               <p className="text-white text-lg font-semibold">{photo.alt}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// import Image from "next/image";

// export default function PhotographySection() {
//   const photos = [
//     { src: "/profile12.png", alt: "Nature" },
//     { src: "/profile1.jpg", alt: "Street" },
//     { src: "/profile12.png", alt: "Portrait" },
//     { src: "/profile1.jpg", alt: "Travel" },
//     { src: "/profile12.png", alt: "Landscape" },
//     { src: "/profile1.jpg", alt: "Urban" },
//   ];

//   return (
//     <section
//       id="photography"
//       className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-24 bg-[#fff8f5] dark:bg-[#0f0f0f]"
//     >
//       {/* Title */}
//       <div className="text-center mb-16 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-red-700">
//           My Photography
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 mt-3 text-base md:text-lg">
//           Capturing moments that inspire creativity & emotion 🎞️
//         </p>
//       </div>

//       {/* Gallery Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 max-w-7xl mx-auto">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             className={`relative overflow-hidden rounded-3xl group cursor-pointer shadow-lg ${
//               index % 3 === 0 ? "sm:col-span-2 md:col-span-1 md:row-span-2" : ""
//             }`}
//           >
//             <Image
//               src={photo.src}
//               alt={photo.alt}
//               width={600}
//               height={600}
//               className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
//               <p className="text-white text-lg font-semibold tracking-wide">
//                 {photo.alt}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function PhotographySection() {
  const photos = [
    { src: "/profile123.jpg", alt: "Nature" },
    { src: "/profile123.jpg", alt: "Street" },
    { src: "/profile123.jpg", alt: "Portrait" },
    { src: "/profile123.jpg", alt: "Travel" },
    { src: "/profile123.jpg", alt: "Landscape" },
    { src: "/profile123.jpg", alt: "Urban" },
  ];

  return (
    <section
      id="photography"
      className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] py-20 bg-[#fff8f5] dark:bg-[#0f0f0f]"
    >
      {/* Title */}
      <div className="text-center mb-14 px-4">
        <h1
          className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center`}
        >
          <span className="text-red-900">Photography</span>
          <span>
            Capturing <span className="text-red-600">Moments & Stories</span>
          </span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm md:text-base">
          A glimpse into the world through my lens 📸
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-6 md:px-16 max-w-7xl mx-auto">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl group cursor-pointer shadow-lg ${
              index % 3 === 0 ? "sm:col-span-2 md:col-span-1 md:row-span-2" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
