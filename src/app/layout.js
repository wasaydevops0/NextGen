import { Urbanist, Outfit, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "NextGen Studio | Web, Mobile App & UI/UX Design Agency",
  description:
    "NextGen Studio is a premier digital agency specializing in custom web development, mobile applications, and world-class UI/UX design.",
  openGraph: {
    title: "NextGen Studio | Web, Mobile App & UI/UX Design Agency",
    description:
      "NextGen Studio is a premier digital agency specializing in custom web development, mobile applications, and world-class UI/UX design.",
    siteName: "NextGen Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Studio | Web, Mobile App & UI/UX Design Agency",
    description:
      "NextGen Studio is a premier digital agency specializing in custom web development, mobile applications, and world-class UI/UX design.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${urbanist.variable} ${outfit.variable} ${inter.variable} font-sans bg-[#171717] text-[#FCFCFD] antialiased overflow-x-hidden`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
