import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Services from './Services/service'
import ContactUs from './ContactUs/contact'
import Layout from './components/Layout/Layout'
import Developers from './Developers/Developers'
import Register from './components/Register/Register'
import UnitDetails from './pages/About/UnitDetails'
import ZoneDetails from './Services/ZoneDetails'
import DeveloperDetails from './Developers/DeveloperDetails'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/units/:id" element={<UnitDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/zones/:id" element={<ZoneDetails />} />
        <Route path="/developers" element={<Developers />} />
        <Route
  path="/developers/:id"
  element={<DeveloperDetails />}
/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App