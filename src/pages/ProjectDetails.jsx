import {
ArrowLeft,
Github,
ExternalLink,
CheckCircle
} from "lucide-react";

import {
useParams,
Link
} from "react-router-dom";

import {
projects
} from "../data/projectsData";

import {
motion
} from "framer-motion";

import "./ProjectDetails.css";

export default function ProjectDetails(){

const {slug}=useParams();

const project=
projects.find(
p=>p.slug===slug
);

if(!project){

return(

<section className="project-not-found">

<div className="container">

<h1>

Project not found

</h1>

<Link to="/">

Go Home

</Link>

</div>

</section>

);

}

return(

<section className="project-details">

<div className="container">

<Link
to="/"
className="back-btn"
>

<ArrowLeft size={18}/>

Back to Portfolio

</Link>


<motion.div
className="project-hero"

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}
>

<div className="details-hero-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="details-hero-content">

<h1>

{project.title}

</h1>

<p>

{project.description}

</p>

<div className="details-project-tech">

{project.tech.map(
(tech,index)=>(

<span key={index}>

{tech}

</span>

)
)}

</div>

<div className="details-project-actions">

<a
href={project.github}
target="_blank"
rel="noreferrer"
>

<Github size={18}/>

Github

</a>

{project.live && (

<a
href={project.live}
target="_blank"
rel="noreferrer"
>

<ExternalLink size={18}/>

Live Demo

</a>

)}

</div>

</div>

</motion.div>


<div className="project-section">

<h2>

Key Features

</h2>

<div className="feature-grid">

{project.features.map(
(feature,index)=>(

<div
key={index}
className="feature-card"
>

<CheckCircle
size={18}
/>

<p>

{feature}

</p>

</div>

)
)}

</div>

</div>


<div className="project-section">

<h2>

Screenshots

</h2>

<div className="screenshots-grid">

{project.screenshots.map(
(img,index)=>(

<motion.img

key={index}

src={img}

alt={`Screenshot ${index}`}

whileHover={{

scale:1.03

}}

transition={{

duration:.3

}}

/>

)
)}

</div>

</div>

</div>

</section>

);

}