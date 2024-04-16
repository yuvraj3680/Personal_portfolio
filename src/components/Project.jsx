import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import penelty from "../assets/images/penelty.png";
import panaltyCred from "../assets/images/panaltyCred.png";
import recipefinder from "../assets/images/recipe-finder.png";
import movix from "../assets/images/movix.png";
import Weather from "../assets/images/Weather.png";
import todo from "../assets/images/todo.png";
import expence from "../assets/images/expence.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: penelty,
      name: "RECHARGE.PLENTYCRED.CO.IN Using Mern-Stack",
      github_link: "https://github.com/innovativeroh/plentycred-recharge ",
      live_link: "https://recharge.plentycred.co.in/",
      
    },
    {
      img: panaltyCred,
      name: "PLENTYCRED.CO.IN Using Mern-Stack",
      github_link: "https://github.com/innovativeroh/plentycred-recharge",
      live_link: "https://plentycred.co.in/",
    },
    {
      img: recipefinder,
      name: "recipe-finder Using reactjs",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: movix,
      name: "Movix",
      github_link:
        "https://github.com/yuvraj3680/Movix",
      live_link: " https://movix-sigma-two.vercel.app/",
    },
    {
      img: Weather,
      name: "Weather app",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
    {
      img: todo,
      name: "Todo App",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
    {
      img: expence,
      name: "expence Tracker ",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
   
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
