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

const sedney1 = "/assets/img/sydney/sedney1.png";
const sedney2 = "/assets/img/sydney/sedney2.png";
const sedney3 = "/assets/img/sydney/sedney3.png";
const sedney4 = "/assets/img/sydney/sedney4.png";
const sedney5 = "/assets/img/sydney/sedney5.png";

const pethaven1 = "/assets/img/pethaven/image1.png";
const pethaven2 = "/assets/img/pethaven/image2.png";
const pethaven3 = "/assets/img/pethaven/image3.png";
const pethaven4 = "/assets/img/pethaven/image4.png";

const primetech1 = "/assets/img/prime_tech/image1.png";
const primetech2 = "/assets/img/prime_tech/image2.png";
const primetech3 = "/assets/img/prime_tech/image3.png";
const primetech4 = "/assets/img/prime_tech/image4.png";




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
  { 
    id: 6, 
    title: 'Sydney Health-Themed',       
    description: `This is a frontend-only practice website built using Next.js and Tailwind CSS. The project showcases a modern, fully responsive homepage inspired by a Sydney-based health and research organization in Sydney, Australia.
                  The main objective of this project is to practice advanced layout structuring, reusable component development, and responsive UI design using a clean and professional design system.`,
    details: `Key features include a hero carousel, news and events section, resource cards, impact highlight section, partner logos grid, and a structured multi-column footer. 
              The project focuses purely on frontend implementation with reusable components and responsive layouts. No backend integration or API connectivity is included.`,
    Status: 'In Progress',
    src: sedney1, 
    alt: 'Sydney practice website homepage preview',
    children: [sedney2, sedney3, sedney4, sedney5, sedney1],
    linkViewPage: "https://nextjs-practice-page-eight.vercel.app/",
    linkViewCode: "",
    tech: [
      { ImgLogo: Nextjs, title: "Next.js", percentage: "52.3%" },
      { ImgLogo: TailwindCSS, title: "Tailwind CSS", percentage: "95.3%" }, 
    ],
  },

  { 
    id: 7, 
    title: 'PetHaven – Pet Adoption Demo Website',       
    description: `PetHaven is a demo landing page concept for a pet adoption and pet services platform. The design demonstrates how a modern pet marketplace website can present pets available for adoption, categories of animals, and additional services such as grooming, veterinary care, and training. The interface focuses on clean layout, friendly visuals, and easy navigation to help users quickly find their ideal companion. This project is intended for UI/UX demonstration and portfolio purposes only and does not represent a real or functional adoption platform.`,
    details: `Key features include a hero carousel, news and events section, resource cards, impact highlight section, partner logos grid, and a structured multi-column footer. 
              The project focuses purely on frontend implementation with reusable components and responsive layouts. No backend integration or API connectivity is included.`,
    Status: 'In Progress',
    src: pethaven1, 
    alt: 'Sydney practice website homepage preview',
    children: [pethaven2, pethaven3, pethaven4, pethaven1],
    linkViewPage: "https://primetech-pethaven-demo.vercel.app/",
    linkViewCode: "",
    tech: [
      { ImgLogo: Nextjs, title: "Next.js", percentage: "52.3%" },
      { ImgLogo: TailwindCSS, title: "Tailwind CSS", percentage: "95.3%" }, 
    ],
  },
  { 
    id: 8, 
    title: 'PrimeTech Demo Website',       
    description: `PrimeTech is a conceptual landing page built with Next.js and styled using Tailwind CSS, demonstrating component-based architecture, optimized rendering, and mobile-first design principles. The project emphasizes performance, scalability, and clean, maintainable code.`,
    details: `
        This project was created as a demo concept to showcase a modern, conversion-focused landing page for a web development agency. The goal was to design a clean and professional interface that clearly communicates services while maintaining strong visual hierarchy and usability.
        Built with Next.js, the application leverages optimized rendering and fast page performance, ensuring a smooth user experience across devices. Tailwind CSS was used to implement a mobile-first, responsive layout with consistent spacing, typography, and reusable UI components.
        Key features include a structured hero section, service highlights, call-to-action elements, and intuitive navigation, all designed to guide users toward engagement. The layout prioritizes readability and accessibility while maintaining a sleek, modern aesthetic.
        This project demonstrates my ability to build scalable frontend architectures, apply modern UI/UX principles, and develop high-performance web interfaces using industry-standard tools.
        `,
    Status: 'In Progress',
    src:primetech1, 
    alt: 'Sydney practice website homepage preview',
    children: [primetech2,primetech3,primetech4,primetech1],
    linkViewPage: "https://primetech-solution.vercel.app/",
    linkViewCode: "",
    tech: [
      { ImgLogo: Nextjs, title: "Next.js", percentage: "52.3%" },
      { ImgLogo: TailwindCSS, title: "Tailwind CSS", percentage: "95.3%" }, 
    ],
  }

];