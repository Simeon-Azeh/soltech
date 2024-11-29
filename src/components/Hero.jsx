import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const totalVideos = 4;
  const nextVdRef = useRef(null);
  const hoverVdRef = useRef(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayVideo(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/herr-${index}.mp4`;

  return (
    <div className="relative w-screen overflow-x-hidden h-dvh">
      <div
        id="video-frame"
        className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75"
      >
        <div>
          <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100"
              >
                <img
                  src="img/background.png"
                  alt="Loading preview"
                  className="object-cover object-center origin-center scale-150 size-64"
                />
                <video
                  ref={hoverVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="hover-video"
                  className="absolute inset-0 object-cover object-center w-full h-full origin-center scale-150 opacity-0 size-64 hover:opacity-100"
                  onMouseEnter={() => hoverVdRef.current.play()}
                  onMouseLeave={() => hoverVdRef.current.pause()}
                />
              </div>
            </VideoPreview>
          </div>

          {playVideo ? (
            <video
              ref={nextVdRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              autoPlay
              id="next-video"
              className="absolute top-0 left-0 object-cover object-center w-full h-full"
              onLoadedData={handleVideoLoad}
            />
          ) : (
            <img
              src="img/background.png"
              alt="Loading preview"
              className="absolute top-0 left-0 object-cover object-center w-full h-full"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        <h1 className="absolute z-40 special-font hero-heading bottom-5 right-5 text-blue-75">
          TECH<b> & </b>GAMING
        </h1>

        <div className="absolute top-0 left-0 z-40 w-full h-full">
          <div className="px-5 mt-24 sm:px-10">
            <h1 className="text-blue-100 special-font hero-heading">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 text-blue-100 max-w-64 font-robert-regular">
              Learn and play with soltech <br /> Membership meant for you.
            </p>

            <Button
              id="watch-trailer"
              title="Join Membership"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-white flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="absolute text-black special-font hero-heading bottom-5 right-5">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;