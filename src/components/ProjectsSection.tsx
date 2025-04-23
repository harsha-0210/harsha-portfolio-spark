
import { Code, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Safer - User Authentication Interface",
    description: "Built a Cryptographic interface working on RBAC and authenticates users using Multi-factor authentication.",
    techStack: "Kali Linux, Metasploit, Burp Suite, HTML, CSS",
    image: "https://i.imgur.com/S7NvTh6.png",
    link: "https://github.com/harsha-0210/User-Auhthentication-Interface",
    github: "https://github.com/harsha-0210/User-Auhthentication-Interface"
  },
  {
    title: "Sleath - AI powered smart planner",
    description: "Built an AI based smart planner which sets reminders for your daily tasks and automate your daily routine.",
    techStack: "HTML, CSS, JavaScript",
    image: "https://i.imgur.com/9OidaJl.png",
    link: "https://github.com/harsha-0210/Sleath-Smart-Planner",
    github: "https://github.com/harsha-0210/Sleath-Smart-Planner"
  },
  {
    title: "Travel Sphere",
    description: "A personal travel planning website made to help users explore and create trip itineraries with ease and aesthetics.",
    techStack: "Weebly",
    image: "https://i.imgur.com/RyiXhk5.png",
    link: "https://travelspheres.weebly.com",
    github: null
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Code size={24} className="text-accent" />
          <span>Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-auto h-full max-h-52 object-contain mx-auto transition-transform duration-500"
                  style={{ maxWidth: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white flex items-center gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-playfair">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium">Tech Stack</p>
                  <p className="text-gray-700">{project.techStack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
