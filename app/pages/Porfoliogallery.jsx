'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InfoIcon from '@mui/icons-material/Info';
import { projectsData } from '../components/ProjectData';
import Tooltip from '@mui/material/Tooltip';

export default function Porfoliogallery() {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */

  const [selectedIndex, setSelectedIndex] = useState(null); // null = gallery view
  const [childImageIndex, setChildImageIndex] = useState(0);

  const topRef = useRef(null);

  const navItems = [
    { name: 'Projects', path: '#projects' },
  ];

  /* -------------------------------------------------------------------------- */
  /*                                  HANDLERS                                  */
  /* -------------------------------------------------------------------------- */

  const handleSelectProject = (index) => {
    setSelectedIndex(index);
    setChildImageIndex(0);
    topRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleClosePreview = () => {
    setSelectedIndex(null);
  };

  const goToChildPrevious = () => {
    const childrenLength =
      projectsData[selectedIndex].children.length;

    setChildImageIndex((prev) =>
      prev === 0 ? childrenLength - 1 : prev - 1
    );
  };

  const goToChildNext = () => {
    const childrenLength =
      projectsData[selectedIndex].children.length;

    setChildImageIndex((prev) =>
      prev === childrenLength - 1 ? 0 : prev + 1
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                                PREVIEW VIEW                                */
  /* -------------------------------------------------------------------------- */

  if (selectedIndex !== null) {
    const currentProject = projectsData[selectedIndex];
    const currentChildren = currentProject.children;

    return (
      <div className="h-auto py-[94px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900  px-4">
        <div className="mx-auto">
          <div className="w-full max-w-[1600px] text-center xl:hidden mx-auto text-white mb-3">
            <h1 className="text-base sm:text-lg md:text-[40px] font-semibold my-4">{currentProject.title}</h1>
          </div>
          
          {/* Header */}
          <div className="w-full max-w-[1600px] flex items-center justify-between mx-auto text-white mb-3">
            <button
              onClick={handleClosePreview}
              className="text-white rounded hover:text-blue-600 transition z-20"
            >
              Back to Gallery
            </button>
            <h1 className="text-base sm:text-lg md:text-[40px] font-semibold hidden xl:block my-4">{currentProject.title}</h1>
            {currentProject.linkViewPage && (
              <a
                href={currentProject.linkViewPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white rounded hover:text-blue-600 transition z-20"
              >
                View Page
              </a>
            )}

        
          </div>

          {/* Main Carousel */}
          <div ref={topRef} className="relative overflow-hidden">
            <div className="relative max-w-[1600px] w-full md:h-[50vh] lg:h-[50vh] xl:h-[82vh] aspect-video rounded-xl overflow-hidden mx-auto">

              {/* Info Box */}
              <div className="InfoWrapper absolute left-0 top-0">
                <InfoIcon className="absolute left-1 md:left-3 top-1 md:top-3  text-base md:text-xl text-white" />

                <div className="HeaderBox Header-3rem py-10 xl:py-30 px-30 xl:px-50">
                  <div className="w-full h-auto p-20 space-y-4">

                    <button hidden
                      onClick={handleClosePreview}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-base sm:text-lg z-20"
                    >
                      Back to Gallery
                    </button>

                    {/* Project Info */}
                    <div className="w-full max-w-[600px] text-white">
                      <h1>{currentProject.title}</h1>
                      <p>{currentProject.description}</p>
                    </div>

                    {/* Tech Stack */}
                    
                    
         
                    <div className="w-full h-auto space-y-2 flex items-center gap-4">
                    {currentProject.tech?.map((item, idx) => (
                      <Tooltip
                        key={idx}               // ✅ key moved here
                        title={item.title}
                        placement="top"
                      >
                        <div className="w-auto flex items-center gap-2 bg-sky-950   text-white text-xs p-3 rounded-full">
                          <img
                            src={item.ImgLogo}
                            alt={item.title}
                            className="w-6 h-6 object-contain"
                          />
                          {/* <span>{item.title}</span> */}
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                       

                    {/* Links */}
                    {/* <div className="w-full flex gap-4">
                      <a
                        href={currentProject.linkViewPage}
                        target="_blanck"
                      >
                        View Page
                      </a>
                      <a
                        href={currentProject.linkViewCode}
                        target="_blanck"
                      >
                        View Code
                      </a>
                    </div> */}

                  </div>
                </div>
              </div>

              {/* Main Image */}
              <img
                src={currentChildren[childImageIndex]}
                alt={`${currentProject.alt} - Image ${childImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Child Carousel */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:left-auto md:translate-x-0 md:right-4">
                <div className="flex items-center gap-2">

                  <button
                    onClick={goToChildPrevious}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex gap-2 overflow-hidden">
                    {currentChildren.map((childSrc, idx) => (
                      <div
                        key={idx}
                        onClick={() => setChildImageIndex(idx)}
                        className={`w-12 sm:w-18 md:w-20 lg:w-28 xl:w-45
                          h-14 sm:h-20 md:h-20 lg:h-30 xl:h-30
                          rounded-md xl:rounded-2xl overflow-hidden cursor-pointer
                          transition-all p-0.5 xl:p-1 bg-sky-950
                          ${
                            idx === childImageIndex
                              ? 'opacity-100'
                              : 'opacity-40 hover:opacity-75'
                          }`}
                      >
                        <img
                          src={childSrc}
                          alt={`Child ${idx + 1}`}
                          className="w-full h-full object-cover rounded-md xl:rounded-2xl"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={goToChildNext}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                GALLERY VIEW                                */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="h-[80vh] p-3 xl:p-20 bg-gradient-to-br from-slate-900 flex items-center via-slate-800 to-slate-900 justify-center">
      
      {navItems.map((item) => (
        <li key={item.name} className="cursor-pointer text-white justify-center text-center" style={{listStyle: 'none'}}>
          <a href={item.path}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-center text-center gap-4 h-[500px]">

              {projectsData.map((project, idx) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleSelectProject(idx)}
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold text-center px-4">
                      {project.title}
                    </h3>
                  </div>

                  {/* Image Count */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {project.children.length}
                  </div>
                </div>
              ))}

            </div>
          </a>
        </li>
      ))}
    </div>
  );
}
