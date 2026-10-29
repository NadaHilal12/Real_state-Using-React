
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../helpers/api";

export default function DeveloperDetails() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDeveloper() {
      try {
        const response = await api.get(`/developer/${id}`);
        setDeveloper(response.data);
      } catch (error) {
        console.error("Error fetching developer:", error);
      } finally {
        setLoading(false);
      }
    }

    getDeveloper();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!developer) {
    return <p className="text-center py-10">Developer not found</p>;
  }

  const projects = developer.projects || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#8E1616] mb-3">
        {developer.name_en}
      </h1>

      <p className="text-gray-500 mb-8">
        {developer.description_en}
      </p>

      <h2 className="text-xl font-bold mb-5">Our Projects</h2>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="rounded-xl border border-gray-200 p-3 shadow-sm"
            >
              <img
                src={project.images?.[0]}
                alt={project.name_en || "Project"}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="font-bold text-[#8E1616] mt-3">
                {project.name_en || project.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {project.description_en}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No projects found.</p>
      )}
    </section>
  );
}
