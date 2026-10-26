// import React, { useState } from 'react'
// import Hero from '../components/Hero'
// import heroImg4 from '../assets/images/image 28.svg'
// import api from '../helpers/api'
// import { useEffect } from 'react'

// export default function Developers() {
//  const  [developers,setDevelopers]=useState([])
//  const [loading,setLoading]=useState(true)

// async function getDevelopers() {
//   try{
//     let response= await api.get('/developer')
//     console.log(response.data)
//     setDevelopers(response.data)
//     setLoading(false)
//     console.log(developers)
//   }
//   catch(error){
//      console.log(error)
//      setLoading(false)

//   }
  
// }
//   useEffect(() => {
//     getDevelopers()
//   }, [])
//   return (
//     <>
//     {
//       loading&&<h1 className='text-center text-red-200'>loading</h1>
//     }
//     {
//       developers.map((developers)=>{
//         return(
//           <div key={developer.id}>
//             <img src={developers.images[0]} alt='' className='size-48'/>
//             <h1>{developer.name_en}</h1>
//             <p>{developer.description_en}</p>
//           </div>
//       })
//     }
//      <div>
//            <Hero bg={heroImg4} 
//            title={'Defining the Future Skyline.'} 
//            desc='Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers.'
//            btnContent='Learn More'
//             btn={false}
//             icons={true}/>

//         </div>
//         </>
//   )
// } 
import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import heroImg4 from '../assets/images/image 28.svg'
import api from '../helpers/api'

export default function Developers() {
  const [developers, setDevelopers] = useState([])
  const [loading, setLoading] = useState(true)

  async function getDevelopers() {
    try {
      const response = await api.get('/developer')
      console.log(response.data)
      setDevelopers(response.data)
    } catch (error) {
      console.log(error)
     } finally {
    setLoading(false)
  }
  }

  useEffect(() => {
    getDevelopers()
  }, [])

  return (
    <>
       <div>
        <Hero
          bg={heroImg4}
          title={'Defining the Future Skyline.'}
          desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
          btnContent="Learn More"
          btn={false}
          icons={true}
        />
      </div>
      {loading && <h1 className="text-center text-red-200">loading</h1>}

      {!loading &&
        developers.map((developer) => (
          <div key={developer.id}>
            <img
              src={developer.images?.[0]}
              alt={developer.name_en}
              className="size-48"
            />
            <h1>{developer.name_en}</h1>
            <p>{developer.description_en}</p>
          </div>
        ))}

   
    </>
  )
}