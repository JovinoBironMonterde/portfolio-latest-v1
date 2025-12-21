
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



import { Code, Web, DesignServices, Javascript } from "@mui/icons-material";

export const projectsData = [
  {
    id: 1,
    titlePage: "Kylin Project",
    images: [kylin1, kylin2, kylin3],
    description: "This frontend-only loan platform, built with HTML, CSS, Bootstrap, and JavaScript, offers a secure and user-friendly UI for collateral-based loans. It features an easy application process, competitive rates, and a responsive design. While it lacks backend functionality, it provides an interactive and visually appealing experience for loan applications.",
    linkViewPage: "https://jovinobironmonterde.github.io/kylin_sample_project/",
    linkViewCode: "https://github.com/JovinoBironMonterde/LoanSystem_project",
    icons: [
      { icon: <Code />, title: "JAVASCRIPT", percentage: "52.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "95.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "80.6%" },
    ],
  },

  {
    id: 2,
    titlePage: "Property Management System(PMS)",
    images: [lolitahotel1, lolitahotel2, lolitahotel3, lolitahotel4, lolitahotel5, lolitahotel6, lolitahotel7, lolitahotel8, lolitahotel9, lolitahotel10 ],
    description: "Built a Property Management System using React.js and Material-UI (MUI). Developed features like Check-in/Check-out, online booking, employee scheduling, payroll, and biometric attendance tracking. Designed responsive UIs, integrated RESTful APIs, and collaborated with backend teams to optimize performance. Delivered a scalable, user-friendly solution that enhanced operational efficiency.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "REACT", percentage: "90.6%" },
      { icon: <Javascript />, title: "MYSQL", percentage: "60.3%" },
      { icon: <DesignServices />, title: "MATERIALUI", percentage: "90.6%" },
    ],
  },

  {
    id: 3,
    titlePage: "Mimnu",
    images: [mimnu1, mimnu2, mimnu3],
    description: "My role at Mimnu, an e-commerce site, I am responsible for designing each webpage with a strong emphasis on creating interactive and engaging user experiences. Additionally, I ensure that these designs are seamlessly integrated into a mobile-responsive format, guaranteeing optimal functionality across various devices and enhancing the overall usability of the website.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "JQUERY", percentage: "60.3%" },
      { icon: <Code />, title: "LARAVEL", percentage: "70.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "90.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "80.6%" },
    ],
  },
  {
    id: 4,
    titlePage: "A.P Chu",
    images: [apchu1, apchu2, apchu3],
    description: "Take design mockups and translate them into clean, responsive, and pixel-perfect web interfaces",
    linkViewPage: "https://www.apccdc.com/",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "WORDPRESS", percentage: "80.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },

  // Burger Bistro
  {
    id: 5,
    titlePage: "Burger Bistro",
    images: [burgerbistro1, burgerbistro2, burgerbistro3, burgerbistro4],
    description: "This is my first sample page using Webflow, built to explore its design tools, responsiveness, and interactions. It features a clean layout, custom animations, and a structured approach to web design without coding.",
    linkViewPage: "https://sample-page-25e41f.webflow.io",
    linkViewCode: "#",
    icons: [
      { icon: <DesignServices />, title: "WEBFLOW", percentage: "100%" },
    ],
  },
];
