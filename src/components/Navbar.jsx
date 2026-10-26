
// export default function Navbar() {
//   return (
//     <div className="bg-red-400 text-white p-2">
//       <ul className="flex justify-between items-center px-5 py-5 text-2xl font-bold ">
//         <Link to='/'>
       
//         <li className="border border-red-950 p-4 hover:bg-amber-900 transition-all duration-500 shadow-2xl">Home</li>
//         </Link>
//         <Link to='/'>
       
//         <li className="border border-red-950 p-4 hover:bg-amber-900 transition-all duration-500 shadow-2xl">About</li>
//         </Link>
//         <Link to='/'>
       
//         <li className="border border-red-950 p-4 hover:bg-amber-900 transition-all duration-500 shadow-2xl">Services</li>
//         </Link>
//         <Link to='/'>
       
//         <li className="border border-red-950 p-4 hover:bg-amber-900 transition-all duration-500 shadow-2xl">ContactUs</li>
//         </Link>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Services</li>

//         <li></li>
//       </ul>
//     </div>
//       // <div className="mx-auto mt-10 w-24 h-24 rounded-full bg-pink-500 animate-bounce"></div>

    
//   )
// }

// export default function Navbar() {
//   return (
//     <div className="aura aura-rainbow">
//       <div className="bg-gray-900 text-white p-4 shadow-lg">

//         <ul className="flex justify-evenly items-center text-xl font-bold">

//           <li className="border p-3 shadow-lg hover:bg-purble-900 transition-all duration-500">
//             Home
//           </li>

//           <li className="border p-3 shadow-lg hover:bg-amber-900 transition-all duration-500">
//             About
//           </li>

//           <li className="border p-3 shadow-lg hover:bg-amber-900 transition-all duration-500">
//             Contact
//           </li>

//           <li className="border p-3 shadow-lg hover:bg-amber-900 transition-all duration-500">
//             Services
//           </li>

//           <li className="w-12 h-12 rounded-full bg-blue-500 animate-pulse"></li>

//         </ul>

//       </div>
//       <figure className="hover-gallery max-w-60">
//   <img alt="Tailwind CSS image hover gallery" src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
//   <img alt="Tailwind CSS image hover gallery" src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
//   <img alt="Tailwind CSS image hover gallery" src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
//   <img alt="Tailwind CSS image hover gallery" src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
// </figure>
//     </div>
//   )
// }

// export default function Navbar() {
//   const links = ["Home", "About", "Contact", "Services"];

//   return (
//     <>
//       {/* Navbar: background color + text color + font size */}
//       <nav className="bg-indigo-900 text-white text-2xl font-bold">
//         <ul className="flex justify-between items-center px-5 py-5">
//           {links.map((link) => (
//             <li
//               key={link}
//               className="
//                 p-4 border border-white rounded-md cursor-pointer
//                 shadow-lg
//                 transition-all duration-500
//                 hover:bg-amber-600 hover:shadow-2xl hover:-translate-y-1
//               "
//             >
//               {link}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Circle: same width & height + rounded-full + animation */}
//       <div className="mx-auto mt-10 w-24 h-24 rounded-full bg-pink-500 animate-bounce"></div>
//     </>
//   );
// }

// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <>
//        <div className="bg-indigo-900 text-white text-1xl font-bold sticky top-0 z-50 ">
//          <ul className="flex justify-center items-center gap-1.5  py-5">
//             <Link to='/'>
//            <li className="  cursor-pointer shadow-lg transition-all duration-500 hover:bg-red-600 hover:shadow-2xl hover:-translate-y-1 hover: border-b-2 border-red-500">
//              Home
//           </li>
//            </Link>
//              <Link to='/about'>
//            <li className="p-4 border border-white rounded-md cursor-pointer shadow-lg transition-all duration-500 hover:bg-fuchsia-600 hover:shadow-2xl hover:-translate-y-1">
//             About
//           </li>
//             </Link>
//             <Link to='/Services'>
// <li className="p-4 border border-white rounded-md cursor-pointer shadow-lg transition-all duration-500 hover:bg-fuchsia-600 hover:shadow-2xl hover:-translate-y-1">
//             Services
//           </li>
//            </Link>
//            <Link to='/contact'>
//          <li className="p-4 border border-white rounded-md cursor-pointer shadow-lg transition-all duration-500 hover:bg-fuchsia-600 hover:shadow-2xl hover:-translate-y-1">        ContactUs
//            </li>
//           </Link> 
          
//          </ul>
//        </div>

// {/* <div className="mx-auto mt-10 w-24 h-24 rounded-full bg-pink-500 animate-bounce"></div> */}
//     </>
//    );
//  }

import { Link } from 'react-router-dom'
import logo from '../assets/Icons/Logo Option.png'
import frame from '../assets/images/Frame 10.png'

export default function Navbar() {
  return (
    <>
    
       <div className="bg-white text-white text-1xl font-bold sticky top-0 z-50 ">

     

         <ul className="flex justify-center items-center gap-15 px-5  py-5">
  {/* الصورة: absolute عشان تقعد على الشمال من غير ما تأثر على الـ links اللي في النص */}
          <img src={logo} alt="logo" className="absolute left-5 top-1/2 -translate-y-1/2 h-19 w-auto"/>
          
            {/* <img src='src\assets\Icons\Logo Option.png'></img> */}
            <Link to='/'>
           <li className="  text-gray-400 cursor-pointer shadow-lg transition-all duration-500 hover:text-red-600 hover:shadow-2xl hover:-translate-y-1 hover:border-b-2 hover:border-red-500">
             Home
          </li>
           </Link>
             <Link to='/about'>
           <li className=" text-gray-400 cursor-pointer shadow-lg transition-all duration-500 hover:text-red-600 hover:shadow-2xl hover:-translate-y-1 hover:border-b-2 hover:border-red-500">
            Units
          </li>
            </Link>
            <Link to='/Services'>
         <li className=" text-gray-400 cursor-pointer shadow-lg transition-all duration-500 hover:text-red-600 hover:shadow-2xl hover:-translate-y-1 hover:border-b-2 hover:border-red-500">
            Zones
          </li>
           </Link>
            <Link to='/Developers'>
         <li className=" text-gray-400 cursor-pointer shadow-lg transition-all duration-500 hover:text-red-600 hover:shadow-2xl hover:-translate-y-1 hover:border-b-2 hover:border-red-500">        Developers
           </li>
          </Link>

           <Link to='/contact'>
         <li className=" text-gray-400 cursor-pointer shadow-lg transition-all duration-500 hover:text-red-600 hover:shadow-2xl hover:-translate-y-1 hover:border-b-2 hover:border-red-500">        ContactUs
           </li>
          </Link> 
             <Link to='/ٌRegister'>
         <li className=" absolute right-5 top-1  h-12 w-auto text-center   p-4 border border-white rounded-md cursor-pointer shadow-lg   bg-red-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ">  Register
           </li>
          </Link> 
          
         </ul>
         <div>
        {/* <img src={frame} className=' flex justify-center items-center '></img> */}
       </div>
       </div>
       

{/* <div className="mx-auto mt-10 w-24 h-24 rounded-full bg-pink-500 animate-bounce"></div> */}
    </>
   );
 }