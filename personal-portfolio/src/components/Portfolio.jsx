import React from "react";
import passwordManagement from "../assets/portfolio/passwordManagement.png";
import personal from "../assets/portfolio/personal.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: passwordManagement,
      codeURL: "https://github.com/JoshuaStrudwick/Password-Management-System",
    },
    {
      id: 2,
      src: personal,
      codeURL: "https://github.com/JoshuaStrudwick/personal-website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Have a look at some of my work below:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeURL }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={codeURL} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;