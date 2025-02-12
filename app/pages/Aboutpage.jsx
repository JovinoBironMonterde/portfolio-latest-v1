import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import AboutImage from '../../public/assets/img/NewProfile.png'; 
import WaveHaikei from '../components/WaveSVG';

function Aboutpage() {
  return (
    <div className='relative w-full h-auto lg:flex md:flex items-center p-10 pb-20'>
      <div className="image-profile-image w-full flex justify-center p-20 z-50">
        <Image src={AboutImage} alt="Your Image Alt Text" width={440} height={440} />
      </div>
      <div className="profile-image w-full mb-28 lg:pr-20 z-50">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
        About
        </Typography>
        <Typography sx={{ fontWeight: 'normal', color: 'black', mb: '80px', marginBottom: '0' }}>
          I'm <b>Jovi Monterde,</b> a front-end developer with over 2 years of experience creating responsive and user-friendly web applications. I enjoy turning designs into functional, pixel-perfect websites and have worked on a variety of projects, including single-page apps and e-commerce platforms.
        <br/><br/>
        I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or chat about web development!
        </Typography>
        <div className="button">

        </div>
       
      </div>
      <div className="absolute w-full left-0 bottom-0 z-10">
      <WaveHaikei/>
      </div>
    </div>
  )
}

export default Aboutpage
