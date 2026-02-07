"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { oswald } from "@/data/constants/fonts";
import { works } from "@/data/index";

export default function Works() {
  return (
    <section id="works" className="pb-32">
      <h1
        className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center mb-12`}
      >
        <span className="text-base text-red-900 mb-2">Portfolio</span>
        <span>
          Featured <span className="text-red-600">Projects</span>
        </span>
      </h1>
      <BentoGrid>
        {works.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            link={item.link}
            description={item.description}
            image={item.image}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
