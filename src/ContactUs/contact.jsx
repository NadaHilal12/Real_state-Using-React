// import React, { useContext } from 'react'
// import Hero from '../components/Hero'
// import heroImg5 from '../assets/images/image 30.svg'
// import { UserContext } from '../Context/UserContext'

// export default function contact() {
//   const user=useContext(UserContext)
//   return (
//     <>
//    <div>
//             <Hero bg={heroImg5} 
//             title={'Connected Globally. Available Locally.'} 
//             desc='With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory.'
//              btn={false}
//              icons={false}/>
//          </div>
//          <div>
//            <p>{user.name}</p>
//            <p>{user.age}</p>
//            <p>{user.email}</p>
//            <p>{user.role}</p>

//          </div>
//          </>
//   )
// }

import {  useState } from 'react'
import Hero from '../components/Hero'
import heroImg5 from '../assets/images/image 30.svg'
// import { UserContext } from '../Context/UserContext'

// عدلي المسارات حسب مكان الأيقونات عندك
import locationIcon from '../assets/images/akar-icons_location.svg'
import emailIcon from '../assets/images/Group.svg'
import phoneIcon from '../assets/images/boxicons_mobile.svg'
import mobileIcon from '../assets/images/Vector.svg'
import facebookIcon from '../assets/images/Face.svg'
import instagramIcon from '../assets/images/instagram.svg'
import tiktokIcon from '../assets/images/tik.svg'
import xIcon from '../assets/images/tiktok.svg'

export default function Contact() {
  // const user = useContext(UserContext)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const contactItems = [
    {
      icon: locationIcon,
      text: 'Minusio, Lake Maggiore, Switzerland — ref. LOC1771',
    },
    {
      icon: emailIcon,
      text: 'Grand.Atlas.Support@gmail.com',
      href: 'mailto:Grand.Atlas.Support@gmail.com',
    },
    {
      icon: mobileIcon,
      text: '01247859622',
      href: 'tel:01247859622',
    },
    {
      icon: phoneIcon,
      text: '035987124',
      href: 'tel:035987124',
    },
  ]

  const socials = [
    { icon: facebookIcon, label: 'Facebook', href: '#' },
    { icon: xIcon, label: 'X', href: '#' },
    { icon: instagramIcon, label: 'Instagram', href: '#' },
    { icon: tiktokIcon, label: 'TikTok', href: '#' },
  ]

  const hours = [
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 5:00 PM' },
    { day: 'Monday', time: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
  ]

  const serif = "font-['Playfair_Display',serif]"

  const fieldClass =
    'mb-5 rounded-lg border border-[#e2e2e2] bg-[#f5f5f5] px-3 text-sm focus:outline-2 focus:outline-offset-1 focus:outline-[#c04a4a]'

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <>
      <Hero
        bg={heroImg5}
        title="Connected Globally. Available Locally."
        desc="With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
        btn={false}
        icons={false}
      />

      {/* User Information */}
      {/* {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      )} */}

<section className="grid w-full grid-cols-1 items-start gap-12 px-6 py-16 font-['Lato',sans-serif] md:px-12 lg:grid-cols-2 lg:px-16">
        {/* Contact Information */}
        <div>
          <h2
            className={`${serif} mb-4 text-[28px] font-semibold text-neutral-900`}
          >
            Contact Information
          </h2>

          <p className="mb-6 max-w-[400px] text-sm leading-normal text-[#777]">
            Our team is available for private consultations and off-market
            inquiries. We operate with absolute discretion to ensure your real
            estate objectives are met with precision.
          </p>

          <ul className="mb-8 flex flex-col gap-3.5">
            {contactItems.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 text-sm text-[#8b1a1a]"
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[18px] w-[18px] shrink-0 object-contain"
                />

                {item.href ? (
                  <a href={item.href} className="hover:underline">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          <h3
            className={`${serif} mb-3.5 text-base font-medium text-[#777]`}
          >
            Follow us on social media
          </h3>

          <div className="mb-8 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid size-[30px] place-items-center rounded-full border-[1.5px] border-[#8b1a1a] transition-colors hover:bg-[#8b1a1a]"
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[14px] w-[14px] object-contain"
                />
              </a>
            ))}
          </div>

          <h3
            className={`${serif} mb-3.5 text-base font-medium text-[#777]`}
          >
            Working Hours
          </h3>

          <dl className="flex flex-col gap-2 text-[13px]">
            {hours.map((hour) => (
              <div key={hour.day} className="flex gap-4">
                <dt className="w-20 text-[#8b1a1a]">
                  {hour.day}:
                </dt>

                <dd className="text-[#777]">
                  {hour.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
className="flex w-full max-w-[673px] flex-col rounded-2xl bg-white px-8 py-9 shadow-[0_4px_24px_rgba(0,0,0,0.12)] lg:justify-self-end"        >
          <h2 className={`${serif} mb-6 text-lg font-semibold`}>
            Send us a message
          </h2>

          <label htmlFor="name" className={`${serif} mb-2 text-[13px]`}>
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className={`${fieldClass} h-[38px]`}
          />

          <label htmlFor="email" className={`${serif} mb-2 text-[13px]`}>
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className={`${fieldClass} h-[38px]`}
          />

          <label htmlFor="phone" className={`${serif} mb-2 text-[13px]`}>
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={`${fieldClass} h-[38px]`}
          />

          <label htmlFor="message" className={`${serif} mb-2 text-[13px]`}>
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className={`${fieldClass} resize-none py-2.5`}
          />

          <button
            type="submit"
            className={`${serif} h-10 cursor-pointer rounded-md bg-gradient-to-r from-[#8b1a1a] to-[#c04a4a] text-sm text-white transition-opacity hover:opacity-90`}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  )
}
