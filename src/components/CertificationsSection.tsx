
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Ethical Hacking Essentials",
      issuer: "EC Council",
      link: "https://coursera.org/verify/QAYCLA32VDJO",
      image: "https://drive.google.com/file/d/1mf8Ub3LxEUram_grl53H3D9JtlDwL0hV/view?usp=drive_link"
    },
    {
      title: "Responsible & Safe AI Systems",
      issuer: "NPTEL",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS132S85160043904042720",
      image: "https://drive.google.com/file/d/1dUpa98lCpaSUp_5kBFVXvLP6MsCQjvGG/view?usp=drive_link" 
    },
    {
      title: "Digital Forensics Essentials",
      issuer: "EC-Council",
      link: "https://coursera.org/verify/EH17IQTCJKB8",
      image: "https://drive.google.com/file/d/1Jdcgmb-Vdsq5BHM_pmigOLO8Kb-ot8qT/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Award size={24} className="text-accent" />
          <span>Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a 
              key={cert.title} 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer" 
              className="block group reveal" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-3">
                      <ExternalLink size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 font-playfair">{cert.title}</h3>
                  <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  <div className="mt-4 flex items-center text-accent">
                    <Award size={16} className="mr-1" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

// Import at the top
import { ExternalLink } from "lucide-react";
