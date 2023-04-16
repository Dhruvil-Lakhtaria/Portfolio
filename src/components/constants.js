import {
  DiReact,
  DiGit,
  DiGithub,
  DiNodejs,
  DiPython,
  DiJava,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiGo,
  DiDocker,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import { AiFillCode } from "react-icons/ai";
import {
  SiCplusplus,
  SiC,
  SiExpress,
  SiPostman,
  SiVisualstudiocode,
  SiRedux,
} from "react-icons/si";
import wec from "../assets/wec.png";
import ieee from "../assets/ieee.jpg";

import connect4 from "../assets/connect4.jpg";
import tournament from "../assets/tournament.jpg";
import judge from "../assets/judge.jpg";
import codebook from "../assets/codebook.png";

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pls-1",
        name: "C++",
        icon: <SiCplusplus />,
      },
      {
        id: "pls-2",
        name: "C",
        icon: <SiC />,
      },
      {
        id: "pls-3",
        name: "Javascript",
        icon: <DiJavascript />,
      },
      {
        id: "pls-4",
        name: "Python",
        icon: <DiPython />,
      },
      {
        id: "pls-5",
        name: "Java",
        icon: <DiJava />,
      },
      {
        id: "pls-6",
        name: "GoLang",
        icon: <DiGo />,
      },
      {
        id: "pls-7",
        name: "HTML",
        icon: <DiHtml5 />,
      },
      {
        id: "pls-8",
        name: "CSS",
        icon: <DiCss3 />,
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "fs-1",
        name: "ReactJs",
        icon: <DiReact />,
      },
      {
        id: "fs-2",
        name: "Node.Js",
        icon: <DiNodejs />,
      },
      {
        id: "fs-3",
        name: "Express",
        icon: <SiExpress />,
      },
    ],
  },
  {
    title: "Tools/Technologies",
    items: [
      {
        id: "tts-1",
        name: "Git",
        icon: <DiGit />,
      },
      {
        id: "tts-2",
        name: "Docker",
        icon: <DiDocker />,
      },
      {
        id: "tts-3",
        name: "Shell Scripting",
        icon: <AiFillCode />,
      },
      {
        id: "tts-4",
        name: "Github",
        icon: <DiGithub />,
      },
      {
        id: "tts-5",
        name: "Postman",
        icon: <SiPostman />,
      },
      {
        id: "tts-6",
        name: "VS Code",
        icon: <SiVisualstudiocode />,
      },
    ],
  },
];

export const experience = [
  {
    name: "Web Club",
    image: wec,
    work: [
      {
        date: "April 2023-Present",
        details: "Co-Chair Algorithms SIG",
      },
      {
        date: "December 2021 - Present",
        details: "Executive Member Algorithms SIG",
      },
      {
        date: "February 2022 - March 2022",
        details: "Incident 2022 Website Team",
      },
    ],
  },
  {
    name: "IEEE NITK",
    image: ieee,
    work: [
      {
        date: "October 2021 - Present",
        details: "Executive Member, Computer Society",
      },
      {
        date: "September 2022 - Present",
        details: "Website Team member",
      },
      {
        date: "December 2021 - August 2022",
        details: "Blog Coordinator",
      },
      {
        date: "February 2021 - October 2021",
        details: "Student Member, IEEE NITK",
      },
    ],
  },
];

export const project = [
  {
    image: codebook,
    title: "Codebook",
    url: "https://github.com/orgs/IEEE-Codebook/repositories",
    info: "CodeBook lets you track your progress at various coding platforms and get all your stats in one place. It helps one compete with their friends by tracking their progress and submissions.",
    tech: [
      {
        id: "react",
        icon: <DiReact />,
      },
      {
        id: "Nodejs",
        icon: <DiNodejs />,
      },
      {
        id: "Express",
        icon: <SiExpress />,
      },
      {
        id: "Mongodb",
        icon: <DiMongodb />,
      },
      {
        id: "redux",
        icon: <SiRedux />,
      },
    ],
  },
  {
    image: judge,
    title: "Competitive Programming Judge",
    url: "https://github.com/orgs/Programming-Judge/repositories",
    info: "A functional programming judge system which compiles and executes code.Testing occurs in isolated environments using Docker Containers.",
    tech: [
      {
        id: "react",
        icon: <DiReact />,
      },
      {
        id: "Golang",
        icon: <DiGo />,
      },
      {
        id: "Dockerfile",
        icon: <DiDocker />,
      },
      {
        id: "PostgreSql",
        icon: <DiPostgresql />,
      },
      {
        id: "Shell Scripting",
        icon: <AiFillCode />,
      },
    ],
  },
  {
    image: tournament,
    title: "Tournament Simulator and Predictor",
    url: "https://github.com/Dhruvil-Lakhtaria/Tournament-Simulator-Predictor",
    info: "A fully functional tournament simulator usign Object oriented programming. Prediction for the fixture are done using calculated-randomized predictor.",
    tech: [
      {
        id: "Java",
        icon: <DiJava />,
      },
    ],
  },
  {
    image: connect4,
    title: "Connect-4 Bot",
    url: "https://github.com/Dhruvil-Lakhtaria/Connect4",
    info: "An unbeatabel computer bot for Connect-4 game using Minimax Algorithm and Alpha-Beta Pruning.",
    tech: [
      {
        id: "react",
        icon: <DiReact />,
      },
      {
        id: "html",
        icon: <DiHtml5 />,
      },
      {
        id: "css",
        icon: <DiCss3 />,
      },
    ],
  },
];
