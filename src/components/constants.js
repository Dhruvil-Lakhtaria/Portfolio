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
} from "react-icons/di";
import {AiFillCode} from "react-icons/ai"
import { SiCplusplus,SiC,SiExpress,SiPostman, SiVisualstudiocode } from "react-icons/si"
import wec from "../assets/wec.png"
import ieee from "../assets/ieee.jpg"

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pls-1",
        name: "C++",
        icon: <SiCplusplus/>,
      },
      {
        id: "pls-2",
        name: "C",
        icon: <SiC/>,
      },
      {
        id: "pls-3",
        name: "Javascript",
        icon: <DiJavascript/>,
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
        icon: <DiGo/>,
      },
      {
        id: "pls-7",
        name: "HTML",
        icon: <DiHtml5/>,
      },
      {
        id: "pls-8",
        name: "CSS",
        icon: <DiCss3/>,
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "fs-1",
        name: "ReactJs",
        icon: <DiReact/>,
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
        icon: <AiFillCode/>,
      },
      {
        id: "tts-4",
        name: "Github",
        icon: <DiGithub/>,
      },
      {
        id: "tts-5",
        name: "Postman",
        icon: <SiPostman/>,
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
    name:"Web Club",
    image:wec,
    work:[
      {
        date:"April 2023-Present",
        details:"Co-Chair Algorithms SIG",
      },
      {
        date:"December 2021 - Present",
        details:"Executive Member Algorithms SIG",
      },
      {
        date:"February 2022 - March 2022",
        details:"Incident 2022 Website Team",
      }
    ]
  },
  {
    name:"IEEE NITK",
    image:ieee,
    work:[
      {
        date:"October 2021 - Present",
        details:"Executive Member, Computer Society"
      },
      {
        date:"September 2022 - Present",
        details:"Website Team member" 
      },
      {
        date:"December 2021 - August 2022",
        details:"Blog Coordinator",
      },
      {
        date:"February 2021 - October 2021",
        details:"Student Member, IEEE NITK",
      }
   
    ]
  }
]