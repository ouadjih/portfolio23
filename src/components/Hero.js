import React from "react";

import './Hero.css'
import about from '../Assets/Images/about.jpg'
import {useTheme} from '../context/ThemeContext';
//import {resume} from ''
export const Hero = () => {
  const darktheme = useTheme();
  return (
    <>
    <div className={"hero"}>
  
      <h1>Hello, my name is Ouadjih.</h1>
      <p class="subtitle"><br/>It's all about consistency</p>
      {darktheme && <img className="img-hero" src={about} alt="about"/>}
      <a className="button-74" target="_blank" href="./ouadjihboudraa.pdf">Resume</a>
    </div>
    </>
  );
};
