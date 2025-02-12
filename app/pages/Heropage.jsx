import React from 'react';
import '../../public/css/HeroStyle.css';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from '@mui/material/Typography';

function Heropage() {
  return (
    <div className="w-full h-full px-10 lg:flex items-center py-20">
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
          <Typography sx={{ fontWeight: "normal", color: "white", mb: "80px", lineHeight: 1.6 }}>
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
      <div className="hero-contact-wrapper rounded-xl p-10 z-50">
        <form action="https://getform.io/f/bpjjwnlb" method="POST" className="flex flex-col gap-4">
          <TextField id="name" name="name" label="Fullname" variant="outlined" required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField id="company" name="company" label="Company" variant="outlined" required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField type="email" id="email" name="email" label="Email" variant="outlined" required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField id="message" name="message" label="Message" variant="outlined" multiline rows={4} />

          <input type="hidden" name="_gotcha" aria-hidden="true" style={{ display: 'none' }} />

          <button type="submit" className="btn-submit bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Heropage;
