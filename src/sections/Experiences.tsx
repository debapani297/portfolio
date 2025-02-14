import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Frigate Global",
    year: "Sept 2024 - Present",
    title: "Software Engineer",
    results: [
      { title: "Developed fault-tolerant event-driven architecture using Kafka for real-time data processing." },
      { title: "Spearheaded the payment UI in React.js into high-quality UIs, improving user engagement by 30%" },
      { title: "Optimized PostgreSQL queries, improving read efficiency by 70%" },
    ],
  },
{
    company: "Xoriant Corporation",
    year: "Aug 2021 - Jul 2022",
    title: "Software Engineer",
    results: [
      { title: "Led a team of 4 interns, implementing TDD-based microservices with Spring Boot." },
      { title: "Architected and deployed fault-tolerant storage systems using CassandraDB & MariaDB." },
      { title: "Built and managed CI/CD pipelines (Jenkins, AWS ECR, Kubernetes), improving deployment speed." },
    ],
  },
  {
    company: "Infinite Computer Solutions",
    year: "May 2019 - Aug 2021",
    title: "Associate Software Engineer",
    results: [
      { title: "Developed OAuth 2.0 authentication systems, improving application security by 70%." },
      { title: "Designed and deployed Spring microservices into cloud-native architectures on AWS & Kubernetes" },
      { title: "Reduced system latency by 30% through load testing with JMeter." },
    ],
  },
  {
    company: "Infinite Computer Solutions",
    year: "Oct 2018 - March 2019",
    title: "Software Intern",
    results: [
      { title: "Designed and implemented a self-help workflow for Nokia Care, automating troubleshooting processes and significantly improving program efficiency" },
      { title: "Developed IVR data filtering mechanisms, segregating date-time data and creating business hour-based automation, reducing IVR call volumes by 80%" },
      { title: "Engineered scalable Java functions and SOAP APIs using Spring Boot and MariaDB, efficiently processing WSDL XMLs and optimizing backend operations for seamless system performance." },
    ],
  },
];

export const ExperienceSection = () => {
  return (
  <section id="Experience" className="pb-16 lg:py-24">
    <div>
      <div className="container">
        <SectionHeader 
          eyebrow="Professional Experience" 
          title="Summary" 
          description="My expertise includes building scalable microservices, optimizing cloud infrastructures, and developing real-time data processing pipelines using Java, Spring Boot, Kubernetes, AWS, and Kafka. I have a strong background in designing fault-tolerant architectures, enhancing system security, and implementing CI/CD pipelines to streamline deployment processes." 
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
            key={project.title} 
            className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20  lg:pb-0 sm:pb-10 sticky"
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
