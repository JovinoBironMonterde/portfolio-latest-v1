import { Geist, Geist_Mono } from "next/font/google";
import "../public/css/globals.css";
import "../public/css/HeroStyle.css";
import Navbar from "./pages/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jovino Monterde",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="navbar-wrapper sticky top-0 left-0 w-full h-full">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
