"use client";
import { useState, useEffect } from "react";

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (aboutTop <= windowHeight && aboutTop >= 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button className="absolute bottom-[4%] px-[7%] flex justify-start items-center animate-bounce bg-transparent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-circle-arrow-down"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="m8 12 4 4 4-4" />
      </svg>
      <p className="pl-2 pt-1"> Scroll</p>
    </button>
  );
}
