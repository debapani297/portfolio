import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import { title } from "process";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaGitAlt, FaJenkins, FaLinux, FaWindows, FaDatabase, FaJs, FaGithub, FaRocket, FaRobot, FaPlane } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiSpring, SiMongodb, SiPostgresql, SiMysql, SiTerraform, SiKubernetes, SiHelm, SiAnsible, SiRedis, SiGraphql, SiElasticsearch, SiApachekafka, SiNginx, SiRabbitmq, SiApachetomcat, SiOpensourceinitiative, SiOpenai, SiR, SiApachecassandra, SiGnubash } from "react-icons/si";
import { FaHiking, FaBook, FaBaseballBall, FaUtensils, FaCamera, FaMusic } from "react-icons/fa";
import { GiPianoKeys } from "react-icons/gi"; // From game-icons
import { TbBrandNextjs } from "react-icons/tb";
import PrometheusIcon from "@/assets/icons/prometheus.svg";
import RestIcon from "@/assets/icons/RSAPI.svg";
import GenAIIcon from "@/assets/icons/2511-artificial-intelligence-ai.svg";
import { TechIcon } from "@/components/TechIcon";
import React from "react";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


const techStack = [
  { title: "Java", icon: FaJava },
  { title: "HTML", icon: FaHtml5 },
  { title: "CSS", icon: FaCss3Alt },
  { title: "C++", icon: SiCplusplus },
  { title: "Python", icon: FaPython },
  { title: "Typescript", icon: SiTypescript },
  { title: "JavaScript", icon: FaJs },
  { title: "Bash", icon: SiGnubash },
  { title: "Spring", icon: SiSpring },
  { title: "React", icon: FaReact },
  { title: "Node", icon: FaNodeJs },
  { title: "Mockito", icon: FaRocket }, // No direct icon, using Rocket as a placeholder
  { title: "GitHub", icon: FaGithub },
  { title: "AWS", icon: FaAws },
  { title: "Terraform", icon: SiTerraform },
  { title: "Docker", icon: FaDocker },
  { title: "Kubernetes", icon: SiKubernetes },
  { title: "Helm", icon: SiHelm },
  { title: "Ansible", icon: SiAnsible },
  { title: "Jenkins", icon: FaJenkins },
  { title: "MySQL", icon: SiMysql },
  { title: "PostgreSQL", icon: SiPostgresql },
  { title: "CassandraDB", icon: SiApachecassandra },
  { title: "MongoDB", icon: SiMongodb },
  { title: "Redis", icon: SiRedis },
  { title: "GraphQL", icon: SiGraphql },
  { title: "ElasticSearch", icon: SiElasticsearch },
  { title: "OpenAI", icon: SiOpenai },
  { title: "Tomcat", icon: SiApachetomcat },
  { title: "Kafka", icon: SiApachekafka },
  { title: "NGINX", icon: SiNginx },
  { title: "RabbitMQ", icon: SiRabbitmq },
  { title: "Linux", icon: FaLinux },
  { title: "Windows", icon: FaWindows },
  { title: "REST", icon: RestIcon }, // No specific icon
  { title: "GenAI", icon: FaRobot  }, // No specific icon, using Open Source Initiative icon
  { title: "Prometheus", icon: PrometheusIcon }, // No direct icon, placeholder
  
];

const hobbies = [
  { title: "Hiking", icon: FaHiking }, // More accurate than FaMountain
  { title: "Reading", icon: FaBook },
  { title: "Cricket", icon: FaBaseballBall }, // More relevant than FaGamepad (Cricket doesn't use a gamepad)
  { title: "Cooking", icon: FaUtensils },
  { title: "Piano", icon: GiPianoKeys }, // Correct piano icon instead of FaPlane
  { title: "Photography", icon: FaCamera },
  { title: "Travelling", icon: FaPlane },
];

export const AboutSection = () => {
  return <div className="py-20">
    <SectionHeader 
      eyebrow="Tell you something about myself?" 
      title="Enterprise Software Dev and Cloud Engineer | SE @ Xoriant | Ext-SE @ Nokia" 
      description="I am a results-driven software engineer with 4+ years of experience in full-stack development, distributed systems, and cloud computing."
/>
<SectionHeader 
      description="I have successfully led and contributed to high-quality projects across FinTech, AI-driven solutions, and automation, receiving global appreciation from clients for my technical expertise, problem-solving abilities, and meticulous documentation,  receiving excellent feedback from 7 customers for efficiency & global collaboration."
    />
    
<SectionHeader 
      description="Beyond coding, I am passionate about hiking, reading, cricket, cooking, playing piano, photography, and traveling, which fuel my creativity and problem-solving mindset."
    />
    <div className="container">
      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px] p-0">
          <CardHeader 
            title="My Toolbox" 
            description="Tech" 
            className="px-6 pt-6"
          />
          <ToolboxItems techStack={techStack} className="mt-6 "/>
          <ToolboxItems techStack={techStack} 
            className="mt-6"
            itermsWrapperClassName="-translate-x-1/2"
          />
        </Card>
        <Card>
          <CardHeader 
            title="My Hobbies" 
            description="Hobbies" 
          />
          <div>
          <ToolboxItems techStack={hobbies} 
            className="mt-6"
            itermsWrapperClassName="-translate-x-1/2"
          />
          </div>
        </Card>
      </div>
    </div>
  </div>;
};
