import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ExperienceSection } from "@/sections/Experiences";
import { EducationSection } from "@/sections/Education";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection/>
      <ExperienceSection />
      <TapeSection/>
      <TestimonialsSection/>
      <EducationSection/>
      <ProjectsSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
}
