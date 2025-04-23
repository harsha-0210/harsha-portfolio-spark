
import { BookOpen, ExternalLink } from "lucide-react";

const BlogSection = () => {
  return (
    <section id="blog" className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center gap-2">
          <BookOpen size={24} className="text-accent" />
          <span>My Blog</span>
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden reveal">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <a 
                href="https://truetechnologiess.blogspot.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="block h-full relative group"
              >
                <img 
                  src="/Screenshot (280).png"
                  alt="My Blog" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-3">
                    <ExternalLink size={24} className="text-accent" />
                  </div>
                </div>
              </a>
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Life, Tech & Everything In-Between</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I pen down thoughts on cyber trends, student life, coding journeys, and the chaotic beauty of being in your 20s! Check out my lifestyle & tech blog for insights, aesthetics, and little sparkles of fun ✨.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">#Cybersecurity</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">#StudentLife</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">#TechTrends</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">#Coding</span>
              </div>
              <a 
                href="https://truetechnologiess.blogspot.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="button-primary inline-flex"
              >
                Visit My Blog <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
