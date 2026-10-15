"use client";
import{motion,useReducedMotion}from"framer-motion";
export default function Template({children}:{children:React.ReactNode}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.65,ease:[.16,1,.3,1]}}>{children}</motion.div>}
