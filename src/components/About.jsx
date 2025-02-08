import skills from "../data/skills";

const About = () => {
  return (
    <section className="p-10 text-white bg-black">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Who Am I ?</h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I'm a software developer with experience in Python, C++, and a bit of Rust, with expertise in frameworks like React.
          I also work with Flask. I'm a quick learner who collaborates closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. I am also a mentor and trainer in programming languages and
          technologies, including Python and React. Let's work together to bring your ideas to life!
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <h3 className="text-3xl font-bold uppercase text-center tracking-wide">Skills</h3>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-64 h-36 flex flex-col justify-between p-4 bg-black border border-gray-600 text-white rounded-lg shadow-md transform transition hover:scale-105 hover:bg-gray-800"
            >
              <div className="flex justify-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
              <p className="text-center text-sm font-semibold mt-4 uppercase">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
