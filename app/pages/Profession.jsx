import React from 'react'
import '../../public/css/professionStyle.css'
import { Typography } from '@mui/material'

function Profession() {
  return (
    <div className='profession-wrapper w-full lg:w-[80%] h-auto mx-auto lg:flex md:flex gap-10 p-5 lg:p-20'>
     <div className='w-full flex flex-wrap mb:20'>
      {/* Html */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>HTML</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[95%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>95%</span>
          </div>
        </div>
      </div>

      {/* CSS */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>CSS</span>
        </div>
        <div className='outer-bar w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[95%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>95%</span>
          </div>
        </div>
      </div>

      {/* Tailwind */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>Tailwind</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[90%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>90%</span>
          </div>
        </div>
      </div>

      {/* Bootstrap */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>Bootstrap</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[90%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>90%</span>
          </div>
        </div>
      </div>

      {/* Javascript */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>Javascript</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[80%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>80%</span>
          </div>
        </div>
      </div>

      {/* Jquery */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>Jquery</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[80%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>80%</span>
          </div>
        </div>
      </div>

      {/* React js/Next js */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>React js/Next js</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[75%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>75%</span>
          </div>
        </div>
      </div>

      {/* Material UI */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>Material UI</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[80%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>80%</span>
          </div>
        </div>
      </div>

      {/* Hubspot */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left ">
          <span>Hubspot</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[75%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>75%</span>
          </div>
        </div>
      </div>

      {/* Git/Github */}
      <div className='w-full h-auto mb-6'>
        <div className="w-full lg:text-right md:text-right sm:text-left">
          <span>Git/Github</span>
        </div>
        <div className='w-full h-3 rounded-lg relative bg-slate-300'>
          <div className='inner-bar w-[80%] h-3 rounded-lg bg-emerald-400'>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6'>80%</span>
          </div>
        </div>
      </div>

     </div>
     <hr className="block lg:hhidden mt-10 mb-16"></hr>
     <div className='w-full text-center lg:text-left md:text-left'>
      <div className="experience-box mb-14">
        <Typography sx={{ fontWeight: 'bold', color: 'black', mb: 2,  lineHeight: 'normal', mb:2 }}>
        <span className="py-2 px-4 mb-5 bg-sky-100 rounded-full text-sky-800">September 2016 - December 2021</span>
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 1, lineHeight: 'normal' }}>
        Concentrix
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: 'white',mb: 1, lineHeight: 'normal' }}>
        Security Control Officer
        </Typography>
        <Typography sx={{ color: 'white',mb: 1 }}>
        Monitor and maintain surveillance systems, observe suspicious activity, alert authorities during security breaches, prepare incident reports, maintain equipment, comply with policies, and collaborate with security teams
        </Typography>
      </div>

      <div className="experience-box mb-14">
        <Typography sx={{ fontWeight: 'bold', color: 'black', mb: 2,  lineHeight: 'normal' }}>
        <span className="py-2 px-4 mb-5 bg-sky-100 rounded-full text-sky-800">September 2022 - November 2022</span>
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 1,  lineHeight: 'normal' }}>
        Automation and Security, Inc.
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: 'white',mb: 1, lineHeight: 'normal' }}>
        Office Admin
        </Typography>
        <Typography sx={{ color: 'white',mb: 1 }}>
        Maintain organized and up-to-date files, documents, and records related to the company's operations, including customer orders, invoices, and contracts.
        </Typography>
      </div>

      <div className="experience-box mb-14">
        <Typography sx={{ fontWeight: 'bold', color: 'black', mb: 2,  lineHeight: 'normal' }}>
        <span className="py-2 px-4 mb-5 bg-sky-100 rounded-full text-sky-800">November 2022 - May 2023</span>
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 1,  lineHeight: 'normal' }}>
        Telmo Solution
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: 'white', mb: 1, lineHeight: 'normal' }}>
        Front-End Web Developer
        </Typography>
        <Typography sx={{ color: 'white',mb: 1 }}>
        Take design mockups and translate them into clean, responsive, and pixel-perfect web interfaces. Write well-structured HTML, CSS, and JavaScript code to ensure smooth integration with backend systems.
        </Typography>
      </div>

      <div className="experience-box mb-14">
        <Typography sx={{ fontWeight: 'bold', color: 'black', mb: 2,  lineHeight: 'normal' }}>
        <span className="py-2 px-4 mb-5 bg-sky-100 rounded-full text-sky-800">May 2023 - May 2024</span>
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 1, lineHeight: 'normal' }}>
        Mimnu
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: 'white', mb: 1, lineHeight: 'normal' }}>
        Front-End Web Developer
        </Typography>
        <Typography sx={{ color: 'white',mb: 1 }}>
        My role at Mimnu, an e-commerce site, I am responsible for designing each webpage with a strong emphasis on creating interactive and engaging user experiences. Additionally, I ensure that these designs are seamlessly integrated into a mobile-responsive format, guaranteeing optimal functionality across various devices and enhancing the overall usability of the website.
        </Typography>
      </div>

     
     </div>
    </div>
  )
}

export default Profession
