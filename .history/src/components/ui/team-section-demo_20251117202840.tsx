import React from "react";
import TeamSection from "./team-section-1";
import { Linkedin, Github } from "lucide-react";

const members = [
  {
    name: "Jorge",
    designation: "Co-Founder",
    imageSrc: "/images/team/jorge.webp",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/jorge-garcia18/" },
      { icon: Github, href: "https://github.com/JorgeGarcia005" },
    ],
  },
  {
    name: "Fabrizio",
    designation: "Co-Founder",
    imageSrc: "/images/team/furro.webp",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/fabrizio-bussalleu-salcedo-237760323" },
      { icon: Github, href: "https://github.com/FabrizioBussalleu" },
    ],
  },
  {
    name: "Alejandro",
    designation: "Co-Founder",
    imageSrc: "/images/team/colfer.webp",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-alejandro-colfer-mendoza-a59a08355/" },
      { icon: Github, href: "https://github.com/Elkfle" },
    ],
  },
  {
    name: "Delso",
    designation: "Co-Founder",
    imageSrc: "/images/team/delso.webp",
    socialLinks: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/joaquin-del-solar-383069355" },
      { icon: Github, href: "https://github.com/JOACODS22" },
    ],
  },
];

export default function TeamSectionDemo() {
  return (
    <TeamSection
      title="CONOCE A NUESTRO EQUIPO"
  description={`En Elaris, fusionamos el ingenio humano con el poder de la Inteligencia Artificial. Nuestro equipo de expertos está dedicado a crear soluciones digitales confiables, escalables y centradas en el usuario. Confíe en nosotros para transformar sus procesos con experiencias eficientes y seguras, llevándole al futuro de la tecnología.`}
      members={members}
    />
  );
}
