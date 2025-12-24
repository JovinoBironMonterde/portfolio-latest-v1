import React from 'react'
import '../../public/css/professionStyle.css'
import { Typography } from '@mui/material'
import { SkillsData } from "../components/SkillsData";
import { ExperienceData } from "../components/ExperienceData";

function Profession() {
  return (
    <div className='profession-wrapper w-full lg:w-[80%] h-auto mx-auto lg:flex md:flex items-center gap-10 py-5 lg:py-20'>
     
     <div className='w-full'>
      {/* {SkillsData.map((skills, index) => (
      <div key={skills.id} className={`Content-${index + 1} w-full h-auto mb-10 reveal fade-left`}>
        <div className="w-full lg:text-right md:text-right sm:text-left text-white text-xs mb-2">{skills.language}</div>
        <div className='w-full h-3 rounded-lg relative bg-slate-100'>
          <div className={`inner-bar h-3 rounded-lg bg-sky-400`} style={{ width: skills.percentage }}>
            <span className='absolute w-full lg:text-left md:text-left text-right -top-6 text-white text-xs'> {skills.percentage}</span>
          </div>
        </div>
      </div>
      ))} */}

      <div className="">
      {SkillsData.map((skills, index) => (
      <div key={skills.id} className={`Content-${index + 1} w-full h-auto mb-3 xl:mb-10 reveal fade-left`}>
        <div className='w-full h-16 rounded-lg relative bg-slate-300 overflow-hidden'>
          <div className="absolute lg:right-4 md:right-4 xs:left-4 p-3 bottom-2 z-50 text-zinc-200">{skills.language}</div>
          <div className={`inner-bar h-16  bg-sky-800`} style={{ width: skills.percentage }}>
            <span className='absolute w-full lg:text-left md:text-left text-right z-50 top-0 translate-y-4 px-3 text-white text-3xl'> {skills.percentage}</span>
          </div>
        </div>
      </div>
      ))}
      </div>
     </div>
     

     <hr className="block lg:hhidden mt-10 mb-16"></hr>

     <div className='w-full text-center lg:text-left md:text-left'>
      {ExperienceData.map((ExperienceData, index) => (
      <div key={ExperienceData.id} className={`${index + 1} experience-box mb-14 reveal fade-bottom`}>
          <Typography sx={{ fontWeight: 'bold', color: 'black', mb: 2,  lineHeight: 'normal', mb:2 }}>
            <span className="py-2 px-4 mb-5 bg-sky-100 rounded-full text-sky-800 text-xs">
              {ExperienceData.date}
            </span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 1, lineHeight: 'normal' }}>
            {ExperienceData.company}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', color: 'white',mb: 1, lineHeight: 'normal' }}>
          {ExperienceData.position}
          </Typography>
          <Typography sx={{ color: 'white',mb: 1 }}>
          {ExperienceData.description}
          </Typography>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Profession
