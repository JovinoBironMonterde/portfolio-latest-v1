import AboutImage1 from "../../public/assets/img/avails.png";
import AboutImage2 from "../../public/assets/img/image1.jpeg";
import AboutImage3 from "../../public/assets/img/image2.jpeg";
import { Code, Web, DesignServices, Javascript } from "@mui/icons-material"; // Import MUI icons

export const projectsData = [
  {
    id: 1,
    titlePage: "Kylin Project",
    images: [AboutImage1, AboutImage2, AboutImage3],
    description: "This is the first project description with some key details. This is the first project description with some key details.This is the first project description with some key details.This is the first project description with some key details.",
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
    images: [AboutImage3, AboutImage2, AboutImage1],
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
];
