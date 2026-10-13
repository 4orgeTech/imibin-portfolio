import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import EngineeringSection from '@/sections/EngineeringSection';
import JournalSection from '@/sections/JournalSection';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EngineeringSection />
        <JournalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
