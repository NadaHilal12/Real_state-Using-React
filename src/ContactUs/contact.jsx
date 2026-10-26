import React, { useContext } from 'react'
import Hero from '../components/Hero'
import heroImg5 from '../assets/images/image 30.svg'
import { UserContext } from '../Context/UserContext'

export default function contact() {
  const user=useContext(UserContext)
  return (
    <>
   <div>
            <Hero bg={heroImg5} 
            title={'Connected Globally. Available Locally.'} 
            desc='With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory.'
             btn={false}
             icons={false}/>
         </div>
         <div>
           <p>{user.name}</p>
           <p>{user.age}</p>
           <p>{user.email}</p>
           <p>{user.role}</p>

         </div>
         </>
  )
}
