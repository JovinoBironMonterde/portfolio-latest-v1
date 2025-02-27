import React from 'react'
import '../../public/css/HeroStyle.css';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from '@mui/material/Typography';
import FormComponent  from '../components/formcomponent';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Contactpage() {
  return (
    <div className='w-full h-auto'>
      <div className="lg:flex items-center">
        <div className="w-full max-w-[600px] mx-auto lg:p-10 md:p-10 p-2">
          <div className="mb-20 ">
          <h1 className="font-bold text-[#1692a1]">Get in Touch</h1>
          </div>
          <div className="flex mb-4">
            <ContactPhoneIcon  sx={{ mr: { xs: 1, sm: 2 } }} />
            <span>09704566075</span>
          </div>
          <div className="flex mb-10">
            <MailIcon sx={{ mr: 2}} />
            <span>jovinobironmonterdejr2024@gmail.com</span>
          </div>
          <div className="flex gap-4 justify-between lg:justify-start">
            <button className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
              <WhatsAppIcon  />
            </button>
            <button className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
              <FacebookIcon  />
            </button>
            <button className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
              <TwitterIcon />
            </button>
            <button className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
              <InstagramIcon  />
            </button>
            <button className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
              <LinkedInIcon  />
            </button>
          </div>
          
        </div>
        {/* Contact Form */}
        <div className="w-full">
        <FormComponent />
        </div>
      </div>
    </div>
  )
}

export default Contactpage
