import { League_Spartan } from "next/font/google";
import "./globals.css";
import Scroll from "@/components/scroll";
import Header from "@/components/header";

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Tsai - An Aspiring Full Stack Developer",
  description:
    "Jonathan Tsai is an aspiring full stack developer based in Hong Kong, with a passion for creating user-friendly and efficient web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png?v=1" />
      </head>
      <body
        className={`${league_spartan.className} bg-[url('/Desktop.png')] bg-cover bg-local bg-[#f8f8ff]`}
      >
        <Header />
        {children}
        <Scroll />
      </body>
    </html>
  );
}
