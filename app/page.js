"use client";

import Navbar from "./pages/Navbar";
import Heropage from "./pages/Heropage";
import Aboutpage from "./pages/Aboutpage";
import Profession from "./pages/Profession";
import Contactpage from "./pages/Contactpage";
import Footer from "./pages/Footer";
import RevealAnimation from "./components/RevealAnimation";
import Porfoliogallery from "./pages/Porfoliogallery";


export default function Home() {
  return (
    <>
      <RevealAnimation />
      <div className="main-wrapper">
        <div className="navbar-wrapper sticky top-0 left-0 w-full h-full">
          <Navbar />
        </div>

        <main className="w-full h-full">
          <section id="hero" className="hero-wrapper pt-[90px] bg-slate-50">
            <Heropage />
          </section>

          <section id="aboutpage" className="bg-slate-50 px-4">
            <Aboutpage />
          </section>

          <section id="profession" className="bg-sky-950  px-4">
            <Profession />
          </section>

          <section id="projects" className="">
            <Porfoliogallery />
          </section>

          <section id="contact" className="bg-slate-50">
            <Contactpage />
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
