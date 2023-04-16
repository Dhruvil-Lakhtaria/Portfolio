import React, { useState } from "react";
import "../css/Header.css";
import Marquee from "react-fast-marquee";
import About from "./About";
function Title() {
  const [toggle, setToggle] = useState(true);
  const handleAboutMe = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header-title">
      <span className="strike-through">
        Dhruv
        <span className="about-me-i" onClick={handleAboutMe}>
          i
        </span>
        l
      </span>
      {toggle ? (
        <Marquee speed={120} gradient={false} className="marque-text animate-1">
          Enthusiastic Learner . Creative Problem Solver . Competitive Leader
        </Marquee>
      ) : (
        <Marquee speed={0} gradient={false} className="marque-text animate">
          <About onClick={handleAboutMe} />
        </Marquee>
      )}
      <span className="strike-through">
        Lakhtar
        <span className="about-me-i" onClick={handleAboutMe}>
          i
        </span>
        a
      </span>
    </div>
  );
}

export default Title;
