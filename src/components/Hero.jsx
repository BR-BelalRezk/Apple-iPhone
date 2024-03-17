import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils/utils";

export default function Hero() {
  const [video, setVideo] = useState("");
  useEffect(() => {
    window.screen.width < 768 ? setVideo(smallHeroVideo) : setVideo(heroVideo);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
      duration: 1,
    });
  }, []);
  return (
    <section className="w-full h-[calc(100vh-60px)] relative">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p
          id="hero"
          className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10"
        >
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={video}
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a
          href="#highlights"
          className="duration-500 px-5 py-2 rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue"
        >
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}
