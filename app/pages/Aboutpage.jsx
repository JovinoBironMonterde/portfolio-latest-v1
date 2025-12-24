import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import AboutImage from '../../public/assets/img/NewProfile.png'; 
import WaveHaikei from '../components/WaveSVG';
import svg2 from '../components/svg2';
import RevealAnimation from '../components/RevealAnimation';

function Aboutpage() {
  return (
    <div className='relative bg-slate-300 w-full max-w-[1600px] mx-auto rounded-3xl h-auto lg:flex md:flex items-center '>
      <div className="relative image-profile-image w-full flex justify-center py-10 px-12 xl:p-20 z-50 reveal">
        {/* <div className="absolute w-60 h-52 left-0 top-0">
          <svg2 />
        </div>
        <span className="absolute w-[600px] h-[600px] rounded-tr-full rounded-br-full -left-16 -top-56 bg-slate-400"></span>
        <span className="absolute w-[350px] h-[600px] rounded-tr-full rounded-br-full -left-16 top-0 bg-slate-400"></span> */}
        <Image className='z-10' src={AboutImage} alt="Your Image Alt Text" width={440} height={440} />
      </div>
      <div className="profile-image w-full mb-4 xl:mb-28 lg:pr-20 z-50 reveal fade-bottom p-4">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
        About
        </Typography>
        <Typography sx={{ fontWeight: 'normal', color: 'black', mb: '80px', marginBottom: '0' }}>
          <span className="reveal fade-bottom">
          I'm <b>Jovi Monterde,</b> a front-end developer with over 2 years of experience creating responsive and user-friendly web applications. I enjoy turning designs into functional, pixel-perfect websites and have worked on a variety of projects, including single-page apps and e-commerce platforms.
          </span>
        <br/><br/>
        <span className="reveal fade-bottom">
        I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or chat about web development!
        </span>
        </Typography>
        <div className="button">

        </div>

        <div hidden className="">
           <div>
            <h2 className="text-3xl font-semibold text-white">Jovino Monterde</h2>
            <p className="text-blue-600 text-lg font-medium">Front-End Developer</p>
          </div>

          <p className="text-white text-base leading-relaxed">
            I am a results-driven Front-End Developer with more than 
            <strong> 2 years of hands-on experience</strong> building modern, responsive, and user-focused 
            web applications. I specialize in creating clean UI, smooth interactions, and scalable 
            front-end architecture using cutting-edge JavaScript frameworks.
          </p>

          <p className="text-white text-base leading-relaxed">
            My work spans e-commerce platforms, property management systems, and various 
            business applications. I thrive in collaborative environments and enjoy transforming 
            design concepts into polished digital experiences.
          </p>

          <p className="text-white text-base leading-relaxed">
            I constantly explore new tools, technologies, and UI trends to elevate my craft and 
            deliver products that are both visually appealing and highly performant.
          </p>
        </div>
       
      </div>
      {/* <div className="absolute w-full left-0 bottom-0 z-10">
      <WaveHaikei/>
      </div> */}
    </div>
  )
}

export default Aboutpage
