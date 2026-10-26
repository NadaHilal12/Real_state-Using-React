import Hero from "../../components/Hero";
import heroImg2 from'../../assets/images/image 1.png'

export default function home() {
  return (
    <>
  <Hero bg={heroImg2} 
   title={'Redefining the Horizon of Modern Luxury Living'} 
  desc='We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest'
  btnContent='Explore'
   btn={true}
   icons={true}/>
   {/* <title/> */}
 

    </>
  )
}
