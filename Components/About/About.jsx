// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';

import { FaCaretRight } from "react-icons/fa";
import on2 from './on2.png'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className='text  border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10'>
            <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:'linear',duration:10,repeat:Infinity }} className='text-[3vw] leading-none font-semibold uppercase   '>RAkshith K N ,A passionate Front-end devloper</motion.h1>
            <motion.h1  initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:'linear',duration:10,repeat:Infinity }} className='text-[3vw] leading-none font-semibold uppercase  '>RAkshith K N ,A passionate Front-end devloper</motion.h1>
        </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={on2}
                            alt="image"
                        />
                    </div>
                    <div style={{height:'400px',width:'500px', border:"2px solid  #D0D3D4",borderRadius:'10px' ,position:'relative',left:'200px',padding:'8px',marginRight:'50px',backgroundColor:'aliceblue'}}>
                        <ul>
                      <li>  <h1 style={{gap:'20px', padding:'20px',fontSize:'20px' ,color:'#2980B9'}}><FaCaretRight style={{display:'inline'}} />&nbsp;&nbsp;My Name is Rakshith K N , I hails from a small village in a nearby a small town called Arsikere </h1></li>
           
          <p style={{gap:'20px', padding:'20px', fontSize:'20px' ,color:'#2980B9'}}><FaCaretRight  style={{display:'inline'}} />&nbsp;&nbsp; I Completed My Graduation      in Computer Science  in Malnad colllege of engineering,Hassan</p>

          <p style={{gap:'20px', padding:'20px',fontSize:'20px' ,color:'#2980B9'}}> <FaCaretRight  style={{display:'inline'}} />&nbsp;&nbsp;I have done my pre university education in Managala P U College,Hassan</p>
          </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}