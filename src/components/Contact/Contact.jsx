import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
Mail,
MapPin,
Send
}
from "lucide-react";

import "./Contact.css";

export default function Contact(){

const[
form,
setForm
]=useState({

name:"",
email:"",
message:""

});

const[
loading,
setLoading
]=useState(false);

const[
success,
setSuccess
]=useState(false);

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const handleSubmit=async(e)=>{

e.preventDefault();

setLoading(true);

try{

await axios.post(

import.meta.env.PROD
? "/api/contact"
: "http://localhost:5000/api/contact",

form

);

toast.success(
"Message sent successfully"
);

setForm({

name:"",
email:"",
message:""

});

}
catch{

toast.error(
"Something went wrong"
);

}

setLoading(false);

};

return(

<section id="contact">

<div className="container">

<h2 className="section-title">
Let's Work Together
</h2>

<p className="section-subtitle">

Interested in collaborating,
building products,
or discussing opportunities?

</p>

<div className="contact-wrapper">

<div className="contact-info">

<div>

<Mail/>

<h4>Email</h4>

<p>
jadhaor181@gmail.com
</p>

</div>

<div>

<MapPin/>

<h4>Location</h4>

<p>
Mumbai, India
</p>

</div>

</div>

<form
onSubmit={handleSubmit}
className="contact-form"
>

<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Message"
rows={6}
value={form.message}
onChange={handleChange}
/>

<button>

<Send size={18}/>

{
loading
?
"Sending..."
:
"Send Message"
}

</button>

{
success && (

<p className="success">

Message sent successfully.

</p>

)

}

</form>

</div>

</div>

</section>

)

}