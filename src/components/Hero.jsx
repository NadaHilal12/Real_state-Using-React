import React from 'react'
import heroImg from '../assets/images/image 1.png'
import rec from '../assets/images/rectangle 3.png'
import Aparment from '../assets/Icons/Apartment.png'
import ant from '../assets/Icons/ant-design_smile-outlined.png'
import material from '../assets/Icons/material-symbols_award-star-outline-rounded.png'
import streamline from '../assets/Icons/streamline_investment-selection.png'
import fb from '../assets/Icons/basil_facebook-solid.svg'
import instagram from '../assets/Icons/basil_instagram-solid.svg'
import a from '../assets/Icons/Group.svg'
import tiktok from '../assets/Icons/ic_round-tiktok.svg'


export default function Hero({bg,title,desc,btn,btnContent,icons}) {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="font-bold text-5xl max-w-xl mb-8 leading-tight">{title}
          {/* Redefining the Horizon of Modern Luxury Living */}
        </h1>

        <p className="text-lg font-bold max-w-4xl mb-12">{desc}
          {/* We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest */}
        </p>
      {btn &&
        <button className="px-6 py-2 bg-linear-to-r from-[#8E1616] to-[#C34B4B] w-64 rounded-md">
          {btnContent}
        </button>}
 {icons && 
        <div className="absolute bottom-8 left-0 px-15 py-17 flex flex-col gap-4">
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={fb} alt="facebook" />
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={instagram} alt="instagram" />
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={a} alt="social" />
          <img className="size-12 border-[3px] border-white rounded-full p-2" src={tiktok} alt="tiktok" />
        </div>}
      </div>
    {/* </div> */}
    {/* <div className='flex justify-center items-center'>
              <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>Benchmarks of Success</p>
              <img src={rec}className='pt-6 absolute w-auto'/>

    </div> */}
    {/* <div>
        <ul className='flex justify-evenly items-stretch bg-white gap-4  '>
            <li className='p-12 text-center border border-white rounded-md cursor-pointer shadow-lg p-auto' >
                <img src={Aparment} className='mx-auto mb-2 h-8'/>
                <p>48</p>
                <p>Properties Managed</p>
            </li>
            <li className='p-12  text-center border border-white rounded-md cursor-pointer shadow-lg' >
                <img src={streamline} className='mx-auto mb-2 h-8'/>
                <p>90M</p>
                <p>Total Managed Investments</p>
            </li>
            <li className='p-12 text-center border border-white rounded-md cursor-pointer shadow-lg' >
                <img src={ant} className='mx-auto mb-2 h-8'/>
                <p>500</p>
                <p>Happ Client</p>
            </li>
            <li className='p-12  text-center border border-white rounded-md cursor-pointer shadow-lg' >
                <img src={material} className=' mx-auto mb-2 h-8'/>
                <p>90%</p>
                <p>Client Satisfaction</p>
            </li>
        </ul>
    </div>

     <div className='flex justify-center items-center'>
              <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>About Grand Atlas</p>
              <img src={rec}className='pt-6 absolute w-auto'/>

    </div> */}

    
    </>

  )
}
// import React from 'react'
// import heroImg from '../assets/images/image 1.png'
// import rec from '../assets/images/rectangle 3.png'
// import aboutImg from '../assets/images/image 5.svg'
// import Aparment from '../assets/Icons/Apartment.png'
// import ant from '../assets/Icons/ant-design_smile-outlined.png'
// import material from '../assets/Icons/material-symbols_award-star-outline-rounded.png'
// import streamline from '../assets/Icons/streamline_investment-selection.png'
// import fb from '../assets/Icons/basil_facebook-solid.svg'
// import instagram from '../assets/Icons/basil_instagram-solid.svg'
// import a from '../assets/Icons/Group.svg'
// import tiktok from '../assets/Icons/ic_round-tiktok.svg'
// // الصور الجديدة: غيري الأسماء لأسماء ملفاتك الحقيقية
// import masterpiece1 from '../assets/images/Frame 2.svg'
// import masterpiece2 from '../assets/images/Frame 3.svg'
// import masterpiece3 from '../assets/images/Frame 4.svg'
// import mapImg from '../assets/images/image 6.svg'
// import landmark1 from '../assets/images/image 7.svg'
// import landmark2 from '../assets/images/image 8.svg'
// import palmHillsLogo from '../assets/Icons/image 10.svg'
// import hayahLogo from '../assets/Icons/image 11.svg'


// const masterpieces = [
//   { img: masterpiece1, title: '01. Palm Hills Office No.3' },
//   { img: masterpiece2, title: '02.Hacienda Duplex No.4' },
//   { img: masterpiece3, title: '03.Sawary Family Villa' },
// ]

// const landmarks = [
//   { img: landmark1, logo: palmHillsLogo, name: 'Palm Hills', sub: 'Developments', tag: 'New Cairo' },
//   { img: landmark2, logo: hayahLogo, name: 'Hayah City', sub: 'Hayah Development', tag: 'New Cairo' },
//   { img: landmark1, logo: palmHillsLogo, name: 'Palm Hills', sub: 'Developments', tag: 'New Cairo' },
// ]


// export default function Hero({bg,title,desc,btn,btnContent,icons}) {
//   return (
//     <>
//       <div
//         className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center "
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <h1 className="font-bold text-5xl max-w-xl mb-8 leading-tight">{title}</h1>

//         <p className="text-lg font-bold max-w-4xl mb-12">{desc}</p>
//       {btn &&
//         <button className="px-6 py-2 bg-linear-to-r from-[#8E1616] to-[#C34B4B] w-64 rounded-md">
//           {btnContent}
//         </button>}
//  {icons && 
//         <div className="absolute bottom-8 left-0 px-15 py-17 flex flex-col gap-4">
//           <img className="size-12 border-[3px] border-white rounded-full p-2" src={fb} alt="facebook" />
//           <img className="size-12 border-[3px] border-white rounded-full p-2" src={instagram} alt="instagram" />
//           <img className="size-12 border-[3px] border-white rounded-full p-2" src={a} alt="social" />
//           <img className="size-12 border-[3px] border-white rounded-full p-2" src={tiktok} alt="tiktok" />
//         </div>}
//       </div>

//     <div className='flex justify-center items-center'>
//               <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>Benchmarks of Success</p>
//               <img src={rec}className='pt-6 absolute w-auto'/>
//     </div>

//     <div className='px-10'>
//         <ul className='flex justify-between items-stretch bg-white gap-4'>
//             <li className='flex-1 py-5 px-4 text-center border border-gray-200 rounded-md cursor-pointer shadow-md'>
//                 <img src={Aparment} className='mx-auto mb-2 h-8'/>
//                 <p className='font-bold text-lg'>48</p>
//                 <p className='text-xs text-gray-700'>Properties Managed</p>
//             </li>
//             <li className='flex-1 py-5 px-4 text-center border border-gray-200 rounded-md cursor-pointer shadow-md'>
//                 <img src={streamline} className='mx-auto mb-2 h-8'/>
//                 <p className='font-bold text-lg'>90M</p>
//                 <p className='text-xs text-gray-700'>Total Managed Investments</p>
//             </li>
//             <li className='flex-1 py-5 px-4 text-center border border-gray-200 rounded-md cursor-pointer shadow-md'>
//                 <img src={ant} className='mx-auto mb-2 h-8'/>
//                 <p className='font-bold text-lg'>500</p>
//                 <p className='text-xs text-gray-700'>Happy Clients</p>
//             </li>
//             <li className='flex-1 py-5 px-4 text-center border border-gray-200 rounded-md cursor-pointer shadow-md'>
//                 <img src={material} className='mx-auto mb-2 h-8'/>
//                 <p className='font-bold text-lg'>99%</p>
//                 <p className='text-xs text-gray-700'>Client Satisfaction</p>
//             </li>
//         </ul>
//     </div>

//      <div className='flex justify-center items-center'>
//               <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>About Grand Atlas</p>
//               <img src={rec}className='pt-6 absolute w-auto'/>
//     </div>

//     <div className='flex items-stretch gap-12 px-10 pb-16'>
//         <img
//           src={aboutImg}
//           className='  object-cover rounded-t-[60px]] rounded-b-sm border-2 border-[#8E1616]'
//           alt="About Grand Atlas"
//         />
//         <div className='flex-1 flex flex-col justify-between pt-5'>
//             <p className='text-base leading-6 text-gray-700'>
//               We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a well-lived life. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
//               <br />
//               We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
//             </p>
//             <button className="px-6 py-2 bg-linear-to-r from-[#8E1616] to-[#C34B4B] w-44 rounded-md text-white text-sm font-semibold self-start cursor-pointer">
//               Know More →
//             </button>
//         </div>
//     </div>

//     {/* Hand-Selected Masterpieces */}
//     <div className='flex justify-center items-center'>
//               <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>Hand-Selected Masterpieces</p>
//               <img src={rec}className='pt-6 absolute w-auto'/>
//     </div>

//     <div className='px-10 pb-8'>
//         <ul className='flex justify-between items-stretch gap-6'>
//             {masterpieces.map((item, i) => (
//               <li key={i} className='flex-1 cursor-pointer'>
//                   <img src={item.img} className='w-full h-64 object-cover rounded-md shadow-md' alt={item.title}/>
//                   <p className='mt-3 font-semibold text-sm'>{item.title}</p>
//               </li>
//             ))}
//         </ul>
//         <div className='flex justify-center items-center gap-2 mt-8'>
//             <span className='w-8 h-2 rounded-full bg-[#8E1616]'></span>
//             <span className='w-2 h-2 rounded-full bg-gray-300'></span>
//             <span className='w-2 h-2 rounded-full bg-gray-300'></span>
//         </div>
//     </div>

//     {/* Strategic Locations */}
//     <div className='flex justify-center items-center'>
//               <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>Strategic Locations</p>
//               <img src={rec}className='pt-6 absolute w-auto'/>
//     </div>

//     <div>
//         <img src={mapImg} className='w-full h-[350px] object-cover' alt="Strategic Locations map"/>
//     </div>

//     {/* Future Landmarks */}
//     <div className='flex justify-center items-center'>
//               <p className='p-15 font-semibold text-2xl max-w-3xl leading-tight mb-6'>Future Landmarks</p>
//               <img src={rec}className='pt-6 absolute w-auto'/>
//     </div>

//     <div className='px-10 pb-16'>
//         <ul className='flex justify-between items-stretch gap-6'>
//             {landmarks.map((item, i) => (
//               <li key={i} className='flex-1 p-3 bg-white border border-gray-200 rounded-md shadow-lg'>
//                   <div className='relative'>
//                       <img src={item.img} className='w-full h-52 object-cover rounded-md' alt={item.name}/>
//                       <span className='absolute top-2 right-2 bg-[#8E1616] text-white text-xs px-3 py-1 rounded-sm'>{item.tag}</span>
//                   </div>
//                   <div className='flex items-center gap-3 my-4'>
//                       <img src={item.logo} className='h-10 object-contain' alt={item.name}/>
//                       <div>
//                           <p className='font-semibold text-sm'>{item.name}</p>
//                           <p className='text-xs text-gray-600'>{item.sub}</p>
//                       </div>
//                   </div>
//                   <button className='w-full py-1 border border-[#8E1616] text-[#8E1616] text-sm rounded-md cursor-pointer'>
//                       View Details
//                   </button>
//               </li>
//             ))}
//         </ul>
//         <div className='flex justify-center items-center gap-2 mt-8'>
//             <span className='w-8 h-2 rounded-full bg-[#8E1616]'></span>
//             <span className='w-2 h-2 rounded-full bg-gray-300'></span>
//             <span className='w-2 h-2 rounded-full bg-gray-300'></span>
//         </div>
//     </div>
//     </>
//   )
// }