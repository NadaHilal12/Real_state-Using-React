// import React, { useState, useEffect, useContext } from 'react'
// import Hero from '../components/Hero'
// import heroImg3 from '../assets/images/image 29.svg'
// import api from '../helpers/api'
// import { UserContext } from '../Context/UserContext'


// export default function service() {
//     const [zones, setZones] = useState([])
//   const [loading, setLoading] = useState(true)

//   async function getZones() {
//     try {
//       const response = await api.get('/zone')
//       console.log(response.data)
//       setZones(response.data)
//     } catch (error) {
//       console.log(error)
//      } finally {
//     setLoading(false)
//   }
//   }

//   useEffect(() => {
//     getZones()
//   }, [])
  
// const user1 = useContext(UserContext)
//   return (
//     <>
//         <div>
//           <Hero bg={heroImg3} 
//           title={'Destinations Defined by Distinction'} 
//           desc='From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.'
//           btnContent='Learn More'
//           btn={false}
//            icons={true}/>
//        </div>
//     {loading && <h1 className="text-center text-red-200">loading</h1>}

//       {!loading &&
//         zones.map((zone) => (
//           <div key={zone.id}>
//             <img
//               src={zone.images?.[0]}
//               alt={zone.name_en}
//               className="size-48"
//             />
//             <h1>{zone.name_en}</h1>
//             <p>{zone.description_en}</p>
//           </div>
//         ))}
//            <div>
//            <p>{user1.name}</p>
//            <p>{user1.age}</p>
//            <p>{user1.email}</p>
//            <p>{user1.role}</p>

//          </div>

//        </>
//   )
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg3 from "../assets/images/image 29.svg";
import heroImg4 from "../assets/images/image 19.svg";
import api from "../helpers/api";
import Hero from "../components/Hero";


export default function Zones() {
  const navigate = useNavigate();
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getZones = async () => {
      try {
        const response = await api.get("/zone");
        setZones(response.data);
      } catch (error) {
        console.log("Error fetching zones:", error);
      } finally {
        setLoading(false);
      }
    };
    getZones();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-2xl font-bold">loading ..</p>
      </div>
    );
  }

  return (
    <>
    <div>           <Hero bg={heroImg3} 
           title={'Destinations Defined by Distinction'} 
           desc='From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.'
           btnContent='Learn More'
           btn={false}
            icons={true}/>
       </div>
    
    <section className="px-4 lg:px-3 py-10">
      <div className="text-center mb-8">
        <h1 className="inline-block text-3xl font-bold font-serif text-black">
          Zone Projects
          <span className="block h-[3px] w-4/5 mx-auto mt-1 bg-[#C34B4B] rounded" />
        </h1>
      </div>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          src={heroImg4}
          alt="Zone Projects"
          className="w-full h-64 lg:h-80 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {zones.length > 0 ? (
          zones.map((zone) => (
            <div
              key={zone.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={zone.images?.[0]}
                alt={zone.name_en}
                className="w-full h-44 object-cover"
              />
              <div className="flex items-center text-xs text-[#9A8A78] border-b border-gray-200">
                <span className="flex-1 text-center py-2 border-r border-gray-200">
                  {zone.projects?.length || 0} Projects
                </span>
                <span className="flex-1 text-center py-2">{zone.city_en}</span>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold font-serif text-[#8E1616]">
                  {zone.name_en}
                </h2>
                <p className="text-gray-500 mt-2 text-xs leading-relaxed line-clamp-3">
                  {zone.description_en}
                </p>
                <button
                  onClick={() => navigate(`/zones/${zone.id}`)}
                  className="mt-4 w-full py-1.5 rounded-md border border-[#8E1616] text-[#8E1616] text-xs hover:bg-[#8E1616] hover:text-white transition cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No zones found
          </p>
        )}
      </div>
    </section>
    </>
  );
}