import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, TrendingUp, Database, Search, FileText } from "lucide-react";

const analyticsPortfolio = [
  {
    title: "Adventure Works",
    url: "https://canva.link/kox45e7ch90vzhf",
    type: "Sales Analysis",
    icon: TrendingUp,
    image: "https://i.imgur.com/vKPADtG.png",
  },
  {
    title: "Gas National Sales",
    url: "https://canva.link/m94pmml80hbm210",
    type: "Energy Sector",
    icon: BarChart3,
    image: "https://i.imgur.com/WI4CiTW.png",
  },
  {
    title: "Gas Production",
    url: "https://canva.link/hkwonx5yw0cb3wo",
    type: "Operational Data",
    icon: Database,
    image: "https://i.imgur.com/SnuE7zm.png",
  },
  {
    title: "HR Analytics",
    url: "https://canva.link/ziz2y5iho4l26lz",
    type: "People Data",
    icon: Search,
    image: "https://i.imgur.com/iMiv1p1.png",
  },
  {
    title: "Telecom Customer Churn",
    url: "https://canva.link/avmm81awv0we1pi",
    type: "Retention Analysis",
    icon: PieChart,
    image: "https://i.imgur.com/8Hu57tf.png",
  },
  {
    title: "Aging Receivables",
    url: "https://canva.link/u4sbqwcvzoanthb",
    type: "Financial Reporting",
    icon: FileText,
    image: "https://i.imgur.com/35U5T5R.png",
  },
  {
    title: "Australia Germany Trade",
    url: "https://canva.link/h0z9cahj0b43o6y",
    type: "International Trade",
    icon: TrendingUp,
    image: "https://i.imgur.com/7QO0PEO.png",
  },
  {
    title: "Australia Diamond Trade",
    url: "https://canva.link/nrg8tizvskdnvh7",
    type: "Commodity Analysis",
    icon: BarChart3,
    image: "https://i.imgur.com/C94sjnl.png",
  },
];

const services = [
  {
    title: "Dashboard Creation",
    desc: "Interactive Power BI, Excel, or SQL dashboards tailored to your KPIs.",
    icon: BarChart3,
  },
  {
    title: "Data Cleaning",
    desc: "Transforming messy raw data into structured, usable formats.",
    icon: Database,
  },
  {
    title: "Business Insights",
    desc: "In-depth reporting to help you understand customer behavior.",
    icon: Search,
  },
];

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Turn Your Data into <br />
              <span className="text-primary">Actionable Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Make smarter decisions, understand customers better, and improve business performance with professional data analytics.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Services List */}
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-white/5 bg-white/5 hover:bg-white/10 transition-colors h-full">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Analytics Portfolio Grid */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Analytics Portfolio</h3>
            <p className="text-muted-foreground">Explore my recent data projects and dashboards</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsPortfolio.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="group overflow-hidden border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-6">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon size={16} />
                      </div>
                      <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{item.type}</div>
                      <h4 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                      <Button variant="link" className="p-0 h-auto text-muted-foreground group-hover:text-foreground justify-start" asChild>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          View Dashboard →
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
