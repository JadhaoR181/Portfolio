import { useEffect } from "react";
import Lenis from "lenis";

export default function useSmoothScroll(){

useEffect(()=>{

const lenis = new Lenis({

duration:1.5,

smoothWheel:true,

touchMultiplier:2,

wheelMultiplier:1,

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(
raf
);

}

requestAnimationFrame(
raf
);

return ()=>{

lenis.destroy();

};

},[]);

}