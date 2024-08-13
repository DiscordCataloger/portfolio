"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    console.log("Pathname changed:", pathname);
    setActive(pathname);
  }, [pathname]);

  return (
    <header>
      <div
        className={`fixed flex gap-x-2 px-[7%] w-full mt-14 ${
          active === "/about" ? "bg-[#000C24]" : "bg-transparent"
        } z-30`}
      >
        <Link href="/">
          <div className="relative flex flex-col justify-center items-center w-[188px] h-[132.98px] cursor-pointer">
            <span
              className={`absolute inset-0 bg-cover transition-opacity duration-500 ${
                active === "/" ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: "url('/Vector.png')" }}
            ></span>
            <p
              className={`relative text-[21.4px] text-center w-[179.58px] h-[132.98px] leading-[98px] font-bold ${
                active === "/" ? "text-red-500" : "text-[#f8f8ff]"
              }`}
            >
              Home
            </p>
          </div>
        </Link>
        <Link href="/about">
          <div className="relative flex flex-col justify-center items-center w-[188px] h-[132.98px] cursor-pointer">
            <span
              className={`absolute inset-0 bg-cover transition-opacity duration-500 ${
                active === "/about" ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: "url('/Vector.png')" }}
            ></span>
            <p
              className={`relative text-[21.4px] text-center w-[179.58px] h-[132.98px] leading-[98px] font-bold ${
                active === "/about" ? "text-red-500" : "text-[#f8f8ff]"
              }`}
            >
              About
            </p>
          </div>
        </Link>
        <Link href="/projects">
          <div className="relative flex flex-col justify-center items-center w-[188px] h-[132.98px] cursor-pointer">
            <span
              className={`absolute inset-0 bg-cover transition-opacity duration-500 ${
                active === "/projects" ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: "url('/Vector.png')" }}
            ></span>
            <p
              className={`relative text-[21.4px] text-center w-[179.58px] h-[132.98px] leading-[98px] font-bold ${
                active === "/projects" ? "text-red-500" : "text-[#f8f8ff]"
              }`}
            >
              Projects
            </p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="relative flex flex-col justify-center items-center w-[188px] h-[132.98px] cursor-pointer">
            <span
              className={`absolute inset-0 bg-cover transition-opacity duration-500 ${
                active === "/contact" ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: "url('/Vector.png')" }}
            ></span>
            <p
              className={`relative text-[21.4px] text-center w-[179.58px] h-[132.98px] leading-[98px] font-bold ${
                active === "/contact" ? "text-red-500" : "text-[#f8f8ff]"
              }`}
            >
              Contact
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
