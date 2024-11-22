import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="w-screen bg-black min-h-dvh text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24 size-full">
        <p className="font-general text-sm uppercase md:text-[10px]">
          redefining africa's tech ecosystem
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the <b>s</b>oltech <br /> expe<b>r</b>ience"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/float.svg"
                  alt="Soltech Overview"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="absolute invisible size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex justify-center w-full -mt-80 md:-mt-64 md:me-44 md:justify-end">
          <div className="flex flex-col items-center h-full w-fit md:items-start">
            <p className="max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start">
              At Soltech, we empower Africa's future with cutting-edge tech 
              training, immersive gaming, and tools like Intutor, Sidec, and SolHub. 
              Explore infinite opportunities with high-speed Starlink internet and a thriving community.
            </p>

            <Button
              id="discover-btn"
              title="Explore Soltech"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
