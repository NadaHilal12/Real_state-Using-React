import Hero from "../../components/Hero";
import heroImg2 from'../../assets/images/image 1.png'
import aboutImg from '../../assets/images/Frame 10.png'
import map from '../../assets/images/image 6.svg'
import land from '../../assets/images/Frame 2.svg'
import logo from '../../assets/images/Frame 3.svg'
import masterpiece3 from '../../assets/images/Frame 4.svg'
import land1 from '../../assets/images/image 7.svg'
import land2 from '../../assets/images/image 8.svg'
import logo1 from '../../assets/Icons/image 10.svg'
import logo2 from '../../assets/Icons/image 11.svg'
// import home from '../../assets/images/image 5.svg'
import rec from '../../assets/images/Rectangle 3.png'
import Aparment from '../../assets/Icons/Apartment.png'
import ant from '../../assets/Icons/ant-design_smile-outlined.png'
import material from '../../assets/Icons/material-symbols_award-star-outline-rounded.png'
import streamline from '../../assets/Icons/streamline_investment-selection.png'
import fb from '../../assets/Icons/basil_facebook-solid.svg'
import instagram from '../../assets/Icons/basil_instagram-solid.svg'
import a from '../../assets/Icons/Group.svg'
import tiktok from '../../assets/Icons/ic_round-tiktok.svg'
import AutoPlay from "../../components/AutoPlay";
import { useEffect, useState } from "react";
// import DeveloperDetails from "../../Developers/DeveloperDetails";
import Developers from "../../Developers/Developers";

export default function home() {
     const masterpieces = [
  { img: land, title: "Palm Hills Office No.3" },
  { img: logo, title: "Hacienda Duplex No.4" },
  { img: masterpiece3, title: "Sawary Family Villa " },
  { img: land1, title: "Premium Property" },
  { img: land2, title: "Hacienda Duplex No.4" },
];

const [landmarks, setLandmarks] = useState([]);
const [loadingLandmarks, setLoadingLandmarks] = useState(true);
const [landmarksError, setLandmarksError] = useState("");

useEffect(() => {
  const fetchLandmarks = async () => {
    try {
      const response = await fetch(
        "https://white-seahorse-266682.hostingersite.com/api/v1/zone",
        {
          headers: {
            accept: "*/*",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch zones");
      }

      const data = await response.json();
      setLandmarks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching zones:", error);
      setLandmarksError("Unable to load locations.");
    } finally {
      setLoadingLandmarks(false);
    }
  };

  fetchLandmarks();
}, []);

  return (
    <>
  <Hero bg={heroImg2} 
   title={'Redefining the Horizon of Modern Luxury Living'} 
  desc='We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest'
  btnContent='Explore'
   btn={true}
   icons={true}/>
   {/* <title/> */}
   <div className='flex justify-center items-center'>
                 <p className='p-15  font-semibold text-2xl max-w-3xl leading-tight mb-6'>Benchmarks of Success</p>
                 <img src={rec}className='pt-6 absolute w-auto'/>
   
       </div>
       <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[22px] bg-white px-[24px] w-full">
     <li className="flex flex-col items-center gap-[12px] py-[12px] px-[10px] text-center border border-white rounded-[12px] cursor-pointer shadow-lg">
       <div className="h-10 flex items-center justify-center">
         <img src={Aparment} alt="" className="max-h-full" />
       </div>
       <div className="flex flex-col items-center gap-[2px]">
         <p className="text-xl font-bold leading-tight">48</p>
         <p className="text-sm leading-tight text-gray-700">Properties Managed</p>
       </div>
     </li>
   
     <li className="flex flex-col items-center gap-[12px] py-[12px] px-[10px] text-center border border-white rounded-[12px] cursor-pointer shadow-lg">
       <div className="h-10 flex items-center justify-center">
         <img src={streamline} alt="" className="max-h-full" />
       </div>
       <div className="flex flex-col items-center gap-[2px]">
         <p className="text-xl font-bold leading-tight">90M</p>
         <p className="text-sm leading-tight text-gray-700">Total Managed Investments</p>
       </div>
     </li>
   
     <li className="flex flex-col items-center gap-[12px] py-[12px] px-[10px] text-center border border-white rounded-[12px] cursor-pointer shadow-lg">
       <div className="h-10 flex items-center justify-center">
         <img src={ant} alt="" className="max-h-full" />
       </div>
       <div className="flex flex-col items-center gap-[2px]">
         <p className="text-xl font-bold leading-tight">500</p>
         <p className="text-sm leading-tight text-gray-700">Happy Clients</p>
       </div>
     </li>
   
     <li className="flex flex-col items-center gap-[12px] py-[12px] px-[10px] text-center border border-white rounded-[12px] cursor-pointer shadow-lg">
       <div className="h-10 flex items-center justify-center">
         <img src={material} alt="" className="max-h-full" />
       </div>
       <div className="flex flex-col items-center gap-[2px]">
         <p className="text-xl font-bold leading-tight">99%</p>
         <p className="text-sm leading-tight text-gray-700">Client Satisfaction</p>
       </div>
     </li>
   </ul>
     {/* <div className="flex flex-col items-center">
       <p className="font-semibold text-2xl leading-tight">About Grand Atlas</p>
       <img src={rec} alt="" className="mt-[10px] w-auto" />
     </div> */}
   
   {/* <div className='grid grid-col justify-between'>
     <img src={aboutImg} className=' relative w-auto px-[37px]'></img>
     <p className=' font-[lato] size-[24px]  '>We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,  
   We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.</p>
   
   </div> */}
   <section className="mt-[80px]  ">
    
     <div className="flex flex-col items-center">
       <p className="font-semibold text-2xl leading-tight">About Grand Atlas</p>
       <img src={rec} alt="" className="mt-[10px] w-auto" />
     </div>
   
   
     <div className=" grid grid-cols-1 lg:grid-cols-[673fr_624fr] gap-[70px] mt-[70px] px-[24px] lg:px-[37px] ">
   
       <img
         src={aboutImg}
         alt="About Grand Atlas"
         className="className=' relative w-auto px-[37px]"
       />
   
     
       <div className="flex flex-col justify-between pt-[24px]">
         <p className="font-['Lato'] font-normal text-[24px]  text-[#554E4E] ">
           We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
           
           We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
         </p>
   
         <button className="w-[258px] h-[47px] rounded-[8px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-white font-['Lato',sans-serif] font-semibold cursor-pointer self-start">
           Know More →
         </button>
       </div>
     </div>
   </section>
     <div>
<AutoPlay masterpieces={masterpieces} rec={rec} />      </div>
   <section className="mt-[80px]  ">
   
      <div className="flex flex-col items-center mt-[80px]">
           <p className="font-semibold text-2xl leading-tight">Strategic Locations</p>
           <img src={rec} alt="" className="mt-[10px] w-auto" />
         </div>
         <div>
           <img src={map} className='  realitive w-full mt-[29px]'></img>
         </div>
   
   
         </section>
         <div>
          <div className="flex flex-col items-center mt-[80px]">
  <p className="font-semibold text-2xl leading-tight">Future Landmarks</p>
  <img src={rec} alt="" className="mt-[10px] w-auto" />
</div>
<Developers showHero={false} />         
         </div>
   
   

   
   
    
       </>
     );
   }
 
