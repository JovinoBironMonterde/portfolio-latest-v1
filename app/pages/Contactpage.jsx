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
        <div className="w-full  mx-auto lg:p-10 md:p-10 p-2">
          <div className="w-full max-w-[400px] mx-auto">
            <div className="mb-20 ">
              <h1 className="font-bold text-[#1692a1]">Get in Touch</h1>
            </div>
            <div className="flex mb-4">
              <ContactPhoneIcon  sx={{ mr: { xs: 1, sm: 2, color: '#52525b' } }} />
              <span className='text-zinc-600'>09704566075 (TNT)</span>
            </div>
            <div className="flex mb-4">
              <ContactPhoneIcon  sx={{ mr: { xs: 1, sm: 2, color: '#52525b' } }} />
              <span className='text-zinc-600'>09973401144 (TM)</span>
            </div>
            <div className="flex mb-10">
              <MailIcon sx={{ mr: 2, color: '#52525b' }} />
              <span className='text-zinc-600'>jovinobiro.monterdejr@gmail.com</span>
            </div>
            <div className="flex gap-4 justify-between lg:justify-start">
              <a href="https://wa.me/1234567890" target="_blank" className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300' >
                <WhatsAppIcon  />
              </a>
              <a href="https://www.facebook.com/messages/e2ee/t/7199980096767454" target="_blank" className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
                <FacebookIcon  />
              </a>
              {/* <a href="https://wa.me/1234567890" target="_blank" className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
                <TwitterIcon />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
                <InstagramIcon  />
              </a> */}
              <a href="https://www.linkedin.com/in/jovinobironmonterde/" target="_blank" className='p-3 rounded-full bg-[#1693a117] text-[#1692a1] hover:bg-[#1693a1] hover:text-white transition duration-300'>
                <LinkedInIcon  />
              </a>
            </div>
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
