import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="h-[100vh] my-[6%]">
      <Image
        className="relative mx-[7%]"
        src="/BG.png"
        width={150}
        height={40}
      />
      <div className="flex justify-between px-[7%] -mt-[10%]">
        <h1 className="text-[50px] z-20 text-red-500 w-[21%]">About Me</h1>
        <p className="text-[20px] text-[#f8f8ff]">
          Well versed in HTML, JS, CSS, React, Next.js, Tailwind, and Node.js,
          as well as Django and Python. Passionate about creating user-friendly
          and efficient web applications.
        </p>
      </div>
    </div>
  );
}
