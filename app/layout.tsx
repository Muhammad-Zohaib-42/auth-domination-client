import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Auth Domination",
  description: "Complete Mern Stack Auth Project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`${poppins.className} min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}>{children}</body>
    </html>
  );
}
