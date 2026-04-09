import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const aboutImages = [
  "https://i.imgur.com/T0Ezfml.png",
  "https://i.imgur.com/DJGjzel.png"
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
              <AnimatePresence mode="wait">
                <motion.img
                  key={aboutImages[currentImage]}
                  src={aboutImages[currentImage]}
                  alt="Yohanes Wasono Portfolio"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: "anticipate" }}
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {aboutImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === currentImage ? "bg-primary w-12" : "bg-white/20 w-2 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
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
