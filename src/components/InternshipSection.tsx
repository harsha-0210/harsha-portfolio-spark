
import { Briefcase } from "lucide-react";

const InternshipSection = () => {
  return (
    <section id="internship" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Briefcase size={24} className="text-accent" />
          <span>Internship Experience</span>
        </h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto reveal">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-accent to-primary p-8 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-3">Ethical Hacking Intern</h3>
              <div className="flex items-center mb-6">
                <Briefcase size={18} className="mr-2" />
                <span className="font-medium">Internship Studio</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Shield size={18} className="text-white" />
                  </div>
                  <p className="font-medium">Network Security</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Terminal size={18} className="text-white" />
                  </div>
                  <p className="font-medium">Vulnerability Assessment</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <AlertTriangle size={18} className="text-white" />
                  </div>
                  <p className="font-medium">Incident Response</p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                I completed a hands-on internship at <strong className="text-accent">Internship Studio</strong> as an Ethical Hacking Intern, where I worked on network vulnerability assessments and implemented tools like Wireshark and Nmap, using SQL injection & Cross site scripting scanned vulnerabilities in the sites. It helped me gain real-world exposure to ethical hacking and incident response mechanisms.
              </p>
              
              <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
                <p className="italic text-gray-600">
                  "The internship provided invaluable experience in identifying and addressing security vulnerabilities in real-world applications."
                </p>
              </div>

              <div className="mt-8">
                <img 
                  src="Screenshot (288).png" 
                  alt="Internship Experience" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;

// Import at the top
import { Shield, Terminal, AlertTriangle } from "lucide-react";
