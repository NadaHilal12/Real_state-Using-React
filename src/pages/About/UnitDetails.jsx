
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/api";

export default function UnitDetails() {
  const { id } = useParams();
  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUnit = async () => {
      try {
        const response = await api.get(`/unit/${id}`);
        console.log("Unit details:", response.data);
        setUnit(response.data);
      } catch (error) {
        console.log("Error fetching unit:", error);
      } finally {
        setLoading(false);
      }
    };

    getUnit();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!unit) {
    return <p className="text-center mt-10">Unit not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <img
        src={Array.isArray(unit.images) ? unit.images[0] : unit.image}
        alt={unit.title_en}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {unit.title_en}
      </h1>

      <p className="text-gray-600 mt-3">
        {unit.description_en}
      </p>

      <p className="mt-4 font-bold">
        Price: {unit.price}
      </p>

      <p className="mt-2">
        Bedrooms: {unit.bedrooms}
      </p>
    </div>
  );
}
