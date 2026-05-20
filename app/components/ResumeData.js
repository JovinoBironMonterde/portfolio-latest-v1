// C:\xampp\htdocs\portfolio\app\components\ResumeData.js

export const profile = {
  name: "Jovino Monterde",
  title: "Frontend Developer",
  initials: "JM",
  bio: "I'm a dedicated frontend developer who enjoys creating user-friendly and visually appealing web experiences. With over 3 years of experience, I've been fortunate to work on a variety of projects, including single-page applications and e-commerce platforms, continually learning and growing along the way.",
  avatar: "/assets/img/sdsdsd.png", // set to "/avatar.jpg" when image is available
};
export const contact = [
  {
    type: "phone",
    label: "Phone",
    value: "0970 456 6075 (Smart)",
  },
  {
    type: "email",
    label: "Email",
    value: "jovinobironmonterdejr2024@gmail.com",
    breakAll: true,
  },
  {
    type: "address",
    label: "Address",
    value: "Blk 66 Lot 25, Channel Ridge View Dist 1, Babatngon Leyte",
  },
  {
    type: "portfolio",
    label: "Portfolio",
    value: "portfolio-jovinomonterde.vercel.app",
    href: "https://portfolio-jovinomonterde.vercel.app/",
  },
];

export const education = [
  {
    period: "2012 — 2016",
    degree: "Bachelor of Science in Computer Science",
    school: "JE Mondejar Computer College",
  },
];

export const skills = [
  { label: "HTML",           level: 92 },
  { label: "CSS",            level: 90 },
  { label: "Tailwind",       level: 85 },
  { label: "Bootstrap",      level: 80 },
  { label: "JavaScript",     level: 82 },
  { label: "jQuery",         level: 70 },
  { label: "ReactJS / NextJS", level: 78 },
  { label: "Jinja",          level: 65 },
];

export const languages = [
  { label: "English", level: 75 },
];

export const references = [
  {
    name: "Marco Pantonial",
    role: "Backend Developer, Telmo Solution",
    phone: "09453377020",
    email: "marcopantonial3@gmail.com",
  },
  {
    name: "Rolando Pacites",
    role: "Human Resources, Telmo Solution",
    phone: "09917596811",
    email: "olanpacites@gmail.com",
  },
];

export const experiences = [
  {
    date: "February 2025",
    company: "PSPACE — Remote",
    role: "Front-End Web Developer",
    description:
      "Built the PSpace application from scratch as a Frontend Developer. Implemented UI and dynamic data rendering using JavaScript and Jinja by consuming backend APIs. Collaborated closely with designers and backend developers.",
  },
  {
    date: "March 2024 — August 2024",
    company: "Lolita Heights Hotel — Tacloban City",
    role: "Property Management System (PMS)",
    description:
      "Built a Property Management System using React.js and Material-UI (MUI). Developed features like Check-in/Check-out, online booking, employee scheduling, payroll, and biometric attendance tracking. Designed responsive UIs, integrated RESTful APIs, and collaborated with backend teams to optimize performance. Delivered a scalable, user-friendly solution that enhanced operational efficiency.",
  },
  {
    date: "May 2023 — May 2024",
    company: "Mimnu — Australia",
    role: "Front-End Web Developer",
    description:
      "At Mimnu, an e-commerce site, I was responsible for designing each webpage with a strong emphasis on creating interactive and engaging user experiences. Additionally, I ensured these designs were seamlessly integrated into a mobile-responsive format, guaranteeing optimal functionality across various devices and enhancing the overall usability of the website.",
  },
  {
    date: "November 2022 — May 2023",
    company: "Telmo Solution — Tacloban City",
    role: "Front-End Web Developer",
    description:
      "Took design mockups and translated them into clean, responsive, and pixel-perfect web interfaces. Wrote well-structured HTML, CSS, and JavaScript code to ensure smooth integration with backend systems.",
  },
  {
    date: "September 2016 — December 2021",
    company: "Concentrix — Quezon City",
    role: "Security Control Officer",
    bullets: [
      "Monitored and reviewed electronic door-access badge records to identify AWOL, resigned, and terminated call-center agents attempting to enter the premises, and reported any unauthorized access attempts.",
      "Activated access badges for agents or employees upon receiving verified and approved access requests from the designated approver, ensuring correct access levels were assigned.",
      "Maintained and operated surveillance and security monitoring systems, ensuring continuous observation of all critical and sensitive areas.",
      "Identified, assessed, and reported suspicious or unauthorized activity, promptly alerting authorities or security teams during potential security breaches.",
      "Prepared accurate and detailed incident reports, documenting access violations, security events, and technical issues.",
      "Performed routine inspections and maintenance of security equipment, ensuring all monitoring devices and access-control systems functioned properly.",
      "Worked collaboratively with security teams, facilities, HR, and management to support a safe, secure, and well-coordinated working environment.",
    ],
  },
];