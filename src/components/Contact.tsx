import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Send, MessageSquare, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Design",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "Web Design", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
      setErrorMessage("A network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to grow your business? Whether it's a new website or a data dashboard, I'm here to help.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email</div>
                  <a href="mailto:y.wasono@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">y.wasono@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Phone</div>
                  <a href="tel:0402065465" className="text-xl font-bold hover:text-primary transition-colors">0402 065 465</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/yohaneswasono/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors">yohaneswasono</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-primary/10 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="text-primary" size={20} />
                Quick Quote
              </h3>
              <p className="text-muted-foreground mb-6">
                Affordable websites and dashboards tailored to your needs.
              </p>
              <div className="flex flex-col gap-3">
                <Button className="w-full rounded-full" asChild>
                  <a href="mailto:y.wasono@gmail.com?subject=Website Inquiry">Let's Build Your Website</a>
                </Button>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <a href="mailto:y.wasono@gmail.com?subject=Dashboard Inquiry">Turn Your Data into Insights</a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-white/5 bg-white/5 p-8 rounded-3xl relative overflow-hidden">
                {status === "loading" && (
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center rounded-3xl">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="animate-spin text-primary" size={40} />
                      <p className="font-bold text-xl">Sending Message...</p>
                    </div>
                  </div>
                )}
                {status === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>Send Another Message</Button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest ml-1">Name</label>
                        <input 
                          required
                          placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest ml-1">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="your@email.com" 
                          className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-4 outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest ml-1">Service</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 h-12 rounded-xl px-3 outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option className="bg-background">Web Design</option>
                        <option className="bg-background">Data Analytics Dashboard</option>
                        <option className="bg-background">Both</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        required
                        placeholder="Tell me about your project..." 
                        className="w-full bg-white/5 border border-white/10 min-h-[150px] rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-14 rounded-xl text-lg gap-2 group bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    {status === "error" && (
                      <p className="text-red-500 text-sm text-center bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        {errorMessage}
                      </p>
                    )}
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
