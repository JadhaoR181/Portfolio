import {
Github,
Linkedin,
Mail
} from "lucide-react";

import "./Footer.css";

export default function Footer(){

const links=[

{
name:"About",
id:"about"
},

{
name:"Skills",
id:"skills"
},

{
name:"Projects",
id:"projects"
},

{
name:"Contact",
id:"contact"
}

];

const scrollTo=(id)=>{

document
.getElementById(id)
?.scrollIntoView({

behavior:"smooth"

});

};

return(

<footer className="footer">

<div className="container footer-container">

<div className="footer-left">

<h2>
Ravindra.
</h2>

<p>

Building modern web applications
and AI-powered experiences.

</p>

<div className="footer-socials">

<a
href="https://github.com/JadhaoR181"
target="_blank"
rel="noreferrer"
>

<Github size={18}/>

</a>

<a
href="mailto:hello@ravindrajadhav.me"
>

<Mail size={18}/>

</a>

<a
href="https://www.linkedin.com/in/ravindrajadhav08/"
target="_blank"
rel="noreferrer"
>

<Linkedin size={18}/>

</a>

</div>

</div>


<div className="footer-right">

<h4>
Quick Links
</h4>

<div className="footer-links">

{links.map((link)=>(

<button
key={link.id}
onClick={()=>
scrollTo(link.id)
}
>

{link.name}

</button>

))}

</div>

</div>

</div>


<div className="footer-bottom">

<p>

© {new Date().getFullYear()}

 Ravindra Jadhav

</p>

<span>

ravindrajadhav.me

</span>

</div>

</footer>

)

}