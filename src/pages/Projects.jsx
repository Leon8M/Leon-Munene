//Here lies the Projects page
import projects from "../data/projects";
import { github } from "../assets";

const Projects = () => {
  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-4xl font-bold uppercase tracking-wide text-center mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {projects.map((project, index) => (
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

    </section>
  );
};

export default Projects;
