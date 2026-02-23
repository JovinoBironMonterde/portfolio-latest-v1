// C:\xampp\htdocs\portfolio\app\pages\Contactpage.jsx
import React from 'react'
import FormComponent from '../components/formcomponent';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMap from '../components/ContactMap';

const contactDetails = [
  { icon: <ContactPhoneIcon fontSize="small" />, label: '09704566075', sub: 'TNT' },
  { icon: <ContactPhoneIcon fontSize="small" />, label: '09973401144', sub: 'TM' },
  { icon: <MailIcon fontSize="small" />, label: 'jovinobiro.monterdejr@gmail.com', sub: 'Email' },
];

const socialLinks = [
  { href: 'https://wa.me/639704566075',                                    icon: <WhatsAppIcon fontSize="small" />,  label: 'WhatsApp'  },
  { href: 'https://www.facebook.com/messages/e2ee/t/7199980096767454',     icon: <FacebookIcon fontSize="small" />,  label: 'Facebook'  },
  { href: 'https://wa.me/1234567890',                                       icon: <TwitterIcon fontSize="small" />,   label: 'Twitter'   },
  { href: 'https://wa.me/1234567890',                                       icon: <InstagramIcon fontSize="small" />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/jovinobironmonterde/',               icon: <LinkedInIcon fontSize="small" />,  label: 'LinkedIn'  },
];

function Contactpage() {
  return (
    <div className="w-full h-auto" style={{ background: '#0d1117' }}>

      {/* ── Top section: info + form ── */}
      <div className="relative overflow-hidden">

        {/* Decorative radial glows */}
        {/* <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(22,146,161,0.12) 0%, transparent 70%)' }}
        /> */}
        {/* <div
          className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(22,146,161,0.07) 0%, transparent 70%)' }}
        /> */}
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 py-20 lg:py-32">

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#1692a1' }}>
              Reach Out
            </span>
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Get in Touch
            </h2>
            <div className="mt-4 mx-auto w-14 h-[3px] rounded-full" style={{ background: '#1692a1' }} />
            <p className="mt-5 text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Have a project in mind or just want to say hello? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          {/* Two-column: info | form */}
          <div className="lg:flex gap-12 xl:gap-20 items-start">

            {/* ── LEFT – contact info ── */}
            <div className="w-full lg:w-2/5 mb-12 lg:mb-0">

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                {contactDetails.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.border = '1px solid rgba(22,146,161,0.35)';
                      e.currentTarget.style.background = 'rgba(22,146,161,0.06)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {/* Icon badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1692a1] group-hover:text-white"
                      style={{
                        background: 'rgba(22,146,161,0.12)',
                        color: '#1692a1',
                        border: '1px solid rgba(22,146,161,0.2)',
                      }}
                    >
                      {item.icon}
                    </div>
                    {/* Text */}
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        {item.label}
                      </p>
                      <p className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Thin divider */}
              <div className="w-full h-[1px] mb-10" style={{ background: 'rgba(255,255,255,0.06)' }} />

              {/* Social links */}
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.25em] font-bold mb-5"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  Find me on
                </p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: 'rgba(22,146,161,0.10)',
                        color: '#1692a1',
                        border: '1px solid rgba(22,146,161,0.2)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#1692a1';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = '#1692a1';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(22,146,161,0.10)';
                        e.currentTarget.style.color = '#1692a1';
                        e.currentTarget.style.borderColor = 'rgba(22,146,161,0.2)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT – form card ── */}
            <div className="w-full lg:w-3/5">
              <div
                className="rounded-2xl p-7 lg:p-10"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(22,146,161,0.07)',
                }}
              >
                {/* Card label */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-5 h-[2px] rounded-full" style={{ background: '#1692a1' }} />
                  <span
                    className="text-[10px] uppercase tracking-[0.25em] font-bold"
                    style={{ color: '#1692a1' }}
                  >
                    Send a Message
                  </span>
                </div>

                <FormComponent />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Map ── */}
      {/* <div className="w-full relative">
        <div
          className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #0d1117, transparent)' }}
        />
        <ContactMap />
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0d1117, transparent)' }}
        />
      </div> */}

    </div>
  );
}

export default Contactpage;