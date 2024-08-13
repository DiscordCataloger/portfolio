import { useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Namecard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="px-[7%] py-[20%] h-[100vh]">
      <p className="text-[100px] font-bold font-outline-2">
        {isClient && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("JONATHAN TSAI").start();
            }}
          />
        )}
      </p>
      <p className="text-[50px] font-semibold text-[#f8f8ff]">
        Junior Fullstack Web Developer
      </p>
      <div className="flex justify-start gap-2">
        <Link href="https://www.linkedin.com/in/jonathan-tsai-5a2786188/">
          <button className="bg-[url('/linkedin.png')] bg-cover w-[50px] h-[50px]"></button>
        </Link>
        <Link href="https://github.com/DiscordCataloger">
          <button className="bg-[url('/github.png')] bg-cover w-[50px] h-[50px]"></button>
        </Link>
        <Link
          href="mailto:jonathantsai2@gmail.com"
          className="bg-cover w-[50px] h-[50px]"
        >
          <svg
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z"
                fill="#928A97"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
