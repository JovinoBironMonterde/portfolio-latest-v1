// ProjectData.js
// Path: C:\portfolio\components\ProjectData.js

const Bootstrap = "/assets/logo/Bootstrap.png";
const HTML5    = "/assets/logo/HTML5.png";
const CSS3     = "/assets/logo/CSS3.png";
const GitHub   = "/assets/logo/GitHub.png";





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
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 2, 
    title: 'Your Project Title2',     
    description: 'Project description', 
    details: 'Additional details',  
    src: [lolitahotel1],
    alt: 'Forest path',
    children: [lolitahotel1, lolitahotel2, lolitahotel3, lolitahotel5, lolitahotel8, lolitahotel10 ],
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 3, 
    title: 'Your Project Title3',       
    description: 'Project description', 
    details: 'Additional details',  
    src: apchu1, 
    alt: 'Wildflowers',
    children:  [apchu1, apchu2, apchu3],
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" }, 
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 4, 
    title: 'Your Project Title4',       
    description: 'Project description', 
    details: 'Additional details',  
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800', 
    alt: 'Sunset lake',
    children: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    ],
    tech: [
        { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
        { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
        { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 5, 
    title: 'Your Project Title5',       
    description: 'Project description', 
    details: 'Additional details',  
    src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800', 
    alt: 'Coastal view',
    children: [
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    ],
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 6, 
    title: 'Your Project Title6',       
    description: 'Project description', 
    details: 'Additional details',  
    src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800', 
    alt: 'Mountain peak',
    children: [
      'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    ],
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 7, 
    title: 'Your Project Title7',       
    description: 'Project description', 
    details: 'Additional details',  
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800', 
    alt: 'Desert landscape',
    children: [
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400',
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400'
    ],
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
  { 
    id: 8, 
    title: 'Your Project Title8',       
    description: 'Project description', 
    details: 'Additional details',  
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', 
    alt: 'Dense forest',
    children: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400'
    ],
    tech: [
      { ImgLogo: Bootstrap, title: "JAVASCRIPT", percentage: "52.3%" },
      { ImgLogo: CSS3, title: "HTML", percentage: "95.3%" },
      { ImgLogo: GitHub, title: "CSS", percentage: "80.6%" },
    ],
  },
];