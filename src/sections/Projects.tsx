import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "Nov 2024",
    title: "AI-Driven Traffic Management in SDN",
    results: [
      { title: " Building AI-driven solution to control & optimize network traffic via machine learning" },
      { title: "Integrated  GenAI chatbot recommending bottleneck resolutions" },
      { title: "Tech: Python, GenAI, OpenAI, LangChain, Tableau" },
    ],
    // link: "https://youtu.be/4k7IdSLxh6w",
    // image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "June 2024",
    title: " MediB (AI-Health buddy)",
    results: [
      { title: "Built a GenAI-powered chatbot for medical prescription assistance." },
      { title: "Leveraged Knowledge Graph Database for accurate health recommendations." },
      { title: "Tech: Python, OpenAI GPT, Streamlit, Pinecone" },
    ],
    // link: "https://youtu.be/7hi5zwO75yc",
    // image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "April 2024",
    title: "Live Migration between Virtual Machines",
    results: [
      { title: "Implemented low-level system programming to optimize parallel executions." },
      { title: "Migrated kernel registers between VMs using websockets." },
      { title: "Tech:  C++, Networking (Web Sockets), Migration" },
    ],
    // link: "https://youtu.be/Z7I5uSRHMHg",
    // image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div>
      <div className="container">
        <SectionHeader eyebrow="Projects" />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
            key={project.title} 
            className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
            style={{
              top:`calc(64px + ${projectIndex * 40}px`,
            }}>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">

                <div className="lg:pb-16">

                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase gap-2 tracking-widest text-sm text-transparent bg-clip-text">
                  {/* <span>{project.company}</span>
                  <span>&bull;</span> */}
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
              {/* <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                  <span>View Project</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </a> */}
              </div>
              {/* <div>
              <img src={project.image.src} alt={project.title} 
              className="mt-8 -mb-4 md:-mb-0 lg:mt-5 lg:size-70"/>
              </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
  );

};
