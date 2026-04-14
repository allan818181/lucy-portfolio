import { motion } from 'framer-motion';
import { socialLinks, personalInfo } from '@/data/portfolio';
import { LinkedinIcon, InstagramIcon, BehanceIcon, WhatsappIcon } from '@/components/shared/SocialIcons';
import { Heart } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <LinkedinIcon size={18} />,
  instagram: <InstagramIcon size={18} />,
  behance: <BehanceIcon size={18} />,
  whatsapp: <WhatsappIcon size={18} />,
};

const socialHoverColors: Record<string, string> = {
  linkedin: '#00E5B3',
  instagram: '#FF4D9D',
  behance: '#00E5B3',
  whatsapp: '#00E5B3',
};

export const Footer = () => {
  return (
    <footer className="relative border-t"
      style={{ borderColor: '#231D35', background: 'linear-gradient(to top, rgba(19,15,30,0.9) 0%, transparent 100%)' }}>
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left — Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-black text-plum-deep glow-mint-sm">
              LB
            </div>
            <div>
              <p className="text-foreground font-bold text-sm">{personalInfo.name}</p>
              <p className="text-muted-foreground text-xs">{personalInfo.title}</p>
            </div>
          </div>

          {/* Center — Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.15, color: socialHoverColors[link.icon] }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                style={{ border: '1px solid #231D35', color: '#8B85A8' }}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </div>

          {/* Right — Copyright */}
          <p className="text-muted-foreground/60 text-xs flex items-center gap-1.5">
            © 2026 {personalInfo.name}. Made with
            <Heart className="w-3 h-3 fill-pink-brand text-pink-brand inline" />
            in Dar es Salaam.
          </p>
        </div>
      </div>
    </footer>
  );
};
