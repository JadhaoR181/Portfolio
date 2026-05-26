import {motion}
from "framer-motion";

export default function Reveal({

children

}){

return(

<motion.div

initial={{

opacity:0,
y:50

}}

whileInView={{

opacity:1,
y:0

}}

viewport={{

once:true,
amount:.2

}}

transition={{

duration:.7

}}

>

{children}

</motion.div>

);

}