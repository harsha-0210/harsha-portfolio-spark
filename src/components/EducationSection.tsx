
import { Book, School, Calendar } from "lucide-react";

const EducationSection = () => {
  const educationItems = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Lovely Professional University",
      period: "2022 - Present",
      icon: <School className="w-8 h-8 text-accent" />,
    },
    {
      degree: "12th Grade",
      institution: "RBN Global School Lucknow - Science Stream - CBSE Board",
      period: "2022",
      icon: <Book className="w-8 h-8 text-accent" />,
    },
    {
      degree: "10th Grade",
      institution: "RBN Global School Lucknow - CBSE Board",
      period: "2020",
      icon: <Book className="w-8 h-8 text-accent" />,
    },
  ];

  return (
    <section id="education" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Book size={24} className="text-accent" />
          <span>Education</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

          {educationItems.map((item, index) => (
            <div 
              key={item.degree}
              className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center relative z-10 reveal`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent z-20 shadow-lg"></div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">{item.degree}</h3>
                  <p className="text-gray-600 mb-2">{item.institution}</p>
                  <div className="flex items-center text-sm text-gray-500 justify-center mt-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
              
              {/* Empty Space */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
