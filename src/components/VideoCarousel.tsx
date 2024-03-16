import { hightlightsSlides } from "@/constants/constants";
import { pauseImg, playImg, replayImg } from "@/utils/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

export default function VideoCarousel() {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLSpanElement[]>([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPLaying: false,
  });
  const [loadedData, setLoadedData] = useState<
    SyntheticEvent<HTMLVideoElement, Event>[]
  >([]);
  const { isEnd, startPlay, videoId, isLastVideo, isPLaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 3,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prevState) => ({
          ...prevState,
          startPlay: true,
          isPLaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPLaying) {
        videoRef?.current?.[videoId].pause();
      } else {
        startPlay && videoRef?.current?.[videoId].play();
      }
    }
  }, [startPlay, videoId, isPLaying, loadedData]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 768
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "5vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPLaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        anim.restart();
      }
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };
      if (isPLaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPLaying]);

  const handleLoadedMetaData = (
    e: SyntheticEvent<HTMLVideoElement, Event>,
    index: number
  ) => setLoadedData((prevState) => [...prevState, e]);

  const handleProcess = (
    type: "reset" | "play" | "pause" | "end" | "last",
    index: number = 0
  ) => {
    switch (type) {
      case "end":
        setVideo((prevState) => ({
          ...prevState,
          isEnd: true,
          videoId: index + 1,
        }));
        break;
      case "last":
        setVideo((prevState) => ({ ...prevState, isLastVideo: true }));
        break;
      case "reset":
        setVideo((prevState) => ({
          ...prevState,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((prevState) => ({
          ...prevState,
          isPLaying: !prevState.isPLaying,
        }));
        break;
      case "pause":
        setVideo((prevState) => ({
          ...prevState,
          isPLaying: !prevState.isPLaying,
        }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((item, index) => (
          <div key={item.id} id="slider" className="sm:pr-20 pr-10">
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                <video
                  ref={(el) => {
                    if (el !== null) {
                      videoRef.current[index] = el;
                    }
                  }}
                  className={`${
                    item.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  id="video"
                  playsInline
                  preload="auto"
                  muted
                  onLoadedMetadata={(e) => handleLoadedMetaData(e, index)}
                  onEnded={() =>
                    index !== 3
                      ? handleProcess("end", index)
                      : handleProcess("last")
                  }
                  onPlay={() =>
                    setVideo((prevState) => ({
                      ...prevState,
                      isPLaying: true,
                    }))
                  }
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {item.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-center mt-10">
        <div className="flex items-center justify-center px-7 py-5 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current?.map((_, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el !== null) {
                  videoDivRef.current[index] = el;
                }
              }}
              className="w-3 h-3 mx-2 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => {
                  if (el !== null) {
                    videoSpanRef.current[index] = el;
                  }
                }}
              />
            </span>
          ))}
        </div>
        <button className="ml-4 p-4 rounded-full bg-gray-300 backdrop-blur flex items-center justify-center">
          <Image
            src={isLastVideo ? replayImg : !isPLaying ? playImg : pauseImg}
            alt="video control"
            onClick={() => {
              const text = isLastVideo
                ? "reset"
                : !isPLaying
                ? "play"
                : "pause";
              return handleProcess(text);
            }}
          />
        </button>
      </div>
    </>
  );
}
