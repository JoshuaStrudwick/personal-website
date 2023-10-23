import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-2">
          I've been passionate about all things tech for years and now I'm trying to make it my future! I'm in my 2nd year of Computer Science at Queen's University Belfast and am actively looking for internship opportunities in the NI tech industry.
        </p>

        <br />

        <p className="text-xl">
          I have experience in a number of languages and want to expand my knowledge and skills. I have recently been researching into cyber security, and had a go at making my own <Link to="portfolio" smooth duration={500} className="text-cyan-500 hover:underline cursor-pointer">password manager</Link>. Check out that project below!
        </p>
      </div>
    </div>
  );
};

export default About;