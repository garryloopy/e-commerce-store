"use client";

import {motion} from "framer-motion";


export default function PageLayout({children, className}){
    return (
        <motion.main className={`flex flex-col min-h-screen py-20 px-10 ${className}`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4}}
        >
        {children}
      </motion.main>
    )
  }