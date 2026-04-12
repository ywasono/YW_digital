import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const portfolioItems = [
  {
    title: "Mr Viet Adelaide",
    url: "https://ywasono.github.io/MrVietAdelaide",
    image: "https://i.imgur.com/dN4MYzB.png",
    tags: ["Restaurant", "Modern", "Fast"],
  },
  {
    title: "Thanh Thanh Adelaide",
    url: "https://ywasono.github.io/ThanhThanhAdelaide",
    image: "https://i.imgur.com/1SHDJYI.png",
    tags: ["Local Business", "Menu", "Responsive"],
  },
  {
    title: "Ying Chow Adelaide",
    url: "https://ywasono.github.io/YingChowAdelaide",
    image: "https://i.imgur.com/foKUHux.png",
    tags: ["Dining", "Clean UI", "Mobile-First"],
  },
  {
    title: "Cafe Bang Bang",
    url: "https://ywasono.github.io/CafeBangBangAdelaide",
    image: "https://i.imgur.com/9eWnkIV.png",
    tags: ["Cafe", "Vibrant", "Modern"],
  },
  {
    title: "Yelin Surabaya",
    url: "https://ywasono.github.io/YelinSurabaya",
    image: "https://i.imgur.com/JogTyZp.png",
    tags: ["E-commerce", "Portfolio", "Professional"],
  },
  {
    title: "DItobi Adelaide",
    url: "https://ywasono.github.io/DitobiAdelaide/",
    image: "https://i.imgur.com/Iz2fn2x.png",
    tags: ["Business", "Professional", "Responsive"],
  },
];

const features = [
  "Help businesses get noticed online",
  "Fast, modern, mobile-friendly websites",
  "Perfect for restaurants, cafes, and local businesses",
  "SEO optimized structure",
];

export default function WebDesign() {
  return (
    <section id="web-design" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Affordable Web Design
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="rounded-full group" asChild>
              <a href="#contact">
                Get Your Website
                <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-white/5 bg-background/40 hover:bg-background/60 transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <Button variant="secondary" size="sm" className="w-full rounded-full" asChild>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-[10px] font-medium uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
