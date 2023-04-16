import React from "react";
import Lottie from "react-lottie";
import skillLottie from "../lotties/skills.json";
import { skills } from "./constants";
import "../css/Skills.css";

function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: skillLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="skill-section">
      <h1 className="skill-header">SKILLS</h1>
      <div className="skill-experience">
        <div>
          {skills.map((item) => (
            <SkillCard title={item.title} items={item.items} />
          ))}
        </div>
        <div className="skill-lottie">
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="skillcard">
      <h1>{title}</h1>
      <div className="skillcard-grid">
        {items.map((item) => (
          <SkillIcon name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ name, icon }) {
  return (
    <div className="skillicon">
      <p className="skill-icon">{icon}</p>
      <p className="skill-text">{name}</p>
    </div>
  );
}

export default Skills;
