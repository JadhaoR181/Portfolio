import express from "express";
import { Resend } from "resend";

const router = express.Router();

router.post("/", async (req,res)=>{

try{

const resend = new Resend(
process.env.RESEND_API_KEY
);

const {
name,
email,
message
} = req.body;


/* EMAIL TO YOU */

await resend.emails.send({

from:"Portfolio <hello@ravindrajadhav.me>",

to:"jadhaor181@gmail.com",

subject:`🚀 New Portfolio Inquiry — ${name}`,

html:`

<div style="
font-family:Arial,sans-serif;
max-width:700px;
margin:auto;
padding:30px;
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:16px;
">

<h1 style="
color:#0f172a;
margin-bottom:20px;
">

New Portfolio Inquiry

</h1>

<div style="
padding:20px;
background:#f8fafc;
border-radius:12px;
margin-bottom:20px;
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

<p style="
line-height:1.7;
color:#475569;
">

${message}

</p>

<hr style="
margin:30px 0;
border:none;
border-top:1px solid #e2e8f0;
"/>

<p style="
font-size:14px;
color:#64748b;
">

Sent from Portfolio Contact Form

</p>

</div>

`

});


/* AUTO EMAIL TO VISITOR */

await resend.emails.send({

from:"Ravindra Jadhav <contact@ravindrajadhav.me>",

to:email,

subject:"Thanks for reaching out — Message Received",

html:`

<div style="
font-family:Arial,sans-serif;
max-width:700px;
margin:auto;
padding:30px;
background:#ffffff;
border:1px solid #e5e7eb;
border-radius:16px;
">

<h1 style="
color:#2563eb;
">

Thank You 👋

</h1>

<p>

Hi ${name},

</p>

<p style="
line-height:1.7;
color:#475569;
">

Thank you for reaching out through my portfolio.

I have received your message and will review it shortly.

I appreciate your interest and I'll get back to you as soon as possible.

</p>

<div style="
margin-top:30px;
padding:20px;
background:#f8fafc;
border-radius:12px;
">

<p>

<strong>Your Message:</strong>

</p>

<p>

"${message}"

</p>

</div>

<div style="
margin-top:30px;
">

<p>

Regards,

</p>

<p>

<strong>
Ravindra Jadhav
</strong>

</p>

<p>
Full Stack Developer
</p>

</div>

</div>

`

});


res.status(200).json({

success:true

});

}
catch(error){

console.log(error);

res.status(500).json({

success:false,
message:error.message

});

}

});

export default router;