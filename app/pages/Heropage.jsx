// C:\xampp\htdocs\portfolio\app\pages\Heropage.jsx
"use client";
import React from 'react';
import '../../public/css/HeroStyle.css';
import Typography from '@mui/material/Typography';
import FormComponent from '../components/formcomponent';
import TypingLoop from '../components/TypingLoop';

function Heropage() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Lk-tpj-E8KljqWgRScaEPxDykjNPx8zO/view?usp=sharing",
      "_blank"
    );
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen lg:flex items-center overflow-hidden">

      {/* ── Decorative Background Accents ── */}
      {/* Large radial glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(22,146,161,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Smaller accent bottom-right */}
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(22,146,161,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative hero-details-wrapper w-full z-10 px-6 lg:px-20 py-28 lg:py-0">

        {/* ── DESKTOP ── */}
        <div className="details-box-desktop">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] rounded-full bg-[#1692a1]" />
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ color: '#1692a1' }}
            >
              Portfolio
            </span>
          </div>

          {/* Greeting */}
          <p
            className="text-lg font-medium mb-1"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="font-black leading-none mb-4"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Jovino{' '}
            <span style={{ color: '#1692a1' }}>Monterde</span>
          </h1>

          {/* Typing animation */}
          <div
            className="text-xl lg:text-3xl font-bold mb-8"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            <TypingLoop words={['Frontend Developer', 'Freelancer']} />
          </div>

          {/* Divider */}
          <div
            className="w-16 h-[3px] rounded-full mb-8"
            style={{ background: 'linear-gradient(90deg, #1692a1, transparent)' }}
          />

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-12"
            style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px' }}
          >
            Transforming designs into fully responsive, user-friendly front-end web applications.
            I focus on delivering pixel-perfect implementations, optimizing performance, and seamlessly
            integrating modern back-end technologies to create complete, efficient, and engaging solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: '#1692a1',
                color: 'white',
                border: '2px solid #1692a1',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              {/* Hover overlay */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              />
            </button>

            <button
              onClick={openResume}
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#1692a1';
                e.currentTarget.style.color = '#1692a1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'white';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 mt-14">
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Done' },
              { value: '5+', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <p
                  className="text-2xl lg:text-3xl font-black"
                  style={{ color: '#1692a1' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] uppercase tracking-widest font-medium mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="details-box-mobile text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-[2px] rounded-full bg-[#1692a1]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#1692a1]">Portfolio</span>
            <div className="w-6 h-[2px] rounded-full bg-[#1692a1]" />
          </div>

          <p className="text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Hello, I'm
          </p>

          <h1
            className="font-black leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', color: 'white', letterSpacing: '-0.02em' }}
          >
            Jovino <span style={{ color: '#1692a1' }}>Monterde</span>
          </h1>

          <div className="text-lg font-bold mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <TypingLoop words={['Frontend Developer', 'Freelancer']} />
          </div>

          <p
            className="text-sm leading-relaxed mb-8 mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '360px' }}
          >
            Transforming designs into fully responsive, user-friendly front-end web applications.
            I focus on delivering pixel-perfect implementations and seamlessly integrating modern back-end technologies.
          </p>

          {/* Mobile buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300"
              style={{ background: '#1692a1', color: 'white', border: '2px solid #1692a1' }}
            >
              View Projects
            </button>
            <button
              onClick={openResume}
              className="px-7 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300"
              style={{ background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.2)' }}
            >
              Download CV
            </button>
          </div>

          {/* Mobile stats */}
          <div className="flex justify-center gap-8 mt-10">
            {[
              { value: '3+', label: 'Years' },
              { value: '10+', label: 'Projects' },
              { value: '100%', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-xl font-black text-[#1692a1]">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact Form (xl only) ── */}
      <div className="relative w-full hidden xl:flex items-center justify-center z-10 pr-16">
        {/* Floating card wrapper */}
        <div
          className="w-full max-w-[480px] rounded-2xl p-8 border border-white/10"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(22,146,161,0.1)',
          }}
        >
          <p
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-6"
            style={{ color: '#1692a1' }}
          >
            Send a Message
          </p>
          <FormComponent />
        </div>
      </div>

    </div>
  );
}

export default Heropage;