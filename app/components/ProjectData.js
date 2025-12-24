// ProjectData.js
// Path: C:\portfolio\components\ProjectData.js

const Bootstrap = "/assets/logo/Bootstrap.png";
const HTML5    = "/assets/logo/HTML5.png";
const CSS3     = "/assets/logo/CSS3.png";
const GitHub   = "/assets/logo/GitHub.png";
const JavaScript   = "/assets/logo/JavaScript.png";
const jQuery   = "/assets/logo/jQuery.png";
const Laravel   = "/assets/logo/Laravel.png";
const LinkedIn   = "/assets/logo/LinkedIn.png";
const MaterialUI   = "/assets/logo/MaterialUI.png";
const Nextjs   = "/assets/logo/Nextjs.png";
const Nodejs   = "/assets/logo/Nodejs.png";
const npm   = "/assets/logo/npm.png";
const React   = "/assets/logo/React.png";
const Slack   = "/assets/logo/Slack.png";
const TailwindCSS   = "/assets/logo/TailwindCSS.png";
const Python  = "/assets/logo/Python.png";
const Jinja2  = "/assets/logo/Jinja2.png";
const Mysql  = "/assets/logo/MySQL.png";





const kylin1 = "/assets/img/kylin/kylin1.png";
const kylin2 = "/assets/img/kylin/kylin2.png";
const kylin3 = "/assets/img/kylin/kylin3.png";

const mimnu1 = "/assets/img/mimnu/mimnu1.png";
const mimnu2 = "/assets/img/mimnu/mimnu2.png";
const mimnu3 = "/assets/img/mimnu/mimnu3.png";

const burgerbistro1 = "/assets/img/burger_bistro/burgerbistro1.png";
const burgerbistro2 = "/assets/img/burger_bistro/burgerbistro2.png";
const burgerbistro3 = "/assets/img/burger_bistro/burgerbistro3.png";
const burgerbistro4 = "/assets/img/burger_bistro/burgerbistro4.png";

const apchu1 = "/assets/img/apchu/apchu1.png";
const apchu2 = "/assets/img/apchu/apchu2.png";
const apchu3 = "/assets/img/apchu/apchu3.png";

const lolitahotel1 = "/assets/img/lolita_heights_hotel/lolitahotel1.png";
const lolitahotel2 = "/assets/img/lolita_heights_hotel/lolitahotel2.png";
const lolitahotel3 = "/assets/img/lolita_heights_hotel/lolitahotel3.png";
const lolitahotel4 = "/assets/img/lolita_heights_hotel/lolitahotel4.png";
const lolitahotel5 = "/assets/img/lolita_heights_hotel/lolitahotel5.png";
const lolitahotel6 = "/assets/img/lolita_heights_hotel/lolitahotel6.png";
const lolitahotel7 = "/assets/img/lolita_heights_hotel/lolitahotel7.png";
const lolitahotel8 = "/assets/img/lolita_heights_hotel/lolitahotel8.png";
const lolitahotel9 = "/assets/img/lolita_heights_hotel/lolitahotel9.png";
const lolitahotel10 = "/assets/img/lolita_heights_hotel/lolitahotel10.png";

const pspace1 = "/assets/img/pspace/pspace1.png";
const pspace2 = "/assets/img/pspace/pspace2.png";
const pspace3 = "/assets/img/pspace/pspace3.png";
const pspace4 = "/assets/img/pspace/pspace4.png";
const pspace5 = "/assets/img/pspace/pspace5.png";



export const projectsData = [
  { 
    id: 1, 
    title: 'Kylin Project',       
    description: 'This frontend-only loan platform, built with HTML, CSS, Bootstrap, and JavaScript, offers a secure and user-friendly UI for collateral-based loans. It features an easy application process, competitive rates, and a responsive design. While it lacks backend functionality, it provides an interactive and visually appealing experience for loan applications.', 
    details: 'Additional details',  
    src: [kylin1], 
    alt: 'Mountain landscape',
    children:  [kylin1, kylin2, kylin3],
    linkViewPage: "https://jovinobironmonterde.github.io/kylin_sample_project/",
    linkViewCode: "https://github.com/JovinoBironMonterde/LoanSystem_project",
    tech: [
      { ImgLogo: HTML5, title: "HTML", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "CSS", percentage: "95.3%" },
      { ImgLogo: Bootstrap, title: "BOOTSTRAP", percentage: "80.6%" },
      { ImgLogo: JavaScript, title: "JAVASCRIPT", percentage: "80.6%" },
    ],
  },
  { 
    id: 2, 
    title: 'PROPERTY MANAGEMENT SYSTEM',     
    description: 'Built a Property Management System using React.js and Material-UI (MUI). Developed features like Check-in/Check-out, online booking, employee scheduling, payroll, and biometric attendance tracking. Designed responsive UIs, integrated RESTful APIs, and collaborated with backend teams to optimize performance. Delivered a scalable, user-friendly solution that enhanced operational efficiency.', 
    details: 'Additional details',  
    src: [lolitahotel1],
    alt: 'Forest path',
    children: [lolitahotel1, lolitahotel2, lolitahotel3, lolitahotel5, lolitahotel8, lolitahotel10 ],
    linkViewPage: "",
    linkViewCode: "",
    tech: [
      { ImgLogo: React, title: "REACT", percentage: "52.3%" },
      { ImgLogo: MaterialUI, title: "MATERIAL UI", percentage: "95.3%" },
      { ImgLogo: Mysql, title: "MYSQL", percentage: "80.6%" },
    ],
  },
  { 
    id: 3, 
    title: 'MIMNU E-COMMERCE',       
    description: 'This eCommerce web application is built with Laravel as the backend framework, MySQL for database management, JavaScript for dynamic client-side interactions, and Bootstrap for a responsive and modern UI design. The system supports product management, user authentication, shopping cart functionality, order processing, and secure checkout. It is designed to be scalable, efficient, and easy to maintain, providing both administrators and customers with a seamless online shopping experience.',  
    details: 'Project description', 
    src: mimnu2, 
    alt: 'Wildflowers',
    children:  [mimnu1, mimnu2, mimnu3],
    linkViewPage: "",
    linkViewCode: "",
    tech: [
      { ImgLogo: HTML5, title: "HTML", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "CSS", percentage: "95.3%" }, 
      { ImgLogo: Bootstrap, title: "BOOTSTRAP", percentage: "80.6%" },
      { ImgLogo: JavaScript, title: "JAVASCRIPT", percentage: "80.6%" },
      { ImgLogo: Laravel, title: "LARAVEL", percentage: "80.6%" },
      { ImgLogo: Mysql, title: "MYSQL", percentage: "80.6%" },
    ],
  },
  { 
    id: 4, 
    title: 'BURGER BISTRO',       
    description: 'This is my first sample page using Webflow, built to explore its design tools, responsiveness, and interactions. It features a clean layout, custom animations, and a structured approach to web design without coding.', 
    details: 'Additional details',  
    src: burgerbistro1, 
    alt: 'Wildflowers',
    children:  [burgerbistro1, burgerbistro2, burgerbistro3, burgerbistro4],
    linkViewPage: "https://sample-page-25e41f.webflow.io",
    linkViewCode: "",
    tech: [
      { ImgLogo: HTML5, title: "HTML5", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "CSS", percentage: "95.3%" }, 
      // { ImgLogo: CSS3, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 5, 
    title: 'Pspace App',       
    description: 'Built the PSpace application from scratch as a Frontend Developer. Implemented UI and dynamic data rendering using JavaScript and Jinja by consuming backend APIs. Collaborated closely with designers and backend developers.', 
    details: 'Additional details',  
    src: pspace1, 
    alt: 'Wildflowers',
    children:  [pspace2, pspace3, pspace4, pspace5, pspace1],
    linkViewPage: "https://pspace.app/",
    linkViewCode: "",
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" }, 
      { ImgLogo: Python, title: "PYTHON / FLASK", percentage: "80.6%" },
      { ImgLogo: Jinja2, title: "JINJA2", percentage: "80.6%" },
      { ImgLogo: JavaScript, title: "JAVASCRIPT", percentage: "80.6%" },
    ],
  },
];