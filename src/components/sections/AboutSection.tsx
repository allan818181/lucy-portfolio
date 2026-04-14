import { Heart, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  aboutParagraphs,
  byTheNumbers,
  driveItems,
  journey,
  
  personalInfo,
} from '@/data/portfolio';
import type { DriveItem } from '@/types';

const driveIconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="w-5 h-5 fill-current" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
};

const DriveCard = ({ item }: { item: DriveItem }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex items-start gap-4 p-5 rounded-2xl transition-all"
    style={{
      background: `linear-gradient(135deg, ${item.color}08 0%, ${item.color}04 100%)`,
      border: `1px solid ${item.color}25`,
    }}
  >
    <div
      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${item.color}18`, color: item.color }}
    >
      {driveIconMap[item.icon]}
    </div>
    <div>
      <h4 className="text-foreground font-bold mb-1.5" style={{ color: item.color }}>
        {item.title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  </motion.div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">

      {/* Blob accents */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,77,157,0.05) 0%, transparent 70%)' }} />

      <div className="section-container">

        <SectionHeading
          label="My Journey"
          whiteText="About"
          gradientText="Developer"
          subtitle="From curiosity to building scalable systems that impact real users"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20">

          {/* LEFT COLUMN */}
          <div className="space-y-10">

            {/* Avatar + intro */}
            <AnimatedSection direction="left">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="/images/image.png"
                  alt="Profile Image"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-mint/30"
                />
                <div>
                  <p className="text-foreground font-bold">{personalInfo.name}</p>
                  <p className="text-mint text-sm font-medium">{personalInfo.title}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    📍 {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {aboutParagraphs.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Quote */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="relative rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,229,179,0.06), rgba(255,77,157,0.04))',
                  border: '1px solid rgba(255,77,157,0.25)',
                }}
              >
                <div className="text-5xl font-serif text-pink-brand/20 mb-1">&ldquo;</div>

                <p className="text-foreground/80 text-sm md:text-base leading-relaxed italic px-2">
                  "Code is not just syntax — it's the power to solve problems, scale ideas, and build systems that change lives."
                </p>

                <p className="gradient-text-pink font-bold mt-4 text-sm">
                  — {personalInfo.name}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            {/* What Drives Me */}
            <AnimatedSection direction="right">
              <h3 className="text-xl font-black text-foreground mb-5">
                What Drives My Development
              </h3>

              <StaggerContainer className="space-y-3" staggerDelay={0.12}>
                {driveItems.map((item) => (
                  <StaggerItem key={item.title}>
                    <DriveCard item={item} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            {/* Journey */}
            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="text-xl font-black text-foreground mb-6">
                Development Journey
              </h3>

              <div className="space-y-0">
                {journey.map((item, i) => (
                  <div key={i} className="flex gap-4">

                    <div className="shrink-0 w-16 pt-0.5">
                      <p className="text-mint text-[10px] font-bold text-right">
                        {item.dateRange}
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full gradient-bg-pink mt-1" />
                      {i < journey.length - 1 && (
                        <div className="w-px flex-1 mt-2 mb-2"
                          style={{ background: 'linear-gradient(to bottom, rgba(255,77,157,0.4), transparent)', minHeight: 40 }} />
                      )}
                    </div>

                    <div className="pb-6 flex-1">
                      <div className="rounded-xl p-4"
                        style={{ background: '#130F1E', border: '1px solid #231D35' }}>
                        <h4 className="text-foreground font-bold text-sm mb-1">
                          {item.role}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Numbers */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="rounded-2xl p-7"
                style={{ background: '#130F1E', border: '1px solid #231D35' }}>

                <h3 className="text-foreground font-black text-lg mb-6">
                  Developer Insights
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {byTheNumbers.map((stat, i) => (
                    <div key={stat.label} className="text-center">
                      <p className={`text-3xl font-black mb-1 ${i === 1 ? 'gradient-text-pink' : 'gradient-text-mint'}`}>
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
};