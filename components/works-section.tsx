"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { oswald } from "@/data/constants/fonts";
import { works } from "@/data/index";

export default function Works() {
  return (
    <section id="works" className="pb-32">
      <h1
        className={`${oswald.className} text-2xl md:text-4xl flex flex-col text-center gap-3 mb-12`}
      >
        <span className="text-base font-light text-red-900">Portfolio</span>
        <span className="font-semibold">
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
