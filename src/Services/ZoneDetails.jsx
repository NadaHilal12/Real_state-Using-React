
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../helpers/api";

export default function ZoneDetails() {
  const { id } = useParams();
  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const getZone = async () => {
      try {
        const response = await api.get(`/zone/${id}`);
        const data = response.data;

        setZone(data);
        setSelectedImage(data.images?.[0] || "");
      } catch (error) {
        console.log("Error fetching zone:", error);
      } finally {
        setLoading(false);
      }
    };

    getZone();
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!zone) {
    return <p className="text-center py-20">Zone not found</p>;
  }

  const images = zone.images || [];
  const projects = zone.projects || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center font-serif font-bold text-2xl mb-6">
        {zone.name_en}
        <span className="block w-24 h-[3px] bg-[#C34B4B] mx-auto mt-2" />
      </h1>

      {/* Main image */}
      <div className="w-full h-[260px] md:h-[420px] rounded-xl overflow-hidden">
        {selectedImage && (
          <img
            src={selectedImage}
            alt={zone.name_en}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnail images */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`h-20 md:h-24 rounded-lg overflow-hidden border-2 ${
              selectedImage === image
                ? "border-[#8E1616]"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`${zone.name_en} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Zone information */}
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#8E1616]">
          {zone.name_en}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {zone.city_en}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="font-bold mb-4">At a glance</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>Projects: {projects.length}</li>
            <li>City: {zone.city_en}</li>
            <li>
              Description: {zone.description_en}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Overview</h3>
          <p className="text-sm text-gray-500 leading-6">
            {zone.description_en}
          </p>
        </div>
      </div>

      {/* Projects inside this zone */}
     
    </section>
  );
}
