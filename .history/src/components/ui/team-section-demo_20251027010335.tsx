import React from "react";
import TeamSection from "./team-section-1";
import { Linkedin, Github } from "lucide-react";

const members = [
  {
    name: "Jorge",
    designation: "Arquitecto Principal",
    imageSrc: "/images/team/jorg.jpg",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/jorge-garcia18/" },
      { icon: Github, href: "https://github.com/JorgeGarcia005" },
    ],
  },
  {
    name: "Fabrizio",
    designation: "Ing. Machine Learning",
    imageSrc: "/images/team/furro.jpg",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/fabrizio-bussalleu-salcedo-237760323" },
      { icon: Github, href: "https://github.com/FabrizioBussalleu" },
    ],
  },
  {
    name: "Alejandro",
    designation: "Desarrollador Full-Stack",
    imageSrc: "/images/team/colfer.jpg",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-alejandro-colfer-mendoza-a59a08355/" },
      { icon: Github, href: "https://github.com/Elkfle" },
    ],
  },
  {
    name: "Delso",
    designation: "Especialista en IA/DevOps",
    imageSrc: "/images/team/delso.jpg",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/joaquin-del-solar-383069355" },
      { icon: Github, href: "https://github.com/JOACODS22" },
    ],
  },
];

export default function TeamSectionDemo() {
  return (
    <TeamSection
      title="NUESTRO EQUIPO DE EXPERTOS"
  description={`En Elaris combinamos talento humano con tecnología avanzada. Nuestro equipo reúne experiencia en desarrollo, diseño y soluciones de inteligencia artificial para entregar productos confiables, escalables y centrados en el usuario. Trabajamos contigo para transformar procesos legales en experiencias eficientes y seguras.`}
      members={members}
    />
  );
}
