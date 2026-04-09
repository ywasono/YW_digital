/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WebDesign from "@/components/WebDesign";
import Analytics from "@/components/Analytics";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Nguyen",
    text: "YW Digital transformed our online presence. The website is fast, beautiful, and our customers love it!",
    role: "Cafe Owner"
  },
  {
    name: "Sarah Jenkins",
    text: "The data dashboard Yohanes built for us saved hours of manual work. We now make decisions based on real-time insights.",
    role: "Marketing Manager"
  },
  {
    name: "Michael Chen",
    text: "Affordable doesn't mean low quality here. The attention to detail in the web design was impressive.",
    role: "Small Business Owner"
  },
  {
    name: "Jessica Taylor",
    text: "Working with Yohanes was a breeze. He understood our brand perfectly and delivered a site that exceeded our expectations.",
    role: "E-commerce Founder"
  },
  {
    name: "Robert Wilson",
    text: "The analytics solutions provided gave us a clear view of our operational bottlenecks. Highly recommended for any data-driven business.",
    role: "Operations Director"
  },
  {
    name: "Amanda Lee",
    text: "Professional, responsive, and highly skilled. Yohanes helped us bridge the gap between our data and our design.",
    role: "Boutique Owner"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <Hero />
        
        <WebDesign />
        
        <Analytics />

        {/* Testimonials Section */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What Clients Say</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl relative group"
                >
                  <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />
                  <p className="text-muted-foreground mb-6 italic relative z-10">"{t.text}"</p>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-primary uppercase tracking-widest font-bold">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <About />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
