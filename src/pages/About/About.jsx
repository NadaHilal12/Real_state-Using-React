// import Hero from "../../components/Hero";
// import heroImg1 from "../../assets/images/image 12.svg";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from '../../helpers/api'

// export default function About() {
//   const [units, setUnits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [price, setPrice] = useState("");
//   const [bedrooms, setBedroom] = useState("");
//   const navigate = useNavigate();

//   const getAllUnits = async () => {
//     try {
// const response = await api.get("/unit");

// console.log("response:", response.data);
// console.log("First unit:", response.data[0]);
// console.log("Image:", response.data[0]?.image);

// setUnits(response.data);
//     } catch (error) {
//       console.log("Error fetching units :", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllUnits();
//   }, []);

//   const filteredUnits = units.filter((unit) => {
//     return (
//       unit.title_en.toLowerCase().includes(search.toLowerCase()) &&
//       (price === "" || unit.price <= Number(price)) &&
//       (bedrooms === "" || unit.bedrooms == bedrooms)
//     );
//   });

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen w-full">
//         <p className="text-2xl font-bold">loading ..</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div>
//         <Hero
//           bg={heroImg1}
//           title={"Where Visionary Design Meets Daily Life"}
//           desc="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
//           btnContent="Learn More"
//           btn={true}
//           icons={true}
//         />
//       </div>

//       <div className="px-20 mt-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow">
//           <input
//             type="text"
//             placeholder="Search property"
//             className="p-3 border rounded-lg w-full"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Max Price"
//             className="p-3 border rounded-lg w-full"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />

//           <select
//             className="p-3 border rounded-lg w-full"
//             value={bedrooms}
//             onChange={(e) => setBedroom(e.target.value)}
//           >
//             <option value="">All BedRooms</option>
//             <option value="1">1 BedRooms</option>
//             <option value="2">2 BedRooms</option>
//             <option value="3">3 BedRooms</option>
//           </select>

//           <button
//             onClick={() => {
//               setSearch("");
//               setPrice("");
//               setBedroom("");
//             }}
//             className="bg-black text-white rounded-lg px-4"
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-20">
//         {filteredUnits.length > 0 ? (
//           filteredUnits.map((unit) => (
//             <div
//               className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//               key={unit.id}
//             >
//               <img
//                 src={unit.images?.[0]}
//                 alt={unit.title_en}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="font-bold text-lg">{unit.title_en}</h2>
//                 <p className="text-gray-500 mt-2 text-sm">{unit.description_en}</p>
//                 <div className="flex justify-between mt-4 text-sm">
//                   <span>{unit.price}</span>
//                   <span>{unit.bedrooms}</span>
//                 </div>
//                 <button
//                   onClick={() => navigate(`/units/${unit.id}`)}
//                   className="mt-4 w-full bg-black text-white py-2 rounded-lg"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">No units found</p>
//         )}
//       </div>
//     </>
//   );
// }
import Hero from "../../components/Hero";
import heroImg1 from "../../assets/images/image 12.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../helpers/api";

export default function About() {
  const navigate = useNavigate();

  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  const emptyFilters = {
    search: "",
    bedrooms: "",
    developer: "",
    zone: "",
    project: "",
    status: "",
    price: "",
  };

  const [filters, setFilters] = useState(emptyFilters);
  const [appliedFilters, setAppliedFilters] = useState(emptyFilters);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const getAllUnits = async () => {
    try {
      const unitsRes = await api.get("/unit");
      setUnits(unitsRes.data);
    } catch (error) {
      console.log("Error fetching units:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUnits();
  }, []);

  // الخيارات بتتبني من الوحدات نفسها
  const developerOptions = [
    ...new Set(units.map((u) => u.developerName_en).filter(Boolean)),
  ];

  const zoneOptions = [
    ...new Set(units.map((u) => u.zoneName_en).filter(Boolean)),
  ];

  const projectOptions = Array.from(
    new Map(
      units
        .filter((u) => u.projectId)
        .map((u) => [u.projectId, u.projectName_en])
    )
  );

  const filteredUnits = units.filter((unit) => {
    const f = appliedFilters;

    const matchSearch = (unit.title_en || "")
      .toLowerCase()
      .includes(f.search.toLowerCase());

    const matchBedrooms =
      f.bedrooms === "" || Number(unit.bedrooms) === Number(f.bedrooms);

    const matchDeveloper =
      f.developer === "" || unit.developerName_en === f.developer;

    const matchZone = f.zone === "" || unit.zoneName_en === f.zone;

    const matchProject = f.project === "" || unit.projectId === f.project;

    const matchStatus =
      f.status === "" ||
      (unit.status || "").toLowerCase() === f.status.toLowerCase();

    let matchPrice = true;
    if (f.price !== "") {
      const [min, max] = f.price.split("-").map(Number);
      matchPrice = Number(unit.price) >= min && Number(unit.price) <= max;
    }

    return (
      matchSearch &&
      matchBedrooms &&
      matchDeveloper &&
      matchZone &&
      matchProject &&
      matchStatus &&
      matchPrice
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <p className="text-2xl font-bold">loading ..</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <Hero
          bg={heroImg1}
          title={"Where Visionary Design Meets Daily Life"}
          desc="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
          btnContent="Learn More"
          btn={true}
          icons={true}
        />
      </div>

      <div className="px-6 lg:px-10 mt-16">
        <div className="flex flex-col lg:flex-row border border-[#C34B4B] rounded-lg bg-white overflow-hidden">
          <input
            type="text"
            name="search"
            placeholder="Search Property"
            value={filters.search}
            onChange={handleChange}
            className="flex-1 px-4 py-4 outline-none text-gray-600 placeholder-gray-400"
          />

          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="flex-1 px-3 py-4 outline-none text-gray-500 bg-transparent lg:border-l border-[#C34B4B]"
          >
            <option value="">Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
          </select>

          <select
            name="developer"
            value={filters.developer}
            onChange={handleChange}
            className="flex-1 px-3 py-4 outline-none text-gray-500 bg-transparent lg:border-l border-[#C34B4B]"
          >
            <option value="">Developer</option>
            {developerOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <select
            name="zone"
            value={filters.zone}
            onChange={handleChange}
            className="flex-1 px-3 py-4 outline-none text-gray-500 bg-transparent lg:border-l border-[#C34B4B]"
          >
            <option value="">Zone</option>
            {zoneOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <select
            name="project"
            value={filters.project}
            onChange={handleChange}
            className="flex-1 px-3 py-4 outline-none text-gray-500 bg-transparent lg:border-l border-[#C34B4B]"
          >
            <option value="">Projects</option>
            {projectOptions.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="flex-1 px-3 py-4 outline-none text-gray-500 bg-transparent lg:border-l border-[#C34B4B]"
          >
            <option value="">Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="reserved">Reserved</option>
          </select>

          <select
            name="price"
            value={filters.price}
            onChange={handleChange}
            className="flex-1 px-3 py-4 outline-none text-gray-500 bg-transparent lg:border-l border-[#C34B4B]"
          >
            <option value="">Price Range</option>
            <option value="0-1000000">Under 1M</option>
            <option value="1000000-3000000">1M - 3M</option>
            <option value="3000000-5000000">3M - 5M</option>
            <option value="5000000-999999999">Above 5M</option>
          </select>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setAppliedFilters(filters)}
            className="w-[258px] h-[40px] rounded-[8px] bg-gradient-to-r from-[#6B0F0F] to-[#8E3535] text-white font-semibold cursor-pointer"
          >
            Search
          </button>
          <button
            onClick={() => {
              setFilters(emptyFilters);
              setAppliedFilters(emptyFilters);
            }}
            className="px-6 h-[40px] rounded-[8px] border border-[#8E1616] text-[#8E1616] cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 lg:px-10 pb-16">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((unit) => (
            <div
              className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              key={unit.id}
            >
              <img
                src={unit.images?.[0]}
                alt={unit.title_en}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{unit.title_en}</h2>
                <p className="text-gray-500 mt-2 text-sm">
                  {unit.description_en}
                </p>
                <div className="flex justify-between mt-4 text-sm">
                  <span>{unit.price}</span>
                  <span>{unit.bedrooms}</span>
                </div>
                <button
                  onClick={() => navigate(`/units/${unit.id}`)}
                  className="mt-4 w-full bg-black text-white py-2 rounded-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No units found
          </p>
        )}
      </div>
    </>
  );
}