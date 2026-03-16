// C:\xampp\htdocs\portfolio\app\pages\Aboutpage.jsx
import React from 'react'
import Image from 'next/image'
// import AboutImage from '../../public/assets/img/6.png';
import AboutImage from '../../public/assets/img/imagev2.png';
import RevealAnimation from '../components/RevealAnimation';

import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';

const socialLinks = [
  { href: "https://github.com/JovinoBironMonterde", icon: <GitHubIcon fontSize="small" />, label: "GitHub" },
  { href: "https://www.facebook.com/messages/e2ee/t/7199980096767454", icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
  { href: "https://wa.me/1234567890", icon: <TwitterIcon fontSize="small" />, label: "Twitter" },
  { href: "https://wa.me/1234567890", icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
  { href: "https://www.linkedin.com/in/jovinobironmonterde/", icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn" },
];

const highlights = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
];

function Aboutpage() {
  return (
    <div className='relative w-full max-w-[1300px] mx-auto rounded-3xl overflow-hidden lg:flex md:flex items-stretch reveal fade-bottom'>
      
      {/* ── Left: Image Panel ── */}
      <div
        className="relative image-profile-image w-full lg:w-[45%] flex justify-center items-end overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0e2a2d 0%, #0d1117 60%, #0a2428 100%)', minHeight: '480px' }}
      >
        {/* Decorative teal circle behind image */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(22,146,161,0.25) 0%, transparent 70%)' }}
        />

        {/* Teal ring accent */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border border-[#1692a1]/20"
        />

        {/* Corner accent lines */}
        <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#1692a1]/50 rounded-tl-lg" />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#1692a1]/50 rounded-br-lg" />

        {/* Profile image */}
        <div className="relative z-10 px-8 pt-10 pb-0">
          <Image
            className='z-10 h-auto drop-shadow-2xl -mb-32'
            src={AboutImage}
            alt="Jovino Monterde"
            width={210}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Stats strip at bottom of image panel */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around py-4 px-4 z-20"
          style={{ background: 'rgba(13,17,23,0.75)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(22,146,161,0.15)' }}
        >
          {highlights.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl font-black" style={{ color: '#1692a1' }}>{stat.value}</p>
              <p className="text-[9px] uppercase tracking-widest font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Content Panel ── */}
      <div
        className="profile-image w-full lg:w-[55%] flex items-center z-10"
        style={{ background: 'linear-gradient(135deg, #f8fafb 0%, #eef2f5 100%)' }}
      >
        <div className="w-full h-auto px-8 lg:px-14 py-14">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] rounded-full bg-[#1692a1]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1692a1]">About Me</span>
          </div>

          {/* Heading */}
          <h2
            className="font-black leading-tight mb-2"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#0d1117', letterSpacing: '-0.02em' }}
          >
            Jovi <span style={{ color: '#1692a1' }}>Monterde</span>
          </h2>

          {/* Sub-title */}
          <p className="text-sm font-semibold tracking-wide mb-6" style={{ color: 'rgba(0,0,0,0.35)' }}>
            Frontend Developer · Freelancer
          </p>

          {/* Divider */}
          <div
            className="w-12 h-[3px] rounded-full mb-8"
            style={{ background: 'linear-gradient(90deg, #1692a1, transparent)' }}
          />

          {/* Bio text */}
          <div className="space-y-4 mb-10">
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              I'm a <strong className="font-semibold text-[#0d1117]">front-end developer</strong> with over
              2 years of experience creating responsive and user-friendly web applications. I enjoy turning
              designs into functional, pixel-perfect websites and have worked on a variety of projects —
              from single-page apps to full e-commerce platforms.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
              I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like
              to work together or chat about web development!
            </p>
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['React / Next.js', 'Tailwind CSS', 'MUI', 'Bootstarp'].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(22,146,161,0.08)',
                  color: '#1692a1',
                  border: '1px solid rgba(22,146,161,0.2)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action row */}
          <div className="flex items-center gap-5 flex-wrap">
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(22,146,161,0.08)',
                    color: '#1692a1',
                    border: '1px solid rgba(22,146,161,0.2)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#1692a1';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#1692a1';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(22,146,161,0.08)';
                    e.currentTarget.style.color = '#1692a1';
                    e.currentTarget.style.borderColor = 'rgba(22,146,161,0.2)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-[1px] h-8 hidden lg:block" style={{ background: 'rgba(0,0,0,0.1)' }} />

            {/* Download CV button */}
            <a
              href="https://drive.google.com/file/d/1Lk-tpj-E8KljqWgRScaEPxDykjNPx8zO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: '#1692a1',
                color: 'white',
                boxShadow: '0 4px 20px rgba(22,146,161,0.35)',
              }}
            >
              <DownloadIcon fontSize="small" />
              Resume
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Aboutpage