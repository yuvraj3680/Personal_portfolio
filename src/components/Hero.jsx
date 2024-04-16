import React from "react";

import yuvraj from "../assets/images/yuvraj.png";

const Hero = () => {
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/?hl=en",
    facebook: "https://www.facebook.com/yuvraj.khilari.52",
    linkedin: "https://www.linkedin.com/in/yuvraj-khilari-14032b252 ",
    Github : "https://github.com/yuvraj3680"
  };

  const socialMediaIcons = [
    { name: "logo-instagram", link: socialMediaLinks.instagram },
    { name: "logo-facebook", link: socialMediaLinks.facebook },
    { name: "logo-linkedin", link: socialMediaLinks.linkedin },
    { name: "logo-Github", link: socialMediaLinks.Github },

    
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex mt-4 py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center">
        <img src={yuvraj} alt="" className="md:w-2/4 object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Yuvraj Khilari</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Web Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaIcons.map(({ name, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={name}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



