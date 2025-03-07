
import kylin1 from "../../public/assets/img/kylin/kylin1.png";
import kylin2 from "../../public/assets/img/kylin/kylin2.png";
import kylin3 from "../../public/assets/img/kylin/kylin3.png";

import mimnu1 from "../../public/assets/img/mimnu/mimnu1.png";
import mimnu2 from "../../public/assets/img/mimnu/mimnu2.png";
import mimnu3 from "../../public/assets/img/mimnu/mimnu3.png";

import burderbistro1 from "../../public/assets/img/burger_bistro/burgerbistro1.png";
import burderbistro2 from "../../public/assets/img/burger_bistro/burgerbistro2.png";
import burderbistro3 from "../../public/assets/img/burger_bistro/burgerbistro3.png";
import burderbistro4 from "../../public/assets/img/burger_bistro/burgerbistro4.png";

import apchu1 from "../../public/assets/img/apchu/apchu1.png";
import apchu2 from "../../public/assets/img/apchu/apchu2.png";
import apchu3 from "../../public/assets/img/apchu/apchu3.png";




import { Code, Web, DesignServices, Javascript } from "@mui/icons-material"; // Import MUI icons

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
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    titlePage: "Burger Bistro",
    images: [burderbistro1, burderbistro2, burderbistro3, burderbistro4],
    description: "This is my first sample page using Webflow, built to explore its design tools, responsiveness, and interactions. It features a clean layout, custom animations, and a structured approach to web design without coding.",
    linkViewPage: "https://sample-page-25e41f.webflow.io",
    linkViewCode: "#",
    icons: [
      { icon: <DesignServices />, title: "WEBFLOW", percentage: "100%" },
    ],
  },
];
