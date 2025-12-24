import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function FormComponent() {
  return (
    <div className="w-full max-w-[600px] rounded-xl shadow-2xl mx-auto lg:p-10 md:p-10 p-6 z-50 bg-slate-50">
      <form
        action="https://getform.io/f/ayvqklrb"
        method="POST"
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <TextField
          id="name"
          name="name"
          label="Full Name"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        {/* Email */}
        <TextField
          type="email"
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Message */}
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />

        {/* Honeypot */}
        <input
          type="hidden"
          name="_gotcha"
          aria-hidden="true"
          style={{ display: "none" }}
        />

        {/* Subscribe Checkbox */}
        {/* <div className="flex items-center">
          <input type="hidden" name="subscribe" value="no" />
          <FormControlLabel
            control={<Checkbox name="subscribe" value="yes" defaultChecked />}
            label="Subscribe to newsletter"
          />
        </div> */}

        {/* Gender Radio Buttons */}
        {/* <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row name="gender" defaultValue="male">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl> */}

        {/* Work Experience Select */}
        {/* <FormControl fullWidth>
          <FormLabel>Work Experience</FormLabel>
          <Select name="work-experience" defaultValue="one-year">
            <MenuItem value="one-year">0–1 years</MenuItem>
            <MenuItem value="one-five-years">1–5 years</MenuItem>
          </Select>
        </FormControl> */}

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#1692a1] text-white p-2 rounded hover:bg-[#186972] cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
