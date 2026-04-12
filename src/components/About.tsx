import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutImages = [
  "https://i.imgur.com/T0Ezfml.png"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Colorful Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[90vw] lg:max-w-7xl"
          >
            {/* Colorful Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-purple-500/30 to-blue-500/40 blur-[100px] -z-10 opacity-60" />
            
            <div className="aspect-video rounded-[2rem] overflow-hidden glass p-4 relative shadow-2xl border border-white/10">
              <motion.img
                src={aboutImages[0]}
                alt="Yohanes Wasono Portfolio"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "anticipate" }}
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-4 glass p-8 rounded-3xl shadow-2xl hidden md:block border border-white/20 z-30">
              <div className="text-primary font-bold text-3xl mb-1">5+ Years</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Person Behind YW Digital</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">Yohanes Wasono</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master of Business Analytics graduate with 5+ years experience in data analysis, helping businesses grow through smart websites and data-driven insights.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I bridge the gap between technical complexity and creative design. My goal is to provide affordable, high-quality digital solutions that actually work for small businesses and professionals.
              </p>
            </div>

            {/* Skills & Tools Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="glass p-6 rounded-2xl border-white/5">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Looker Data Studio", "SAP", "Canva", "Microsoft Office", "Advanced Excel & Macros"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted-foreground border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="glass p-6 rounded-2xl border-white/5">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Language</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "R", "HTML"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted-foreground border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border-white/5">
                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Reporting", "Presentation", "Storytelling", "Data analysis", "Visualisation"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted-foreground border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-16 text-left">
              <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-8 text-center">Certifications</h3>
              
              {/* Canva Embed */}
              <div className="mb-12 max-w-5xl mx-auto">
                <div className="relative w-full h-0 pt-[56.25%] shadow-2xl rounded-2xl overflow-hidden border border-white/10 glass">
                  <iframe 
                    loading="lazy" 
                    className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
                    src="https://www.canva.com/design/DAG8aOH1ua4/9mKV9A9B94mwp6ZJR9v36A/view?embed" 
                    allowFullScreen
                    allow="fullscreen"
                    title="Certificates Presentation"
                  >
                  </iframe>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.canva.com/design/DAG8aOH1ua4/9mKV9A9B94mwp6ZJR9v36A/view?utm_content=DAG8aOH1ua4&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-medium"
                  >
                    View Full Certificates Presentation
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { provider: "Microsoft", certs: "Introduction to Data Science (2019), Data Analyst Associate (2021, renewed 2026)" },
                  { provider: "Udemy", certs: "Python for Data Science and Machine Learning (2024)" },
                  { provider: "DataCamp", certs: "Intermediate Python (2023)" },
                  { provider: "Google", certs: "Data Analytics Professional (2021), IT Support Professional (2022)" },
                  { provider: "Harvard University", certs: "Data Science: R & Visualization (2019), Computer Science for Business Professionals (2021)" },
                  { provider: "Johns Hopkins University", certs: "Executive Data Science (2021)" },
                  { provider: "UC Davis", certs: "SQL for Data Science (2020)" },
                  { provider: "University of Pennsylvania", certs: "Customer, Operations, People, Accounting Analytics (2020)" },
                  { provider: "PwC", certs: "Data-driven Decision Making (2020), Data Visualization with Advanced Excel (2020)" }
                ].map((item, idx) => (
                  <div key={idx} className="glass p-5 rounded-2xl border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{item.provider}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.certs}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Button variant="outline" size="lg" className="rounded-full gap-3 px-8 h-14 text-lg border-white/10 hover:bg-white/5" asChild>
                <a href="https://www.linkedin.com/in/yohaneswasono/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={22} />
                  LinkedIn
                </a>
              </Button>
              <Button variant="default" size="lg" className="rounded-full gap-3 px-8 h-14 text-lg" asChild>
                <a href="mailto:y.wasono@gmail.com">
                  <Mail size={22} />
                  Email Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
