// C:\xampp\htdocs\portfolio\app\pages\Footer.jsx
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const navItems = [
  { label: 'Hero',       href: '#hero'       },
  { label: 'About',      href: '#aboutpage'  },
  { label: 'Profession', href: '#profession' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

const socialLinks = [
  { href: 'https://github.com/JovinoBironMonterde',                         icon: <GitHubIcon fontSize="small" />,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/jovinobironmonterde/',               icon: <LinkedInIcon fontSize="small" />, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/messages/e2ee/t/7199980096767454',      icon: <FacebookIcon fontSize="small" />, label: 'Facebook' },
  { href: 'https://wa.me/639704566075',                                      icon: <WhatsAppIcon fontSize="small" />, label: 'WhatsApp' },
];

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ background: '#080c12' }}>

      {/* Top teal glow accent line */}
      <div
        className="w-full h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #1692a1 50%, transparent 100%)',
        }}
      />

      {/* Decorative background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #1692a1, transparent)' }}
      />

      {/* ── Main content ── */}
      <div className="relative max-w-[1200px] mx-auto px-6 py-14" style={{ background: '#080c12' }}>
        <div className="lg:flex items-start justify-between gap-10">

          {/* Brand column */}
          <div className="mb-10 lg:mb-0 max-w-[260px]">
            <p
              className="text-2xl font-black tracking-tight text-white mb-1"
              style={{ letterSpacing: '-0.02em' }}
            >
              Jovino <span style={{ color: '#1692a1' }}>Monterde</span>
            </p>
            <p
              className="text-[11px] uppercase tracking-widest font-medium mb-5"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Frontend Developer · Freelancer
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Crafting pixel-perfect, responsive web experiences with modern technologies.
            </p>
          </div>

          {/* Nav links */}
          <div hidden className="mb-10 lg:mb-0">
            <p
              className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#1692a1'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    <span
                      className="w-3 h-[1px] rounded-full transition-all duration-200 group-hover:w-5"
                      style={{ background: '#1692a1' }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Connect
            </p>

            {/* Email */}
            <a
              href="mailto:jovinobiro.monterdejr@gmail.com"
              className="block text-xs mb-6 transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1692a1'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              jovinobiro.monterdejr@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.4)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#1692a1';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#1692a1';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(22,146,161,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="py-5 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
          © {new Date().getFullYear()} Jovino Monterde. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer