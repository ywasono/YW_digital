import { motion } from "motion/react";
import { Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <img
                src="https://i.imgur.com/p1DhHHO.png"
                alt="Yohanes Wasono"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="text-primary font-bold text-xl">5+ Years</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">The Person Behind YW Digital</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Yohanes Wasono</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Master of Business Analytics graduate with 5+ years experience in data analysis, helping businesses grow through smart websites and data-driven insights.
              </p>
              <p>
                I bridge the gap between technical complexity and creative design. My goal is to provide affordable, high-quality digital solutions that actually work for small businesses and professionals.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="outline" className="rounded-full gap-2" asChild>
                <a href="https://www.linkedin.com/in/yohaneswasono/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="rounded-full gap-2" asChild>
                <a href="mailto:y.wasono@gmail.com">
                  <Mail size={18} />
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
