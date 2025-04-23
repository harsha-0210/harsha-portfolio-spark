
import { Code, Shield, Megaphone, Cpu, Database } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="skill-icon" />,
      skills: [
        {
          name: "C++ (Advanced)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Java (Intermediate)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python (Intermediate)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C (Advanced)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "HTML (Basic)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS (Basic)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript (Basic)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="skill-icon" />,
      skills: [
        {
          name: "Network Security",
          icon: "https://img.icons8.com/color/48/000000/firewall.png",
        },
        {
          name: "Ethical Hacking",
          icon: "https://img.icons8.com/color/48/000000/hacking.png",
        },
        {
          name: "Burp Suite",
          icon: "https://img.icons8.com/color/48/000000/bug.png",
        },
        {
          name: "Kali Linux",
          icon: "https://img.icons8.com/color/48/000000/kali-linux.png",
        },
        {
          name: "Nmap",
          icon: "https://img.icons8.com/color/48/000000/network-card.png",
        },
      ],
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="skill-icon" />,
      skills: [
        {
          name: "SEO",
          icon: "https://img.icons8.com/color/48/000000/search.png",
        },
        {
          name: "Content Marketing",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsRRtCVlfwSyhwSV4cNJ1JKfzvZQI91CTqg&s",
        },
        {
          name: "Google Ads",
          icon: "https://img.icons8.com/color/48/google-ads.png",
        },
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="skill-icon" />,
      skills: [
        {
          name: "AI Concepts",
          icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
        },
        {
          name: "Machine Learning",
          icon: "https://static.vecteezy.com/system/resources/previews/004/655/703/non_2x/trendy-design-icon-of-machine-learning-vector.jpg",
        },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="skill-icon" />,
      skills: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2 mb-12">
          <Code size={24} className="text-accent" />
          <span>Skills</span>
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="reveal">
              <div className="mb-8 flex items-center justify-center gap-3">
                {category.icon}
                <h3 className="text-2xl font-playfair font-bold text-center">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="skill-card flex flex-col items-center text-center"
                  >
                    <div className="mb-4 w-16 h-16 flex items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full" />
                    </div>
                    <p className="font-medium text-gray-800">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
