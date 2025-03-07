import React from 'react'
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';

function formcomponent() {
  return (
    <div className="w-full max-w-[600px] rounded-xl shadow-2xl mx-auto lg:p-10 md:p-10 p-6 z-50 bg-slate-50">
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
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField type="email" id="email" name="email" label="Email" variant="outlined" required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField id="message" name="message" label="Message" variant="outlined" multiline rows={4} />

          <input type="hidden" name="_gotcha" aria-hidden="true" style={{ display: 'none' }} />

          <button type="submit" className="btn-submit bg-[#1692a1] text-white p-2 rounded hover:bg-[#186972] cursor-pointer">
            Send
          </button>
        </form>
      </div>
  )
}

export default formcomponent
