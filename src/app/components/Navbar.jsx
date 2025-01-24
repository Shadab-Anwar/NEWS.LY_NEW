import React from 'react'
import { logo } from './Assets'
import { UserButton } from '@clerk/nextjs'

function Navbar() {
  return (
    <>
    <div className='pb-14'>
        
        <div className="nav flex h-[70px] flex-row items-center shadow-[0px_1px_8px_grey] w-full fixed z-[2] bg-[white] overflow-hidden ">
          <div className="navigation">
          </div>
          <div className="logo flex h-[25px] pl-[45%]">
            <img
                src={logo}
              alt="no logo"
              className=' h-36 my-[-55px] ml-[-20px]'
            />
            <div className="button ml-96 pl-60 mt-[-6px]">
              <UserButton appearance={{
          elements: {
            userButtonAvatarBox: "w-10 h-10", // Customize avatar size
            userButtonTrigger: "w-10 h-10", // Adjust trigger size if needed
          },
        }}/>
             
            </div>
          </div>
        </div>
       
    </div>
    </> 
  )
}

export default Navbar
// "use client"

// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-black">
//           NEWS.LY
//         </div>

//         {/* Links (Desktop) */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="text-black hover:text-blue-600">
//             Home
//           </a>
//           <a href="#about" className="text-black hover:text-blue-600">
//             About
//           </a>
//           <a href="#services" className="text-black hover:text-blue-600">
//             Services
//           </a>
//           <a href="#contact" className="text-black hover:text-blue-600">
//             Contact
//           </a>
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-black focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Links (Mobile) */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="flex flex-col space-y-2 px-4 py-3">
//             <a href="#home" className="text-black hover:text-blue-600">
//               Home
//             </a>
//             <a href="#about" className="text-black hover:text-blue-600">
//               About
//             </a>
//             <a href="#services" className="text-black hover:text-blue-600">
//               Services
//             </a>
//             <a href="#contact" className="text-black hover:text-blue-600">
//               Contact
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }