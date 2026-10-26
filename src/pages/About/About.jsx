import Hero from "../../components/Hero";
import heroImg1  from '../../assets/images/image 12.svg'

export default function About() {
  return (
    <div>
       <Hero bg={heroImg1} 
       title={'Where Visionary Design Meets Daily Life'} 
       desc='Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world'
       btnContent='Learn More'
        btn={true}
        icons={true}/>
    </div>
  )
}
