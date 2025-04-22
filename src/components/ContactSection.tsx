
import { Mail, Phone, MapPin, Linkedin, Github, FileDown } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <Mail size={24} className="text-accent" />
          <span>Contact Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center reveal">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={24} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:harshasrivastava71@gmail.com" className="text-accent hover:underline">
                harshasrivastava71@gmail.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center reveal" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={24} />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-700">+91-6393799059</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center reveal" style={{ animationDelay: "0.4s" }}>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-700">Punjab, India</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center reveal" style={{ animationDelay: "0.6s" }}>
            <a 
              href="https://www.linkedin.com/in/harsha--srivastava/" 
              target="_blank" 
              rel="noreferrer" 
              className="button-primary"
            >
              <Linkedin size={18} /> Visit My LinkedIn
            </a>
            
            <a 
              href="https://github.com/harsha-0210" 
              target="_blank" 
              rel="noreferrer" 
              className="button-secondary"
            >
              <Github size={18} /> Visit My GitHub
            </a>
            
            <a 
              href="https://drive.google.com/file/d/14Y098j-e91_qVskTsKJ-5YPOgahzg6T6/view?usp=drive_link" 
              target="_blank" 
              rel="noreferrer" 
              className="button-secondary"
            >
              <FileDown size={18} /> Download my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
