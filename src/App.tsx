import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import type { SectionId } from '@/types';

const SECTIONS: SectionId[] = ['home', 'about', 'skills', 'projects', 'contact'];

function App() {
  const activeSection = useScrollSpy(SECTIONS);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient top glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% -10%, rgba(0, 229, 179, 0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
