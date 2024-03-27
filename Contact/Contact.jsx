import './Co.css'
// import React from 'react'
// import { Link } from 'react-router-dom'

import { FaLinkedin } from "react-icons/fa6"
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";




export default function Contact() {
    const emailAddress = "rakshithkn2001@gmail.com"
    return (
        <div style={{padding:'40px'}}>
<h1 style={{textAlign:'center',fontSize:'30px',color:'#1F259B '}} className='skills'>Contact Details</h1>

        <div style={{ display:"flex", justifyContent:'center',padding:"10px"}}>
        <div className='name' style={{height:'400px', width:'400px', border:'2px solid gray',borderRadius:'20px',display:'flex',justifyContent:'space-around',flexDirection:'column',position:'relative'}}>
<div style={{position:'relative',left:'55px',padding:'20px' ,display:'inline',fontWeight:'bold'}}><CgMail  style={{display:'inline'}}/>  :  <a className='dark:md:hover:text-fuchsia-600'   href={`mailto:${emailAddress}` }>rakshithkn2001@gmail.com</a> </div>
<div style={{display:'inline',position:'relative',left:'55px',padding:'20px',fontWeight:'bold'}}>  <FaLinkedin style={{display:'inline'}} />   :<a className='dark:md:hover:text-fuchsia-600'   href="https://www.linkedin.com/in/rakshithkn27/" style={{display:'inline' ,color:'indigo', }}>Click Here For Linkedin </a> </div>
<div style={{display:'inline',position:'relative',left:'55px',padding:'20px',fontWeight:'bold'}}>  <FaGithub style={{display:'inline'}}/> :<a className='dark:md:hover:text-fuchsia-600'   href="https://github.com/rakshithkn1" style={{display:'inline' ,color:'indigo', }}>Click Here For Github </a> </div>
<div style={{display:'inline',position:'relative',left:'55px',padding:'20px',fontWeight:'bold'}}> <FaPhoneVolume style={{display:'inline'}}/> :<a className='dark:md:hover:text-fuchsia-600'   href="9353763916" style={{display:'inline' ,color:'indigo', }}>+91-9353763916</a> </div>

</div>

        </div>

        </div>
       
    );
}
