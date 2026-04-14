import { motion } from 'framer-motion';
import { Palette, Share2, Camera, Brain, Layers, TrendingUp } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { QuoteCard } from '@/components/shared/QuoteCard';
import { skillCategories, designSkills, aiSkills } from '@/data/portfolio';

const skillQuote =
  "Creativity is not a talent. It is a way of operating — a muscle built from curiosity, courage, and an unshakeable belief that the world deserves more beauty.";

const categoryColors: Record<string, { primary: string; secondary: string; glow: string }> = {
  'Visual Design': { primary: '#00E5B3', secondary: '#00B8D9', glow: 'rgba(0,229,179,0.15)' },
  'Digital & Social': { primary: '#FF4D9D', secondary: '#FF7EB3', glow: 'rgba(255,77,157,0.15)' },
};

const iconMap: Record<string, React.ReactNode> = {
  'Brand Identity Design': <Palette className="w-6 h-6" />,
  'Graphic Design': <Layers className="w-6 h-6" />,
  'UI/UX Design': <Layers className="w-6 h-6" />,
  'Motion & Video': <Camera className="w-6 h-6" />,
  'Social Media Strategy': <Share2 className="w-6 h-6" />,
  'Content Creation': <Palette className="w-6 h-6" />,
  'Photography': <Camera className="w-6 h-6" />,
  'Digital Marketing': <TrendingUp className="w-6 h-6" />,
};

// Bento tile sizes — alternate large/small
const bentoSizes = ['col-span-1', 'col-span-1', 'col-span-1', 'col-span-1'];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,179,0.05) 0%, transparent 70%)' }} />

      <div className="section-container">
        <SectionHeading
          label="What I Do Best"
          whiteText="Skills &"
          gradientText="Expertise"
          subtitle="From pixels to campaigns — the tools I wield to craft extraordinary creative work"
        />

        {/* Main Skill Categories as Bento Grids */}
        {skillCategories.map((category) => {
          const colors = categoryColors[category.title] || { primary: '#00E5B3', secondary: '#00B8D9', glow: 'rgba(0,229,179,0.15)' };

          return (
            <AnimatedSection key={category.title} className="mb-16">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px flex-1 max-w-8"
                  style={{ background: colors.primary }} />
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${colors.primary}18`, color: colors.primary }}>
                    {category.title === 'Visual Design' ? <Palette className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  </div>
                  <h3 className="text-foreground font-black text-xl" style={{ letterSpacing: '-0.01em' }}>
                    {category.title}
                  </h3>
                </div>
                <div className="h-px flex-1"
                  style={{ background: `linear-gradient(to right, ${colors.primary}, transparent)` }} />
                <span className="text-muted-foreground text-sm">{category.subtitle}</span>
              </div>

              {/* Bento Grid */}
              <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-4" staggerDelay={0.08}>
                {category.skills.map((skill, idx) => (
                  <StaggerItem key={skill.name} className={bentoSizes[idx]}>
                    <motion.div
                      whileHover={{ scale: 1.03, borderColor: colors.primary }}
                      className="bento-tile flex flex-col justify-between h-full min-h-[200px] cursor-default"
                      style={{
                        borderColor: `${colors.primary}20`,
                        background: `linear-gradient(135deg, #130F1E 60%, ${colors.glow} 100%)`,
                      }}
                    >
                      {/* Top: icon + percentage */}
                      <div className="flex items-start justify-between">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ background: `${colors.primary}15`, color: colors.primary }}>
                          {iconMap[skill.name] || <Palette className="w-5 h-5" />}
                        </div>
                        <span
                          className="text-4xl font-black leading-none"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {skill.percentage}
                        </span>
                      </div>

                      {/* Bottom: name + description + bar */}
                      <div className="mt-4">
                        <h4 className="text-foreground font-bold text-sm mb-1.5">{skill.name}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-3">{skill.description}</p>
                        <div className="w-full h-1 rounded-full overflow-hidden"
                          style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          );
        })}

        {/* Tools + AI Row */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

            {/* Design Tools */}
            <div className="bento-tile"
              style={{ borderColor: 'rgba(0,229,179,0.2)', background: 'linear-gradient(135deg, #130F1E 60%, rgba(0,229,179,0.04) 100%)' }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,229,179,0.12)', color: '#00E5B3' }}>
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-foreground font-black text-lg" style={{ letterSpacing: '-0.01em' }}>Tools & Software</h3>
                  <p className="text-muted-foreground text-xs">My creative arsenal</p>
                </div>
              </div>
              <div className="space-y-5">
                {designSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-semibold text-sm">{skill.name}</span>
                      <span className="text-2xl font-black gradient-text-mint">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <motion.div
                        className="h-full rounded-full progress-mint"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Emerging */}
            <div className="bento-tile"
              style={{ borderColor: 'rgba(255,77,157,0.2)', background: 'linear-gradient(135deg, #130F1E 60%, rgba(255,77,157,0.04) 100%)' }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,77,157,0.12)', color: '#FF4D9D' }}>
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-foreground font-black text-lg" style={{ letterSpacing: '-0.01em' }}>AI & New Tech</h3>
                  <p className="text-muted-foreground text-xs">Embracing the future of creativity</p>
                </div>
              </div>
              <div className="space-y-5">
                {aiSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground/85 text-sm">{skill.name}</span>
                      <span className="text-2xl font-black gradient-text-pink">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <motion.div
                        className="h-full rounded-full progress-pink"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <QuoteCard quote={skillQuote} author="Lucy Bonifas" />
      </div>
    </section>
  );
};
