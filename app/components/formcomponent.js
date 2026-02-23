// C:\xampp\htdocs\portfolio\app\components\formcomponent.jsx
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

function FormComponent() {
  const [focused, setFocused] = useState({});
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocused(prev => ({ ...prev, [field]: false }));
  const handleChange = (field, val) => setValues(prev => ({ ...prev, [field]: val }));

  const inputStyle = (field) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: `1px solid ${focused[field] ? '#1692a1' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '12px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused[field] ? '0 0 0 3px rgba(22,146,161,0.12)' : 'none',
  });

  return (
    <div className="w-full">
      <form
        action="https://getform.io/f/ayvqklrb"
        method="POST"
        className="flex flex-col gap-5"
      >

        {/* Full Name */}
        <div className="relative">
          <label
            className="block text-[11px] uppercase tracking-widest font-semibold mb-2"
            style={{ color: focused.name ? '#1692a1' : 'rgba(255,255,255,0.4)' }}
          >
            Full Name <span style={{ color: '#1692a1' }}>*</span>
          </label>
          <div className="relative">
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
              style={{ color: focused.name ? '#1692a1' : 'rgba(255,255,255,0.3)' }}
            >
              <AccountCircle fontSize="small" />
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Jovino Monterde"
              value={values.name}
              onChange={e => handleChange('name', e.target.value)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              style={{ ...inputStyle('name'), padding: '12px 16px 12px 44px' }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <label
            className="block text-[11px] uppercase tracking-widest font-semibold mb-2"
            style={{ color: focused.email ? '#1692a1' : 'rgba(255,255,255,0.4)' }}
          >
            Email <span style={{ color: '#1692a1' }}>*</span>
          </label>
          <div className="relative">
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
              style={{ color: focused.email ? '#1692a1' : 'rgba(255,255,255,0.3)' }}
            >
              <EmailIcon fontSize="small" />
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={values.email}
              onChange={e => handleChange('email', e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              style={{ ...inputStyle('email'), padding: '12px 16px 12px 44px' }}
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <label
            className="block text-[11px] uppercase tracking-widest font-semibold mb-2"
            style={{ color: focused.message ? '#1692a1' : 'rgba(255,255,255,0.4)' }}
          >
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project or just say hello..."
            value={values.message}
            onChange={e => handleChange('message', e.target.value)}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            style={{
              ...inputStyle('message'),
              padding: '12px 16px',
              resize: 'none',
              lineHeight: '1.6',
            }}
          />
          {/* Character count */}
          <span
            className="absolute bottom-3 right-4 text-[10px]"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            {values.message.length}
          </span>
        </div>

        {/* Honeypot */}
        <input type="hidden" name="_gotcha" aria-hidden="true" style={{ display: 'none' }} />

        {/* Submit */}
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer mt-1"
          style={{
            background: '#1692a1',
            color: 'white',
            border: 'none',
            boxShadow: '0 6px 24px rgba(22,146,161,0.3)',
            letterSpacing: '0.12em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(22,146,161,0.5)';
            e.currentTarget.style.background = '#12808d';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(22,146,161,0.3)';
            e.currentTarget.style.background = '#1692a1';
          }}
        >
          <SendIcon fontSize="small" className="group-hover:translate-x-0.5 transition-transform duration-200" />
          Send Message
        </button>

      </form>
    </div>
  );
}

export default FormComponent;