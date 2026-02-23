// C:\xampp\htdocs\portfolio\app\pages\Porfoliogallery.jsx
'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, X } from 'lucide-react';
import { projectsData } from '../components/ProjectData';
import Tooltip from '@mui/material/Tooltip';

export default function Porfoliogallery() {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [childImageIndex, setChildImageIndex] = useState(0);
  const topRef = useRef(null);

  const handleSelectProject = (index) => {
    setSelectedIndex(index);
    setChildImageIndex(0);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleClosePreview = () => setSelectedIndex(null);

  const goToChildPrevious = () => {
    const len = projectsData[selectedIndex].children.length;
    setChildImageIndex((prev) => (prev === 0 ? len - 1 : prev - 1));
  };

  const goToChildNext = () => {
    const len = projectsData[selectedIndex].children.length;
    setChildImageIndex((prev) => (prev === len - 1 ? 0 : prev + 1));
  };

  /* ── PREVIEW VIEW ── */
  if (selectedIndex !== null) {
    const currentProject = projectsData[selectedIndex];
    const currentChildren = currentProject.children;

    return (
      <div ref={topRef} className="min-h-screen w-full" style={{ background: '#0d1117' }}>

        {/* Top bar */}
        <div
          className="sticky top-0 z-50 w-full flex items-center justify-between px-6 lg:px-12 py-4"
          style={{
            background: 'rgba(13,17,23,0.9)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(22,146,161,0.15)',
          }}
        >
          <button
            onClick={handleClosePreview}
            className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#1692a1'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Gallery
          </button>

          <h1 className="hidden lg:block text-white font-bold text-lg tracking-tight">
            {currentProject.title}
          </h1>

          {currentProject.linkViewPage ? (
            <a
              href={currentProject.linkViewPage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: 'rgba(22,146,161,0.12)',
                color: '#1692a1',
                border: '1px solid rgba(22,146,161,0.25)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1692a1'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(22,146,161,0.12)'; e.currentTarget.style.color = '#1692a1'; }}
            >
              <ExternalLink size={14} />
              View Live
            </a>
          ) : <div className="w-24" />}
        </div>

        {/* Main content */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-8">

          {/* Mobile title */}
          <h1 className="lg:hidden text-white font-bold text-xl mb-6 text-center">{currentProject.title}</h1>

          <div className="lg:flex gap-8 items-start">

            {/* ── Image area ── */}
            <div className="w-full lg:w-[65%] xl:w-[70%]">

              {/* Main image */}
              <div
                className="relative w-full overflow-hidden rounded-2xl mb-4"
                style={{
                  aspectRatio: '16/10',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                }}
              >
                <img
                  src={currentChildren[childImageIndex]}
                  alt={`${currentProject.alt} - Image ${childImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Prev / Next arrows */}
                {currentChildren.length > 1 && (
                  <>
                    <button
                      onClick={goToChildPrevious}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{ background: 'rgba(0,0,0,0.55)', color: 'white', backdropFilter: 'blur(4px)' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#1692a1'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={goToChildNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{ background: 'rgba(0,0,0,0.55)', color: 'white', backdropFilter: 'blur(4px)' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#1692a1'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Image counter badge */}
                <div
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                >
                  {childImageIndex + 1} / {currentChildren.length}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {currentChildren.map((childSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setChildImageIndex(idx)}
                    className="flex-shrink-0 w-20 h-14 lg:w-24 lg:h-16 rounded-lg overflow-hidden transition-all duration-200"
                    style={{
                      border: idx === childImageIndex
                        ? '2px solid #1692a1'
                        : '2px solid rgba(255,255,255,0.08)',
                      opacity: idx === childImageIndex ? 1 : 0.5,
                    }}
                    onMouseEnter={e => { if (idx !== childImageIndex) e.currentTarget.style.opacity = '0.8'; }}
                    onMouseLeave={e => { if (idx !== childImageIndex) e.currentTarget.style.opacity = '0.5'; }}
                  >
                    <img src={childSrc} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Info sidebar ── */}
            <div className="w-full lg:w-[35%] xl:w-[30%] mt-8 lg:mt-0">
              <div
                className="rounded-2xl p-6 lg:p-8 sticky top-24"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-[2px] rounded-full bg-[#1692a1]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1692a1]">Project Info</span>
                </div>

                {/* Title */}
                <h2 className="text-white font-black text-xl lg:text-2xl mb-3 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  {currentProject.title}
                </h2>

                {/* Divider */}
                <div className="w-10 h-[2px] rounded-full mb-5" style={{ background: 'linear-gradient(90deg, #1692a1, transparent)' }} />

                {/* Description */}
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {currentProject.description}
                </p>

                {/* Tech stack */}
                {currentProject.tech?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tech.map((item, idx) => (
                        <Tooltip key={idx} title={item.title} placement="top">
                          <div
                            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-default transition-all duration-200"
                            style={{
                              background: 'rgba(22,146,161,0.10)',
                              border: '1px solid rgba(22,146,161,0.2)',
                            }}
                          >
                            <img src={item.ImgLogo} alt={item.title} className="w-5 h-5 object-contain" />
                            <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>
                              {item.title}
                            </span>
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                {currentProject.linkViewPage && (
                  <a
                    href={currentProject.linkViewPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-200"
                    style={{
                      background: '#1692a1',
                      color: 'white',
                      boxShadow: '0 6px 24px rgba(22,146,161,0.3)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(22,146,161,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(22,146,161,0.3)'}
                  >
                    <ExternalLink size={15} />
                    Visit Live Project
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  /* ── GALLERY VIEW ── */
  return (
    <div className="min-h-screen w-full px-4 md:px-10 xl:px-20 py-16" style={{ background: '#0d1117' }}>

      {/* Gallery header */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#1692a1] mb-3">
          My Work
        </span>
        <h2
          className="font-black text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
        >
          Project Gallery
        </h2>
        <div className="mt-4 mx-auto w-14 h-[3px] rounded-full bg-[#1692a1]" />
        <p className="mt-5 text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Click on any project to explore screenshots, tech stack, and details.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1400px] mx-auto">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => handleSelectProject(idx)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            style={{
              aspectRatio: '4/3',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
          >
            {/* Project image */}
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: 'rgba(13,17,23,0.82)', backdropFilter: 'blur(2px)' }}
            >
              {/* Teal accent line */}
              <div className="w-8 h-[2px] rounded-full bg-[#1692a1] mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />

              <h3 className="text-white text-sm sm:text-base font-bold text-center px-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.title}
              </h3>

              <p className="text-[10px] mt-2 font-semibold tracking-widest uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                style={{ color: '#1692a1' }}>
                View Project
              </p>
            </div>

            {/* Image count badge */}
            <div
              className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(13,17,23,0.75)',
                color: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {project.children.length} {project.children.length === 1 ? 'img' : 'imgs'}
            </div>

            {/* Bottom gradient for title peek */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 group-hover:opacity-0 transition-opacity duration-300"
              style={{ background: 'linear-gradient(transparent, rgba(13,17,23,0.85))' }}
            />
            <p className="absolute bottom-3 left-0 right-0 text-center text-xs font-semibold text-white px-3 group-hover:opacity-0 transition-opacity duration-300 truncate">
              {project.title}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}