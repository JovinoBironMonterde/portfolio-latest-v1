"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../public/css/Projects.css";
import { Typography, Button } from "@mui/material";
import { projectsData } from "../components/projectsData"; // Import data

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Projects() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  centerPadding: "10%",
  responsive: [
    {
      breakpoint: 1024,
      settings: { centerPadding: "5%" },
    },
    {
      breakpoint: 768,
      settings: { centerPadding: "2%" },
    },
    {
      breakpoint: 480,
      settings: { centerMode: false, centerPadding: "0px" },
    },
  ],
};

const settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  appendDots: (dots) => <div className="dots-wrapper">{dots}</div>,
};

return (
<div className="w-full h-full">
  <Slider {...settings}>
    {projectsData.map((project, index) => (
      <div key={project.id} className={`Content-${index + 1} w-full px-8 h-full `}>
        <div className="border lg:flex h-full rounded-2xl overflow-hidden">
          {/* Image Slider */}
          <div className="image-wrapper group relative w-full lg:w-1/2 ">
            <Slider {...settings2}>
              {project.images.map((imgSrc, imgIndex) => (
                <div key={imgIndex} className="relative w-full lg:h-[430px] md:h-[300px] h-[280px]">
                  <Image className="image-box"
                    src={imgSrc}
                    alt={`Project ${project.id} - Image ${imgIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </Slider>
            <div className="absolute left-0 bottom-4 transition-opacity duration-300 opacity-0 z-50 group-hover:opacity-100 w-full flex lg:gap-8 md:gap-4 gap-2 justify-center p-4">
              <Button sx={{ width: '150px', color: 'white', borderColor: 'white' }} variant="outlined" href={project.linkViewPage} target="_blank" rel="noopener noreferrer">View Project</Button>
              <Button sx={{ width: '150px' }} variant="contained" color="primary" href={project.linkViewPage} target="_blank" rel="noopener noreferrer">View Code</Button>
            </div>
          </div>
          {/* Details */}
          <div className="relative w-full h-[437px] flex flex-wrap content-between lg:w-1/2 bg-white">
            <Typography variant="h5" gutterBottom sx={{ width: '100%', fontWeight: "bold", textAlign: 'center', color: "Black", padding: '30px' }}>
              {project.titlePage}
            </Typography>
            <Typography gutterBottom sx={{ textAlign: 'center', color: "Black", width: '100%', padding: '10px 50px' }}>
              {project.description}
            </Typography>
    
            {/* Details */}
            <div className="relative w-full flex flex-wrap content-between lg:w-full lg:px-10 lg:pb-8 md:px-10 md:pb-8">
              <div className="w-full pt-3 flex-1 px-3">
                {project.icons.map((item, index) => (
                  <div key={index} className={`stack-${index + 1} relative before h-auto flex items-center mb-4`}>
                    <div className="w-full text-left flex items-center">
                      <span className={`color-${item.title} ${item.title} absolute w-[10px]  h-[10px] top-1 left-0  rounded-full `}></span>
                      <span className="text-xs pl-5 ">{item.title}</span>
                    </div>
                    <div className={`stack-${index + 1} h-3 w-full relative rounded-full overflow-hidden bg-slate-100`}>
                      <div className={`${item.title} absolute left-0 top-0 h-3 rounded-full overflow-hidden`} style={{ width: item.percentage }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>

  <div className="flex items-center justify-center w-full h-44">
    <Button href="https://projects-list-chi.vercel.app/" target="_blank" variant="contained" sx={{marginTop: '80px', borderRadius: '100px', padding: '10px 24px', backgroundColor: 'rgb(22 146 161)'}}>View More!</Button>
  </div>
</div>

);
}
