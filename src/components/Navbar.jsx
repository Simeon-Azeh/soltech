import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

import Button from "./Button";

const navItems = ["Home", "Services", "Shop", "Events", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(true); // Set initial state to true
  const [isIndicatorActive, setIsIndicatorActive] = useState(true); // Set initial state to true
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Toggle dropdown menu
  const toggleDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6"
    >
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-4 size-full">
          {/* Logo and Product button */}
          <div className="relative flex items-center gap-7">
            <img
              src="/img/soltech_white.png"
              alt="logo"
              className="cursor-pointer w-14"
              onClick={toggleDropdownMenu}
            />

            {isDropdownOpen && (
              <div className="absolute left-0 w-48 mt-2 bg-black rounded-lg shadow-lg top-full dropdown-menu">
                <a
                  href="#profile"
                  className="flex items-center gap-2 p-2 hover:bg-gray-700"
                >
                  <FaUser /> Home
                </a>
                <a
                  href="#settings"
                  className="flex items-center gap-2 p-2 hover:bg-gray-700"
                >
                  <FaCog /> Download 
                </a>
                <a
                  href="#logout"
                  className="flex items-center gap-2 p-2 hover:bg-gray-700"
                >
                  <FaSignOutAlt /> Share
                </a>
                <a
                  href="#logout"
                  className="flex items-center gap-2 p-2 hover:bg-gray-700"
                >
                  <FaSignOutAlt /> Demo
                </a>
              </div>
            )}

            <Button
              id="product-button"
              title="CONTESTS"
              rightIcon={<IoIosArrowRoundForward />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex items-center h-full">
            <div className="items-center hidden gap-4 md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
              <Button
                id="login-button"
                title="Login"
                containerClass="bg-blue-50 flex items-center justify-center gap-1"
              />
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
                autoPlay // Ensure autoplay is enabled
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex items-center ml-4 -mt-2 text-white md:hidden"
            >
              {isMobileMenuOpen ? <IoCloseOutline size={24} /> : <BiMenuAltRight size={32} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={clsx("mobile-menu", { open: isMobileMenuOpen })}>
          <button
            onClick={toggleMobileMenu}
            className="absolute text-white top-4 right-4"
          >
            <IoCloseOutline size={32} />
          </button>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="mb-2 nav-hover-btn"
              onClick={toggleMobileMenu}
              style={{ "--i": index }}
            >
              {item}
            </a>
          ))}
          <Button
            id="product-button-mobile"
            title="CONTESTS"
            rightIcon={<IoIosArrowRoundForward />}
            containerClass="bg-blue-50 flex items-center justify-center gap-1 mt-4"
          />
          <Button
            id="login-button-mobile"
            title="Login"
            containerClass="bg-blue-50 flex items-center justify-center gap-1 mt-4"
          />
        </div>
      </header>
    </div>
  );
};

export default NavBar;