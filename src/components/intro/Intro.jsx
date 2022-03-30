import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 1200});
  })

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Open Source Contributor"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer" data-aos="fade-right">
          <img src="my_picture.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3 data-aos="fade-down">Hi, My Name Is </h3>
          {/* <img src="wave.gif" height="70px" width="90px"/> */}
          <h2>Abhishek Choudhary</h2>
          <h4>
             <span ref={textRef}></span>
          </h4>
          <br />
          <div className="contact" data-aos="fade-up">
            <a href="https://github.com/abhich21" target="blank"><FaGithub className="icon"/></a>
            <a href="https://twitter.com/Abhi_official21" target="blank"><FaTwitterSquare className="icon"/></a>
            <a href="https://www.linkedin.com/in/abhishek-choudhary-06856a230/" target="blank"><GrLinkedin className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}