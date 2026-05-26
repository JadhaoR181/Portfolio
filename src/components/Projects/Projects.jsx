import { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import { Link } from "react-router-dom";
import {projects } from "../../data/projectsData";

import "./Projects.css";


export default function Projects(){

const [index,setIndex]=useState(0);

const nextSlide=()=>{

setIndex(
(prev)=>
(prev+1)%projects.length
);

};

const prevSlide=()=>{

setIndex(
(prev)=>
(prev-1+projects.length)
%
projects.length
);

};

const project=
projects[index];

return(

<section id="projects">

<div className="container">

<h2 className="section-title">
Projects
</h2>

<p className="section-subtitle">
Selected work across AI,
full stack and mobile development.
</p>


<div className="slider-wrapper">

<button
className="slider-btn"
onClick={prevSlide}
>
<ChevronLeft/>
</button>


<AnimatePresence mode="wait">

<Link
to={`/projects/${project.slug}`}
>
<motion.div
key={index}

className="project-showcase"

initial={{
opacity:0,
x:100
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-100
}}

transition={{
duration:.5
}}

drag="x"

dragConstraints={{
left:0,
right:0
}}

onDragEnd={(e,info)=>{

if(info.offset.x<-100){

nextSlide();

}

if(info.offset.x>100){

prevSlide();

}

}}
>

<div className="showcase-image">

<img
src={project.image}
alt={project.title}
/>

</div>


<div className="showcase-content">

<h3>
{project.title}
</h3>

<p>
{project.description}
</p>

<div className="project-tech">

{project.tech.map(
(tech,i)=>(

<span key={i}>
{tech}
</span>

)
)}

</div>

<div className="project-links">

<a
href={project.github}
target="_blank"
>

<Github size={18}/>

Github

</a>

{project.live && (

<a
href={project.live}
target="_blank"
>

<ExternalLink size={18}/>

Live Demo

</a>

)}

</div>

</div>

</motion.div>
</Link>

</AnimatePresence>


<button
className="slider-btn"
onClick={nextSlide}
>

<ChevronRight/>

</button>

</div>


<div className="slider-dots">

{projects.map((_,i)=>(

<button

key={i}

className={
i===index
?
"dot active-dot"
:
"dot"
}

onClick={()=>
setIndex(i)
}

/>

))}

</div>

</div>

</section>

);

}