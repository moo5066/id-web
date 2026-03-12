"use client";
import React, { useState } from 'react'
// import { FaGithub } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

// import { CiLinkedin } from "react-icons/ci";
// import { FaFacebook } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { IoIosSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { BsFront } from "react-icons/bs";
import { AiOutlineTool } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";








// const Page = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`min-h-screen p-10 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
//       <div> 

//         <button 
//           onClick={() => setDarkMode(!darkMode)}
//           className='absolute top-0 right-0 m-5 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md cursor-pointer'
//         >
//           {darkMode ? <IoIosSunny size={24} className="text-yellow-500" /> : <IoIosMoon size={24} className="text-gray-800" />}
//         </button>

//         <div>
//         {/* <img src="" alt="" /> */}
//         <div>
//     <h1>Mohamed Abdulkadir Abdullahi</h1>
//     <p>Front-End Developer | Web Designer</p>
// </div>
//     <div className="flex space-x-4 mt-4">
//         <Link href="https://github.com" className='flex space-x-2 items-center'><FaGithub size={20}/><p>Github</p></Link>
//         <Link href="https://linkedin.com" className='flex space-x-2 items-center'><CiLinkedin size={20}/><span>Linkedin</span></Link>
//         <Link href="mailto:email@example.com" className='flex space-x-2 items-center'><MdOutlineMail size={20}/><span>Email</span></Link>
      
//     </div>
    
//       </div> 

//       </div>
//     </div>
//   )
// }

// export default Page




// import React from 'react'

const Page = () => {
   const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen  p-10 transition-colors duration-300 ${darkMode ? ' bg-gray-900 text-white' : "bg-gray-100 text-gray-900"}`}>
<div>
      <div>
        <button onClick={()=>setDarkMode(!darkMode)} className={`fixed top-0 right-0 px-3 py-2 m-5 bg-gray-200 rounded-lg shadow-md cursor-pointer ${darkMode ? "bg-gray-800" : "bg-gray-300"}`}>
        {darkMode ? <IoIosSunny size={20} className="text-white"/> : <FiMoon size={20} className="text-gray-900 "/>}
        </button> 
      </div>

<div className='mt-20'>
 
 <div className='flex flex-col  items-center justify-center sm:flex-row sm:gap-7 w-full'>
  <div className='text-center '>
   <Image
  
  src="/Moo.jpeg"
  alt="Mohamed Abdulkadir Abdullahi"
  width={250}
  height={250}
  priority
  className="rounded-lg mx-auto mb-4 object-cover "
/>
</div>

<div>
  <section className='text-center'>
    <h1 className='text-xl sm:text-3xl font-bold'>Mohamed Abdulkadir Abdullahi</h1>
    <p className='text-gray-500'>Front-End Developer | Web Designer</p>
  </section>


<button className='flex justify-center space-x-5 w-full mt-4'> 
<Link href="https://github.com" className={`flex gap-2 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg`}><VscGithubAlt size={20}/>Github</Link>
<Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={`flex gap-2 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg`}><FiFacebook size={20}/>Facebook</Link>
<Link href="mailto:maxamedgoley@gmail.com" className={`flex gap-2 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg`}><MdOutlineMail size={20}/>Email</Link>

</button>
</div>
</div>

<div className='mt-15 md:px-30 lg:px-100'>
  <h1 className='text-xl sm:text-2xl md:text-3xl  font-bold'><span className='border-b-5 border-blue-500'>ABO</span>UT ME</h1>
  <p className='mt-10'>Hi! My name is <span className='font-bold'>Mohamed Abdulkadir Abdullahi</span>, and I’m a passionate <span className='font-bold'>Front-End Developer.</span> I specialize in <span className='font-bold'>creating responsive, user-friendly, and visually appealing web interfaces</span>. I enjoy turning complex designs into functional, smooth, and interactive web experiences.

I have experience with:<span className='font-bold'>

HTML, CSS, and JavaScript, which form the core of my web development skills.

React.js and Next.js, for building modern and efficient web applications.

Responsive design, ensuring websites look great on any device.

UI/UX awareness</span>, so users not only interact with websites easily but also enjoy the experience.

I’m constantly learning new technologies to stay up to date with the fast-paced world of web development. <span className='font-bold'>My goal is to create interfaces that are not only functional but also enjoyable to use</span>.

If you’re looking for a developer who can turn ideas into engaging web experiences, I’m ready to take on the challenge!</p>
</div>


  </div>



</div>
</div>

  )
}

export default Page
