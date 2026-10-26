
import { Link } from 'react-router-dom'

import logo from '../assets/Icons/Logo Option.png'
import arrow from '../assets/Icons/ic Arrow Go.png'
export default function Footer() {
  return (
    <div className='bg-gray-50 py-2 flex justify-evenly items-stretch '>
      <div>
      <img src={logo} />
      <p>0155597026</p>
      <a href='nada3142@gmail.com'>support@lift.agency</a>
      </div>
   <ul>
    <li className='cursor-pointer font-semibold'>Quick Link</li>
   <Link to='/'>
           <li className="  text-gray-400 cursor-pointer ">
             Home
          </li>
    </Link>
   <Link to='/about'>
           <li className="  text-gray-400 cursor-pointer ">
             Inventories
          </li>
    </Link>
   <Link to='/Services'>
           <li className="  text-gray-400 cursor-pointer ">
             Zones
          </li>
    </Link>
   <Link to='/Developers'>
           <li className="  text-gray-400 cursor-pointer ">
             Developers
          </li>
    </Link>
   <Link to='/contact'>
           <li className="  text-gray-400 cursor-pointer ">
             Contact Us
          </li>
    </Link>
    
     
   </ul>

   <ul>
    <li className="  cursor-pointer font-semibold">About</li>
    <li className="  text-gray-400 cursor-pointer">Grand Atlas</li>
    <li  className="  text-gray-400 cursor-pointer">Privacy Policy</li>
    <li className="  text-gray-400 cursor-pointer">Legal</li>
    <li className="  text-gray-400 cursor-pointer">Helps</li>
    <li className="  text-gray-400 cursor-pointer">Support</li>
   </ul>
   <div>
    <h4>Get In Touch</h4>
    <div className="flex h-12 rounded-md overflow-hidden border border-gray-200 bg-white">
      <input type="email" placeholder="Get product updates"
             className="flex-1 min-w-0 px-4 text-sm outline-none placeholder-gray-400" />
      <button className="w-12 bg-[#8B1A1A] text-white flex items-center justify-center">→</button>
    </div>

    <div className="flex gap-3 mt-5">
      <a href="https://www.linkedin.com/in/nada-mamdoh" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#8B1A1A] text-sm font-bold hover:bg-[#8B1A1A] hover:text-white transition">in</a>
      <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#8B1A1A] text-sm font-bold hover:bg-[#8B1A1A] hover:text-white transition">f</a>
      <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#8B1A1A] text-sm font-bold hover:bg-[#8B1A1A] hover:text-white transition">t</a>
    </div>
   </div>
    
    </div>
  )
}
