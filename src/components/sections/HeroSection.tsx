import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, heroStats, socialLinks } from '@/data/portfolio';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { LinkedinIcon, InstagramIcon, BehanceIcon, WhatsappIcon } from '@/components/shared/SocialIcons';

const socialIconMap: Record<string, React.ReactNode> = {
  linkedin: <LinkedinIcon size={18} />,
  instagram: <InstagramIcon size={18} />,
  behance: <BehanceIcon size={18} />,
  whatsapp: <WhatsappIcon size={18} />,
};

export const HeroSection = () => {
  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center mesh-bg overflow-hidden pt-16"
    >
      {/* Background blobs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,179,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,77,157,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-16 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,225,53,0.04) 0%, transparent 70%)' }} />

      <div className="section-container w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left — Text */}
          <div className="flex-1 flex flex-col gap-7">

            {/* Availability badge */}
            <AnimatedSection delay={0.05}>
              <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-mint/30 bg-mint/6">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-mint text-sm font-medium">
                  Open to Building Scalable & Impactful Solutions
                </span>
              </div>
            </AnimatedSection>

            {/* Name block */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-2">
                <div
                  className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none select-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(0,229,179,0.35)',
                    color: 'transparent',
                    letterSpacing: '-0.02em',
                  }}
                >
                  DEVELOPER
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none"
                  style={{ letterSpacing: '-0.02em' }}>
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
              </div>
            </AnimatedSection>

            {/* Role */}
            <AnimatedSection delay={0.25}>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[60px]"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,179,0.4))' }} />
                <p className="text-foreground/70 text-lg md:text-xl font-medium">
                  {personalInfo.title}
                </p>
              </div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={0.35}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                I design and develop robust, scalable systems that solve real-world challenges.
                From backend architecture to seamless user experiences, I turn complex ideas into
                powerful, secure, and production-ready applications.
              </p>
            </AnimatedSection>

            {/* Stats row */}
            <AnimatedSection delay={0.45}>
              <div className="flex items-center gap-4 flex-wrap">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-2">
                    <span className="text-4xl font-black gradient-text">{stat.value}</span>
                    <span className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
                <div className="h-8 w-px bg-border mx-2" />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.55}>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="gradient-bg text-plum-deep font-bold rounded-xl px-7 py-3 h-auto glow-mint-sm hover:opacity-90 transition-opacity text-sm"
                  onClick={() => handleNav('projects')}
                >
                  Explore My Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-border/80 bg-transparent text-foreground hover:bg-surface hover:border-mint/30 px-7 py-3 h-auto text-sm font-semibold transition-all"
                  onClick={() => handleNav('contact')}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-pink-brand" />
                  Let's Build Together
                </Button>
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection delay={0.65}>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Connect
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-mint hover:border-mint/40 hover:bg-mint/5 transition-all"
                    >
                      {socialIconMap[link.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Image */}
          <AnimatedSection delay={0.2} direction="right" className="shrink-0 flex justify-center">
            <div className="relative">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-[3rem]"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(0,229,179,0.3), rgba(255,77,157,0.3), rgba(255,225,53,0.2), rgba(0,229,179,0.3))',
                  padding: '1.5px',
                  borderRadius: '3rem',
                }}
              >
                <div className="w-full h-full rounded-[3rem]" style={{ background: '#0C0817' }} />
              </motion.div>

              <motion.div
                initial={{ scale: 0.85, opacity: 0, rotate: -4 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative overflow-hidden border-2 border-mint/30 glow-mint"
                style={{ width: 320, height: 380, borderRadius: '2.5rem' }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(12,8,23,0.7), transparent)' }} />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-foreground font-bold text-lg">{personalInfo.name}</p>
                  <p className="text-mint text-xs mt-0.5">{personalInfo.title}</p>
                </div>
              </motion.div>

              {/* Badge 1 */}
              <motion.div className="absolute -top-3 -right-5 card-surface px-4 py-2.5 flex items-center gap-2.5 glow-mint-sm">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Star className="w-4 h-4 fill-plum-deep text-plum-deep" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">Trusted Developer</p>
                  <p className="text-muted-foreground text-[10px]">Built with precision & performance</p>
                </div>
              </motion.div>

              {/* Badge 2 */}
              <motion.div className="absolute -bottom-3 -left-5 card-surface px-4 py-2.5 flex items-center gap-2.5 glow-pink-sm">
                <div className="w-8 h-8 rounded-lg gradient-bg-pink flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">20+ Projects</p>
                  <p className="text-muted-foreground text-[10px]">Systems built & deployed</p>
                </div>
              </motion.div>

            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span className="text-muted-foreground/40 text-[10px] uppercase tracking-[0.25em]">
          explore
        </span>
        <div className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, rgba(0,229,179,0.5), transparent)' }} />
      </motion.div>
    </section>
  );
};