import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/portfolio';
import type { SectionId } from '@/types';

interface NavbarProps {
  activeSection: SectionId;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 nav-glass"
    >
      <div className="section-container flex items-center h-16 gap-6">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="shrink-0 flex items-center gap-2.5 cursor-pointer group"
          aria-label="Go to home"
        >
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center glow-mint-sm font-bold text-plum-deep text-base group-hover:scale-105 transition-transform">
            LB
          </div>
          <span className="hidden sm:block font-bold text-foreground text-sm tracking-wide">
            Lucy<span className="text-mint"> Bonifas</span>
          </span>
        </button>

        {/* Nav Links — center */}
        <nav className="flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer"
                style={{ color: isActive ? '#F0EDFF' : '#8B85A8' }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(0,229,179,0.08)', border: '1px solid rgba(0,229,179,0.2)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right — CTA */}
        <div className="shrink-0">
          <Button
            className="gradient-bg-pink text-white font-semibold rounded-xl text-sm px-5 py-2 h-auto glow-pink-sm hover:opacity-90 transition-opacity"
            onClick={() => handleNavClick('contact')}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
