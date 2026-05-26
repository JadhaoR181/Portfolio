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

success:false

});

}

try{

const{
name,
email,
message
}=req.body;


await resend.emails.send({

from:
"Ravindra Jadhav <onboarding@resend.dev>",

to:
"jadhaor181@gmail.com",

subject:
`🚀 New Portfolio Inquiry - ${name}`,

html:`

<h2>New Portfolio Inquiry</h2>

<p>
<strong>Name:</strong>
${name}
</p>

<p>
<strong>Email:</strong>
${email}
</p>

<p>
<strong>Message:</strong>
${message}
</p>

`

});


await resend.emails.send({

from:
"Ravindra Jadhav <onboarding@resend.dev>",

to:email,

subject:
"Thank you for reaching out",

html:`

<h2>
Thank You 👋
</h2>

<p>

Hi ${name},

I received your message and will contact you shortly.

Regards,
Ravindra Jadhav

</p>

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