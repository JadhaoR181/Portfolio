import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaGitAlt
} from "react-icons/fa";

import { BiLogoVisualStudio } from "react-icons/bi";

import {
  SiNextdotjs,
  SiMongodb,
  SiFastapi,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiAndroid,
  SiExpo,
  SiPostman,
  SiExpress,
  SiVercel,
  SiVsco,
  SiVite
} from "react-icons/si";

import "./Skills.css";

export default function Skills() {

  const skillGroups=[

{
title:"Frontend",

skills:[

{
name:"React",
icon:<FaReact/>
},

{
name:"Next.js",
icon:<SiNextdotjs/>
},

{
name:"Tailwind",
icon:<SiTailwindcss/>
},

{
name:"Vite",
icon:<SiVite/>
}

]
},

{
title:"Backend",

skills:[

{
name:"Node.js",
icon:<FaNodeJs/>
},

{
name:"Express",
icon:<SiExpress/>
},

{
name:"FastAPI",
icon:<SiFastapi/>
},

{
name:"Python",
icon:<FaPython/>
}

]
},

{
title:"Database & Cloud",

skills:[

{
name:"MongoDB",
icon:<SiMongodb/>
},

{
name:"MySQL",
icon:<SiMysql/>
},

{
name:"Firebase",
icon:<SiFirebase/>
},

{
name:"Vercel",
icon:<SiVercel/>
}

]
},

// {
// title:"AI & Automation",

// skills:[

// {
// name:"Gemini API"
// },

// {
// name:"OpenAI API"
// },

// {
// name:"GitHub API"
// },

// {
// name:"Resend API"
// }

// ]
// },

{
title:"Mobile",

skills:[

{
name:"Flutter",
icon:<SiFlutter/>
},

{
name:"React Native",
icon:<SiExpo/>
},

{
name:"Android Studio",
icon:<SiAndroid/>
},

]
},

{
title:"Tools & DevOps",

skills:[

{
name:"Git",
icon:<FaGitAlt/>
},

{
name:"GitHub",
icon:<FaGithub/>
},

{
name:"Postman",
icon:<SiPostman/>
},

{
name:"VS Code",
icon:<BiLogoVisualStudio/>
}

]
}

];

  return (

    <section id="skills">

      <div className="container">

        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use
          to build scalable applications.
        </p>

        <div className="skills-container">

          {skillGroups.map((group,index)=>(

            <div
              key={index}
              className="skill-group"
            >

              <h3>
                {group.title}
              </h3>

              <div className="skill-items">

                {group.skills.map((skill,i)=>(

                  <div
                    key={i}
                    className="skill-card"
                  >

                    <span>
                      {skill.icon}
                    </span>

                    <p>
                      {skill.name}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}