import projects from "../data/projects"; //Where projects are listed; i will render them dynamically
import { Link } from "react-router-dom";
import { github } from "../assets";

const ProjectsPreview = () => {
  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-4xl font-bold uppercase tracking-wide text-center mb-10">
        Selected Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex justify-between items-center">
                {/* Live Demo */}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-sm"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <img src={github} alt="GitHub" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <Link
          to="/projects"
          className="border-2 border-white text-white px-6 py-2 rounded-lg text-sm tracking-wide uppercase transition hover:bg-white hover:text-black"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
