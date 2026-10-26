import React, { useState, useEffect, useContext } from 'react'
import Hero from '../components/Hero'
import heroImg3 from '../assets/images/image 29.svg'
import api from '../helpers/api'
import { UserContext } from '../Context/UserContext'


export default function service() {
    const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)

  async function getZones() {
    try {
      const response = await api.get('/zone')
      console.log(response.data)
      setZones(response.data)
    } catch (error) {
      console.log(error)
     } finally {
    setLoading(false)
  }
  }

  useEffect(() => {
    getZones()
  }, [])
  
const user1 = useContext(UserContext)
  return (
    <>
        <div>
          <Hero bg={heroImg3} 
          title={'Destinations Defined by Distinction'} 
          desc='From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.'
          btnContent='Learn More'
          btn={false}
           icons={true}/>
       </div>
    {loading && <h1 className="text-center text-red-200">loading</h1>}

      {!loading &&
        zones.map((zone) => (
          <div key={zone.id}>
            <img
              src={zone.images?.[0]}
              alt={zone.name_en}
              className="size-48"
            />
            <h1>{zone.name_en}</h1>
            <p>{zone.description_en}</p>
          </div>
        ))}
           <div>
           <p>{user1.name}</p>
           <p>{user1.age}</p>
           <p>{user1.email}</p>
           <p>{user1.role}</p>

         </div>

       </>
  )
}
