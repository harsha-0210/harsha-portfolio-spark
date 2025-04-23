
import { Trophy, FileText, Award } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "HackerRank Problem Solving Certification",
      icon: <Trophy className="w-12 h-12 text-accent" />,
      image: "https://drive.google.com/file/d/1Khmwu9ichAY5pN_v5oD4uFkD9mbXpW1a/view?usp=drive_link",
    },
    {
      title: "Cyber Security Paper with 29K+ reads",
      icon: <FileText className="w-12 h-12 text-accent" />,
      image: "https://i0.wp.com/carijournals.org/wp-content/uploads/2023/04/Steps-in-Writing-a-Good-Research-Paper.png?fit=1000%2C600&ssl=1",
    },
    {
      title: "NPTEL Elite Badge",
      icon: <Award className="w-12 h-12 text-accent" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JgJF-gjK75chhTH4rGhDrNj0wR6qkaFcSA&s",
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Trophy size={24} className="text-accent" />
          <span>Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                  {achievement.icon}
                </div>
                <div className="pt-8">
                  <h3 className="text-lg font-bold font-playfair">{achievement.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
