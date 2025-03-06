import AboutImage1 from "../../public/assets/img/avails.png";
import AboutImage2 from "../../public/assets/img/image1.jpeg";
import AboutImage3 from "../../public/assets/img/image2.jpeg";

import kylin1 from "../../public/assets/img/kylin/kylin1.png";
import kylin2 from "../../public/assets/img/kylin/kylin2.png";
import kylin3 from "../../public/assets/img/kylin/kylin3.png";

import mimnu1 from "../../public/assets/img/mimnu/mimnu1.png";
import mimnu2 from "../../public/assets/img/mimnu/mimnu2.png";
import mimnu3 from "../../public/assets/img/mimnu/mimnu3.png";

import { Code, Web, DesignServices, Javascript } from "@mui/icons-material"; // Import MUI icons

export const projectsData = [
  {
    id: 1,
    titlePage: "Kylin Project",
    images: [kylin1, kylin2, kylin3],
    description: "This frontend-only loan platform, built with HTML, CSS, Bootstrap, and JavaScript, offers a secure and user-friendly UI for collateral-based loans. It features an easy application process, competitive rates, and a responsive design. While it lacks backend functionality, it provides an interactive and visually appealing experience for loan applications.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "JAVASCRIPT", percentage: "52.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 2,
    titlePage: "Sample Title",
    images: [mimnu1, mimnu2, mimnu3],
    description: "This is the second project showcasing another example.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "JAVASCRIPT", percentage: "52.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 3,
    titlePage: "Sample Title",
    images: [AboutImage2, AboutImage1, AboutImage3],
    description: "A design project featuring creative visuals.",
    linkViewPage: "#",
    linkViewCode: "#",
    icons: [
      { icon: <Code />, title: "JAVASCRIPT", percentage: "52.3%" },
      { icon: <Javascript />, title: "HTML", percentage: "31.3%" },
      { icon: <DesignServices />, title: "CSS", percentage: "16.6%" },
    ],
  },
  {
    id: 4,
    titlePage: "Burger Bistro",
    images: [AboutImage2, AboutImage1, AboutImage3],
    description: "This is my first sample page using Webflow, built to explore its design tools, responsiveness, and interactions. It features a clean layout, custom animations, and a structured approach to web design without coding.",
    linkViewPage: "https://sample-page-25e41f.webflow.io",
    linkViewCode: "#",
    icons: [
      { icon: <DesignServices />, title: "WEBFLOW", percentage: "16.6%" },
    ],
  },
];
