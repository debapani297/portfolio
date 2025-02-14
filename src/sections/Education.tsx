import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "San jose State University",
    year: "Aug 2022 - Dec 2024",
    title: "Master of Science in Computer Engineering",
    results: [
      { title: "Specialization: System Design and Verification) ;  GPA: 3.8" },
      { title: "Coursework: Data Structures and Algorithms, Operating Systems, Virtualization technologies, Data Mining, Data Visualization, Machine Learning" },
    ],
  },
{
    company: "Siksha 'O' Anusandhan University",
    year: "Jul 2015 - May 2019",
    title: "Bachelor of Technology in Electrical and Electronics Engineering",
    results: [
      { title: "GPA:3.47" },
   ],
  },
];

export const EducationSection = () => {
  return (
  <section id="Education" className="pb-16 lg:py-24">
    <div>
      <div className="container">
        <SectionHeader 
          eyebrow="Education" 
          />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
            key={project.title} 
            className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 lg:pb-0 sm:pb-10 sticky"
            style={{
              top:`calc(64px + ${projectIndex * 40}px`,
            }}>

              <div className="lg:grid lg:gap-16">

                <div className="lg:pb-16">

                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase gap-2 tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6"/>
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              
              </div>
              
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
  );

};
