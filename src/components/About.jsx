//Contains code for the About me Section
import skills from "../data/skills";

const About = () => {
  return (
    <section className="p-10 text-white bg-black">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Who Am I ?</h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I’m a passionate software developer skilled in Python, React, Flask, and currently learning Rust. 
          I specialize in building efficient, scalable, and user-friendly solutions to solve real-world problems. 
          With strong problem-solving skills, I write clean, optimized code to deliver robust applications. 
          As a Microsoft Student Ambassador and Tech Lead, I’ve mentored peers, conducted workshops on Python and React, 
          and led teams to deliver impactful projects. I thrive in dynamic environments, constantly learning new technologies to stay ahead. 
          Let’s collaborate to bring your ideas to life and create solutions that make a difference!
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-3xl font-bold uppercase text-center tracking-wide">Languages & Frameworks</h3>
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
