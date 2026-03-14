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
    <div className={`min-h-screen   p-10 transition-colors duration-300 ${darkMode ? ' bg-gray-900 text-white' : "bg-gray-100 text-gray-900"}`}>
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


<div className='flex justify-center space-x-5 w-full mt-4'> 
<Link href="https://github.com" className={`flex gap-2 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg`}><VscGithubAlt size={20}/>Github</Link>
<Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={`flex gap-2 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg`}><FiFacebook size={20}/>Facebook</Link>
<Link href="mailto:maxamedgoley@gmail.com" className={`flex gap-2 items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg`}><MdOutlineMail size={20}/>Email</Link>

</div>
</div>
</div>

<div className='mt-15 md:px-30 lg:px-100'>
  <h1 className='text-xl sm:text-2xl md:text-3xl  font-bold'><span className='border-b-5 border-green-500'>ABO</span>UT ME</h1>
  <p className='mt-10'>Hi! My name is <span className='font-bold'>Mohamed Abdulkadir Abdullahi</span>, and I’m a passionate <span className='font-bold'>Front-End Developer.</span> I specialize in <span className='font-bold'>creating responsive, user-friendly, and visually appealing web interfaces</span>. I enjoy turning complex designs into functional, smooth, and interactive web experiences.

I have experience with:<span className='font-bold'>

HTML, CSS, and JavaScript, which form the core of my web development skills.

React.js and Next.js, for building modern and efficient web applications.

Responsive design, ensuring websites look great on any device.

UI/UX awareness</span>, so users not only interact with websites easily but also enjoy the experience.

I’m constantly learning new technologies to stay up to date with the fast-paced world of web development. <span className='font-bold'>My goal is to create interfaces that are not only functional but also enjoyable to use</span>.

If you’re looking for a developer who can turn ideas into engaging web experiences, I’m ready to take on the challenge!</p>
</div>

      {/* <hr className={`mt-15  w-full md:w-[50%] ${darkMode ? "text-gray-700 " : "text-gray-300   "}`}/> */}
            <hr className={`mt-16 md:mx-32 lg:mx-96 ${darkMode ? "border-gray-700" : "border-gray-300"}`}/>


{/* <div className={`p mt-10 md:px-30 lg:px-100 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}> */}
  <div className='mt-20'>
    <h1 className='font-bold text-xl text-center sm:text-2xl md:text-3xl'><span className='border-b-5 border-green-500'>TEC</span>H STACK</h1>
  </div>
  <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-6 mt-10'>
  <div className={`${darkMode ? "bg-gray-800 border border-gray-700 hover:border-green-400" : "bg-white border border-gray-200 hover:border-green-400"}  px-5 py-3   rounded-lg`}>
    <div className='flex space-x-3 items-center'>
      <BsFront className="text-green-400"/>
    <h1 className="text-green-400">Frontend Development</h1>
    </div>
    <div className='flex flex-wrap w-full   h-15 gap-2 mt-4 items-center'>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-green-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-green-300'}`}>TypeScript</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-green-300 hover:text-black': 'bg-gray-200 text-gray-800 hover:bg-green-300'}`}>Figma</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-green-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-green-300'}`}>UI/UX</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-green-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-green-300'}`}>React</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-green-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-green-300'}`}>Next.js</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-green-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-green-300'}`}>Tailwind CSS</p>
    </div> 
</div>

 <div className={`${darkMode ? "bg-gray-800 border border-gray-700 hover:border-blue-400" : "bg-white border border-gray-200 hover:border-blue-400"}  px-5 py-3   rounded-lg`}>
    <div className='flex justify-center space-x-3 items-center'>
      <AiOutlineTool className="text-blue-400 "/>
    <h1 className="border-green-500">Tools & Technologies</h1>
    </div>
    <div className='flex justify-center w-full  h-15 gap-2 mt-4 items-center'>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-blue-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-blue-300'}`}>Git & GitHub</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-blue-300 hover:text-black': 'bg-gray-200 text-gray-800 hover:bg-blue-300'}`}>VS Code</p>
      <p className={`px-3 py-1 text-sm font-medium rounded-full ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-blue-300 hover:text-black' : 'bg-gray-200 text-gray-800 hover:bg-blue-300'}`}>Figma</p>
    </div> 
</div>
    <hr className={`mt-15 ${darkMode ? "text-gray-800 md:px-30 lg:px-100" : "text-gray-300 md:px-30 lg:px-100"}`}/>
</div>
 <div className='mt-10 md:px-30 lg:px-100'>
          <h1 className='text-2xl font-semibold'><span className='border-b-5 border-green-500'>Feat</span>ured Projects</h1>
    <div className={`mt-10 min-h-60 ${darkMode ? "bg-gray-800 border border-gray-700 hover:border-blue-400 rounded-lg" : "bg-gray-100 border border-gray-200 hover:border-blue-400 rounded-lg hover:scale-105 transition-all duration-300"}`}>
    
      <div className='px-4 py-3'>
      <div>
          <div className='flex flex-row gap-3 items-center '>
            <h1 className='text-xl font-semibold'>Quiz-web</h1>
          <Link href='https://github.com'> <BsBoxArrowUpRight size={15} className="hover:text-blue-500"/></Link> 
          </div>

          <div className='mt-5 flex flex-col gap-6 text-sm text-gray-700'>

            <div className='flex flex-row gap-3 items-center'>
              <GoDotFill size={20} className="text-blue-500"/>            
            <p>Test users’ knowledge by letting them answer multiple-choice questions and see their score.</p>
</div>
            <div className='flex flex-row gap-3 items-center'>
              <GoDotFill size={20} className="text-blue-500"/>            
            <p>Provide instant feedback so users know which answers are correct or wrong.</p>
</div>
            <div className='flex flex-row gap-3 items-center'>
              <GoDotFill size={20} className="text-blue-500"/>            
            <p>Make learning fun and interactive through a simple and engaging quiz interface. 🎯</p>
</div>
          </div>
        </div>
      </div>
    </div>
  
 {/* <div className={`mt-10 min-h-60 ${darkMode ? "bg-gray-800 border border-gray-700 hover:border-blue-400" : "bg-gray-100 border border-gray-200 hover:border-blue-400 px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300"}`}>
    
      <div>
      <div>
          <div className='flex flex-row gap-3 items-center '>
            <h1 className='text-xl font-semibold'></h1>
          <Link href='https://github.com'> <BsBoxArrowUpRight size={15} className="hover:text-blue-500"/></Link> 
          </div>

          <div className='mt-5 flex flex-col gap-6 '>

            <div className='flex flex-row gap-3 items-center'>
              <GoDotFill size={20} className="text-blue-500 hover:"/>            
            <p>Test users’ knowledge by letting them answer multiple-choice questions and see their score.</p>
</div>
            <div className='flex flex-row gap-3 items-center'>
              <GoDotFill ize={20} className="text-blue-500"/>            
            <p>            <p>Provide instant feedback so users know which answers are correct or wrong.</p>
</p>
</div>
            <div className='flex flex-row gap-3 items-center'>
              <GoDotFill ize={20} className="text-blue-500"/>            
            <p>Make learning fun and interactive through a simple and engaging quiz interface. 🎯</p>
</div>
          </div>
        </div>
      </div>
    </div> */}
  </div>

<div className={`min-h-70 ${darkMode ? "bg-gray-900 px-4 py-3" : "bg-gray-100   px-4 py-3"} mt-20 md:px-30 lg:px-100`}>
  <div>
  <div className='mb-5'>
    <h1 className='text-xl font-bold'><span className='border-b-5 border-green-500'>EDU</span>CATION</h1>
  </div>

<div>
<div className='flex flex-col gap-2'>
  <div className='flex gap-3'>
  <LuGraduationCap size={50} className={`bg-gray-200  rounded-lg text-blue-500 ${darkMode ? "bg-gray-800 text-gray-200 p-2 " : "bg-gray-200 text-gray-800 p-2"}`}  />
  <div>
  <div>
<h1 className='font-bold'>Computer Science Student</h1>
<p className='text-gray-500'>SIMAD UNIVERSITY</p>
<p className='text-sm text-gray-400'>Graduation Time :2029</p>
</div>
</div>
</div>
</div>

<div className={`mt-10  flex flex-col md:w-[50%] ap-1 p-2 rounded-lg  ${darkMode ? "border border-gray-700 hover:border-blue-400" : "border border-gray-200 hover:border-blue-400"}`}>
  <h1 className='text-lg '>Frontend Developer</h1>
  <p className='text-gray-400'>Udemy</p>
</div>

</div>
</div>
  
      <hr className={`mt-15 text-center ${darkMode ? "text-gray-700 md:px-30 lg:px-100 " : "text-gray-300 md:px-30 lg:px-100 "}`}/>


</div>
  
<div className=' md:px-30 lg:px-100 '>
 <h1 className='text-xl font-bold'><span className='border-b-5 border-green-500'>GET</span> IN TOUCH</h1>
<div className={` mx-auto rounded-lg mt-10 min-h-50 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>

    <div className='px-4 py-7'>
        <p className='text-green-500 text-lg text-center font-semibold'>Always Open </p>
    </div>

    <div className='flex items-center justify-center  text-white space-x-3 px-3 py-2 bg-gray-700 w-[30%] mx-auto rounded-lg hover:bg-gray-600 '>
        <Link href='mailto:maxamedgoley@gmail.com'><SiGmail/></Link>
<Link href="mailto:maxamedgoley@gmail.com">Say Hi</Link>
    </div>
    </div>
</div>



        </div>
        </div>

        <p className='mt-50 text-center text-gray-500'>© 2026 Mohamed Abdulkadir Abdullahi. Frontend devloper.</p>

</div>

  )
}

export default Page
