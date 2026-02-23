// C:\xampp\htdocs\portfolio\app\pages\Profession.jsx
import React from 'react'
import { SkillsData } from "../components/SkillsData";
import { ExperienceData } from "../components/ExperienceData";

function Profession() {
  return (
    <div className="relative w-full overflow-hidden" style={{ background: '#0a0f16' }}>

      {/* Decorative glow accents */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #1692a1, transparent)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #1692a1, transparent)' }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-32">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: '#1692a1' }}
          >
            What I bring to the table
          </span>
          <h2
            className="font-black text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            Skills &amp; Experience
          </h2>
          <div className="mt-4 mx-auto w-14 h-[3px] rounded-full" style={{ background: '#1692a1' }} />
        </div>

        <div className="lg:flex  items-start">

          {/* ══ SKILLS ══ */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 pr-0 lg:pr-8 xl:pr-8">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-[2px] rounded-full" style={{ background: '#1692a1' }} />
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold" style={{ color: '#1692a1' }}>
                Technical Skills
              </p>
            </div>

            {SkillsData.map((skills, index) => (
              <div key={skills.id} className={`Content-${index + 1} w-full h-auto mb-10 xl:mb-4 reveal fade-left`}>
                <div
                  className="w-full h-16 rounded-2xl relative overflow-hidden mb-10"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  {/* Language label — left side, outside the bar fill */}
                  <div
                    className="absolute left-4 p-3 bottom-2 z-50 text-sm font-semibold"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {skills.language}
                  </div>

                  {/* Filled bar — grows from the RIGHT */}
                  <div
                    className="absolute right-0 top-0 h-16 rounded-2xl relative overflow-hidden"
                    style={{
                      width: skills.percentage,
                      background: 'linear-gradient(90deg, #1db8cc 0%, #1692a1 40%, #0b6b77 100%)',
                    }}
                  >
                    {/* Shimmer */}
                    <span
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                        animation: 'barShimmer 3s ease-in-out infinite',
                      }}
                    />
                    {/* Percentage label — right side inside bar */}
                    <span
                      className="absolute right-0 z-50 top-0 translate-y-4 px-4 text-white font-black text-2xl lg:text-3xl"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {skills.percentage}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <style>{`
              @keyframes barShimmer {
                0%   { transform: translateX(-100%); }
                100% { transform: translateX(400%); }
              }
            `}</style>
          </div>

          {/* Mobile separator */}
          <div
            className="block lg:hidden w-full h-[1px] mb-16"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          />

          {/* ══ EXPERIENCE TIMELINE ══ */}
          <div className="w-full lg:w-1/2">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-[2px] rounded-full" style={{ background: '#1692a1' }} />
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold" style={{ color: '#1692a1' }}>
                Work Experience
              </p>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[5px] top-3 bottom-3 w-[2px] rounded-full"
                style={{ background: 'linear-gradient(to bottom, #1692a1, rgba(22,146,161,0.08))' }}
              />

              {ExperienceData.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-10 pb-12 last:pb-0 reveal fade-bottom group"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:bg-[#1692a1]"
                    style={{
                      borderColor: '#1692a1',
                      background: '#0a0f16',
                      boxShadow: '0 0 0 4px rgba(22,146,161,0.1)',
                    }}
                  />

                  {/* Card */}
                  <div
                    className="rounded-2xl p-5 transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(22,146,161,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(22,146,161,0.25)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    }}
                  >
                    {/* Date badge */}
                    <span
                      className="inline-block text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-3"
                      style={{
                        background: 'rgba(22,146,161,0.12)',
                        color: '#1692a1',
                        border: '1px solid rgba(22,146,161,0.2)',
                      }}
                    >
                      {exp.date}
                    </span>

                    <p
                      className="font-black text-white leading-tight mb-1"
                      style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
                    >
                      {exp.company}
                    </p>

                    <p className="text-sm font-semibold mb-3" style={{ color: '#1692a1' }}>
                      {exp.position}
                    </p>

                    <div className="w-8 h-[1px] mb-3 rounded-full" style={{ background: 'rgba(22,146,161,0.3)' }} />

                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profession