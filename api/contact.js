import { Resend } from "resend";

const resend = new Resend(
process.env.RESEND_API_KEY
);

export default async function handler(
req,
res
){

if(req.method!=="POST"){

return res.status(405).json({

success:false,
message:"Method not allowed"

});

}

try{

const{

name,
email,
message

}=req.body;


/* Validation */

if(
!name ||
!email ||
!message
){

return res.status(400).json({

success:false,
message:"All fields are required"

});

}


/* EMAIL TO YOU */

await resend.emails.send({

from:
"Ravindra Jadhav <hello@ravindrajadhav.me>",

to:
"jadhaor181@gmail.com",

subject:
`🚀 New Portfolio Inquiry — ${name}`,

html:`

<div style="
font-family:Inter,Arial,sans-serif;
max-width:700px;
margin:auto;
padding:40px;
background:#ffffff;
border-radius:24px;
border:1px solid #e5e7eb;
">

<div style="
margin-bottom:30px;
">

<h1 style="
margin:0;
font-size:30px;
color:#0f172a;
">

New Portfolio Inquiry

</h1>

<p style="
color:#64748b;
">

A new message was submitted from your portfolio.

</p>

</div>


<div style="
padding:25px;
background:#f8fafc;
border-radius:18px;
margin-bottom:25px;
">

<p>
<strong>Name:</strong>
${name}
</p>

<p>
<strong>Email:</strong>
${email}
</p>

</div>


<h3>

Message

</h3>

<div style="
padding:20px;
border-left:4px solid #2563eb;
background:#f8fafc;
border-radius:8px;
line-height:1.7;
">

${message}

</div>


<hr style="
margin:30px 0;
border:none;
border-top:1px solid #e5e7eb;
"/>

<p style="
font-size:14px;
color:#94a3b8;
">

Sent from:
ravindrajadhav.me

</p>

</div>

`

});


/* AUTO REPLY */

await resend.emails.send({

from:
"Ravindra Jadhav <hello@ravindrajadhav.me>",

to:email,

subject:
"Thank you for reaching out — Message Received",

html:`

<div style="
font-family:Inter,Arial,sans-serif;
max-width:700px;
margin:auto;
padding:40px;
background:#ffffff;
border-radius:24px;
border:1px solid #e5e7eb;
">

<h1 style="
font-size:30px;
color:#2563eb;
">

Thank You 👋

</h1>


<p>

Hi ${name},

</p>

<p style="
line-height:1.8;
color:#475569;
">

Thank you for reaching out through my portfolio.

I've successfully received your message and appreciate your interest.

I'll review it and get back to you as soon as possible.

</p>


<div style="
margin-top:30px;
padding:20px;
background:#f8fafc;
border-radius:16px;
">

<p>

<strong>
Your Message
</strong>

</p>

<p>

"${message}"

</p>

</div>


<div style="
margin-top:35px;
">

<p>

Best Regards,

</p>

<p>

<strong>

Ravindra Jadhav

</strong>

</p>

<p>

Full Stack Developer

</p>

<p>

ravindrajadhav.me

</p>

</div>

</div>

`

});


return res.status(200).json({

success:true

});

}

catch(error){

console.log(error);

return res.status(500).json({

success:false,
message:error.message

});

}

}