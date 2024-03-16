"use client";

import { rightImg, watchImg } from "@/utils/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to("#link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc"
    >
      <div className="mx-auto relative max-w-[1120px]">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1
            id="title"
            className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p
              id="link"
              className="text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20"
            >
              Watch the film
              <Image src={watchImg} alt="watch" className="ml-3" />
            </p>
            <p
              id="link"
              className="text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20"
            >
              Watch the event
              <Image src={rightImg} alt="watch" className="ml-3" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}
