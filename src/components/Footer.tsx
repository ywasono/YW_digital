import { motion } from "motion/react";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="https://i.imgur.com/RIUKrqz.png" 
                  alt="YW Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>Digital</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Affordable digital solutions that help your business grow.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/yohaneswasono/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:y.wasono@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:0402065465" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
          <div>© {currentYear} YW Digital. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
