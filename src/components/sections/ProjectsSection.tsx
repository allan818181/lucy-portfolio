import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Eye } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { QuoteCard } from '@/components/shared/QuoteCard';
import { projects } from '@/data/portfolio';
import type { Project } from '@/types';

const projectQuote =
  "Every project is a conversation — between a brand and its people, between a designer and a dream. I make sure that conversation is unforgettable.";

// Alternate pill colors per project
const pillColors = [
  { border: 'rgba(0,229,179,0.35)', color: '#00E5B3', bg: 'rgba(0,229,179,0.08)' },
  { border: 'rgba(255,77,157,0.35)', color: '#FF4D9D', bg: 'rgba(255,77,157,0.08)' },
  { border: 'rgba(255,225,53,0.35)', color: '#FFE135', bg: 'rgba(255,225,53,0.08)' },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const pill = pillColors[index % 3];
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: pill.color }}
      className="flex flex-col overflow-hidden"
      style={{
        background: '#130F1E',
        border: '1px solid #231D35',
        borderRadius: '1.5rem',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ borderRadius: '1.5rem 1.5rem 0 0' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-700 hover:scale-105"
          style={{ filter: 'saturate(0.9)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(19,15,30,0.85) 0%, transparent 55%)' }} />

        {/* Year badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(12,8,23,0.85)', backdropFilter: 'blur(10px)', color: pill.color, border: `1px solid ${pill.border}` }}>
          {project.year}
        </div>

        {/* View overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(12,8,23,0.5)' }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: pill.color, color: '#0C0817' }}>
            <Eye className="w-4 h-4" />
            <span className="text-sm font-bold">View Project</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-foreground font-black text-lg leading-tight" style={{ letterSpacing: '-0.01em' }}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-0.5 font-medium">{project.subtitle}</p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium"
              style={{ border: `1px solid ${pill.border}`, color: pill.color, background: pill.bg }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors group/link"
            style={{ color: pill.color }}
          >
            <span>View on Behance</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </a>
          <div className="flex items-center gap-1 text-muted-foreground/60 text-xs">
            <MapPin className="w-3 h-3" />
            <span>{project.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,225,53,0.04) 0%, transparent 70%)' }} />

      <div className="section-container">
        <SectionHeading
          label="Selected Work"
          whiteText="Creative"
          gradientText="Portfolio"
          subtitle="A curated look at brands I've built, campaigns I've led, and stories I've told through design."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More CTA */}
        <AnimatedSection>
          <div className="flex justify-center mb-14">
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all"
              style={{
                border: '1px solid rgba(0,229,179,0.3)',
                color: '#00E5B3',
                background: 'rgba(0,229,179,0.05)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,229,179,0.1)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,179,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,229,179,0.05)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,179,0.3)';
              }}
            >
              <ExternalLink className="w-4 h-4" />
              View Full Portfolio on Behance
            </a>
          </div>
        </AnimatedSection>

        <QuoteCard quote={projectQuote} author="Lucy Bonifas" />
      </div>
    </section>
  );
};
