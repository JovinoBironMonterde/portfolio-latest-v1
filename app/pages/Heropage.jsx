import React from 'react';
import '../../public/css/HeroStyle.css';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from '@mui/material/Typography';
import FormComponent from '../components/formcomponent';

function Heropage() {
  return (
    <div className="w-full h-full lg:flex items-center lg:px-10 md:px-10 px-2 lg:py-20 md:py-20 py-2">
      {/* Hero Details */}
      <div className="hero-details-wrapper w-full p-4 z-50">
        {/* display only in Large Screens */}
        <div className="details-box-desktop">
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
            I'm
          </Typography>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
            Jovino Monterde
          </Typography>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
            Frontend Developer
          </Typography>
          <Typography sx={{ fontWeight: "normal", color: "white", mb: "80px", lineHeight: 1.6, maxWidth: '800px' }}>
            Transforming designs into fully responsive, user-friendly front-end web applications. 
            I focus on delivering pixel-perfect implementations, optimizing performance, and seamlessly 
            integrating modern back-end technologies to create complete, efficient, and engaging solutions.
          </Typography>
        </div>

        {/* Dsiplay only in mobile Screens */}
        <div className="details-box-mobile z-50">
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "white", textAlign: 'center' }}>
            I'm
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", color: "white", mb: 2, textAlign: 'center' }}>
            Jovino Monterde
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "white", mb: 2, textAlign: 'center' }}>
            Frontend Developer
          </Typography>
          <Typography sx={{ fontWeight: "normal", color: "white", mb: "20px", lineHeight: 1.6, textAlign: 'center' }}>
            Transforming designs into fully responsive, user-friendly front-end web applications. 
            I focus on delivering pixel-perfect implementations, optimizing performance, and seamlessly 
            integrating modern back-end technologies to create complete, efficient, and engaging solutions.
          </Typography>
        </div>

        {/* Buttons */}
        <div className="flex  lg:justify-start justify-center gap-4">
          <button className="cstmBtn cursor-pointer"><span>Project</span></button>
          <button className="cstmBtn cursor-pointer"><span>Resume</span></button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full hidden">
        <FormComponent />
      </div>
    </div>
  );
}

export default Heropage;
