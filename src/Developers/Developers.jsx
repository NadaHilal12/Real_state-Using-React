// // import React, { useState } from 'react'
// // import Hero from '../components/Hero'
// // import heroImg4 from '../assets/images/image 28.svg'
// // import api from '../helpers/api'
// // import { useEffect } from 'react'

// // export default function Developers() {
// //  const  [developers,setDevelopers]=useState([])
// //  const [loading,setLoading]=useState(true)

// // async function getDevelopers() {
// //   try{
// //     let response= await api.get('/developer')
// //     console.log(response.data)
// //     setDevelopers(response.data)
// //     setLoading(false)
// //     console.log(developers)
// //   }
// //   catch(error){
// //      console.log(error)
// //      setLoading(false)

// //   }
  
// // }
// //   useEffect(() => {
// //     getDevelopers()
// //   }, [])
// //   return (
// //     <>
// //     {
// //       loading&&<h1 className='text-center text-red-200'>loading</h1>
// //     }
// //     {
// //       developers.map((developers)=>{
// //         return(
// //           <div key={developer.id}>
// //             <img src={developers.images[0]} alt='' className='size-48'/>
// //             <h1>{developer.name_en}</h1>
// //             <p>{developer.description_en}</p>
// //           </div>
// //       })
// //     }
// //      <div>
// //            <Hero bg={heroImg4} 
// //            title={'Defining the Future Skyline.'} 
// //            desc='Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers.'
// //            btnContent='Learn More'
// //             btn={false}
// //             icons={true}/>

// //         </div>
// //         </>
// //   )
// // } 
// import React, { useState, useEffect } from 'react'
// import Hero from '../components/Hero'
// import heroImg4 from '../assets/images/image 28.svg'
// import api from '../helpers/api'

// export default function Developers() {
//   const [developers, setDevelopers] = useState([])
//   const [loading, setLoading] = useState(true)

//   async function getDevelopers() {
//     try {
//       const response = await api.get('/developer')
//       console.log(response.data)
//       setDevelopers(response.data)
//     } catch (error) {
//       console.log(error)
//      } finally {
//     setLoading(false)
//   }
//   }

//   useEffect(() => {
//     getDevelopers()
//   }, [])

//   return (
//     <>
//        <div>
//         <Hero
//           bg={heroImg4}
//           title={'Defining the Future Skyline.'}
//           desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
//           btnContent="Learn More"
//           btn={false}
//           icons={true}
//         />
//       </div>
//       {loading && <h1 className="text-center text-red-200">loading</h1>}

//       {!loading &&
//         developers.map((developer) => (
//           <div key={developer.id}>
//             <img
//               src={developer.images?.[0]}
//               alt={developer.name_en}
//               className="size-48"
//             />
//             <h1>{developer.name_en}</h1>
//             <p>{developer.description_en}</p>
//           </div>
//         ))}

   
//     </>
//   )
// }

import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import heroImg4 from '../assets/images/image 28.svg'
import api from '../helpers/api'

/* ------------------------------------------------------------------
   اللوجوهات: نزّلي الأيقونات من فيجما وحطيها في فولدر الـ icons،
   وبعدين شيلي الـ // من الـ import والسطر اللي تحته وعدّلي المسار.
------------------------------------------------------------------- */
import hmGroupLogo from '../assets/Icons/image 10.svg'
import elmorshedyLogo from '../assets/Icons/image 11.svg'
import lagoonLogo from '../assets/Icons/image 10.svg'

// المفتاح = id بتاع الـ developer من الـ API
const developerLogos = {
  'e0465830-b248-4d61-a575-167eca85b427': hmGroupLogo, // HM Group      -> hmGroupLogo
  'eb8d1919-ff70-4132-b426-d85a6da61e57': elmorshedyLogo, // elmorshedy    -> elmorshedyLogo
  '612a7fce-3f33-45cc-83d7-11a491094d8b': lagoonLogo, // lagoon        -> lagoonLogo
}

// عدد الكروت حسب عرض الشاشة
function usePerView() {
  const get = () => (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3)
  const [perView, setPerView] = useState(get)

  useEffect(() => {
    const onResize = () => setPerView(get())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return perView
}

export default function Developers({ showHero = true }) {
  const [developers, setDevelopers] = useState([])
  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(0)
  const perView = usePerView()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadData() {
      // بنجيب الـ developers والـ zones مع بعض
      const [devRes, zoneRes] = await Promise.allSettled([
        api.get('/developer'),
        api.get('/zone'),
      ])

      if (devRes.status === 'fulfilled') {
        setDevelopers(Array.isArray(devRes.value.data) ? devRes.value.data : [])
      } else {
        console.error('Error fetching developers:', devRes.reason)
        setError('Unable to load developers.')
      }

      // لو الـ zones فشلت، الكروت بتظهر عادي من غير badge
      if (zoneRes.status === 'fulfilled') {
        setZones(Array.isArray(zoneRes.value.data) ? zoneRes.value.data : [])
      } else {
        console.error('Error fetching zones:', zoneRes.reason)
      }

      setLoading(false)
    }

    loadData()
  }, [])

  // id بتاع الـ zone -> اسمها
  const zoneNames = useMemo(() => {
    const map = {}
    zones.forEach((z) => {
      map[z.id] = z.name_en
    })
    return map
  }, [zones])

  // أسماء المناطق (بدون تكرار) اللي مشاريع الـ developer موجودة فيها
  const getDeveloperZones = (developer) => {
    const names = (developer.projects || [])
      .map((p) => zoneNames[p.zoneId])
      .filter(Boolean)
    return [...new Set(names)]
  }

  const pageCount = Math.max(1, Math.ceil(developers.length / perView))
  const safePage = Math.min(page, pageCount - 1)

  // آخر صفحة ما تسيبش فراغ: بنقف عند آخر كارت
  const start = Math.min(safePage * perView, Math.max(0, developers.length - perView))
  const offset = (start * 100) / perView

  const dots = useMemo(() => Array.from({ length: pageCount }), [pageCount])

  return (
    <>
         {showHero && (
        <Hero
          bg={heroImg4}
          title="Defining the Future Skyline."
          desc="Great developments require more than just capital; ..."
          btnContent="Learn More"
          btn={false}
          icons={true}
        />
      )}

      <section className="w-full px-4 py-12 font-['Lato',sans-serif] md:px-8">
        {loading && <p className="py-10 text-center text-sm text-[#777]">Loading...</p>}
        {error && <p className="py-10 text-center text-sm text-red-700">{error}</p>}
        {!loading && !error && developers.length === 0 && (
          <p className="py-10 text-center text-sm text-[#777]">No developers found</p>
        )}

        {developers.length > 0 && (
          <>
            {/* Carousel: واخد عرض السيكشن كله */}
            <div className="w-full overflow-hidden py-3">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${offset}%)` }}
              >
                {developers.map((developer) => {
                  const devZones = getDeveloperZones(developer)
                  const logo = developerLogos[developer.id] || developer.logo
                  const projectsCount = developer.projects?.length ?? 0

                  return (
                    <div
                      key={developer.id}
                      className="shrink-0 px-3"
                      style={{ width: `${100 / perView}%` }}
                    >
                      <article className="flex h-full flex-col rounded-2xl bg-white p-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                        {/* Image + location badge */}
                        <div className="relative">
                          <img
                            src={developer.images?.[0] || heroImg4}
                            alt={developer.name_en}
                            loading="lazy"
                            className="h-[200px] w-full rounded-xl object-cover md:h-[230px]"
                          />

                          {devZones.length > 0 && (
                            <span className="absolute right-2 top-2 rounded bg-[#8b1a1a] px-3 py-0.5 text-xs text-white">
                              {devZones[0]}
                              {devZones.length > 1 && ` +${devZones.length - 1}`}
                            </span>
                          )}
                        </div>

                        {/* Logo + name */}
                        <div className="flex min-h-[72px] items-center gap-3 px-2 py-5">
                          {logo && (
                            <img
                              src={logo}
                              alt={`${developer.name_en} logo`}
                              className="h-10 w-10 shrink-0 object-contain"
                            />
                          )}
                          <div className="min-w-0">
                            <p className="truncate text-base font-bold capitalize leading-tight text-neutral-900">
                              {developer.name_en}
                            </p>
                            <p className="truncate text-[11px] text-[#777]">
                              {projectsCount} {projectsCount === 1 ? 'Project' : 'Projects'}
                            </p>
                          </div>
                        </div>

                        {/* Button */}
                        <button
                          type="button"
                          onClick={() => navigate(`/developers/${developer.id}`)}
                          className="mx-1 mb-1 mt-auto h-9 cursor-pointer rounded border border-[#8b1a1a] text-sm text-[#8b1a1a] transition-colors hover:bg-[#8b1a1a] hover:text-white"
                        >
                          View Details
                        </button>
                      </article>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Dots */}
            {pageCount > 1 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                {dots.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setPage(i)}
                    className={`h-2 cursor-pointer rounded-full transition-all ${
                      i === safePage ? 'w-8 bg-[#8b1a1a]' : 'w-2 bg-[#d4d4d4]'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  )
}