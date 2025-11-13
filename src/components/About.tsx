import React, { useState } from "react";
import { Github, Linkedin, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  accent: string;
  focus?: string;
  socials: SocialLink[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const groupImage =
  "/images/team/team.JPG";

const groupFocus = "center 40%";

const team: TeamMember[] = [
  {
    name: "Jorge García",
    role: "Co-Founder",
    image: "/images/team/jorge.jpg",
    accent: "from-cyan-500/60 via-blue-500/40 to-violet-500/60",
    focus: "center 10%",
    socials: [
      { label: "LinkedIn de Jorge", href: "https://www.linkedin.com/in/jorge-garcia18/", icon: Linkedin },
      { label: "GitHub de Jorge", href: "https://github.com/JorgeGarcia005", icon: Github },
    ],
  },
  {
    name: "Fabrizio Bussalleu",
    role: "Co-Founder",
    image: "/images/team/furro.jpg",
    accent: "from-emerald-500/60 via-teal-500/40 to-blue-500/60",
    focus: "center 10%",
    socials: [
      { label: "LinkedIn de Fabrizio", href: "https://www.linkedin.com/in/fabrizio-bussalleu-salcedo-237760323", icon: Linkedin },
      { label: "GitHub de Fabrizio", href: "https://github.com/FabrizioBussalleu", icon: Github },
    ],
  },
  {
    name: "Alejandro Colfer",
    role: "Co-Founder",
    image: "/images/team/colfer.jpg",
    accent: "from-purple-500/60 via-fuchsia-500/40 to-amber-500/60",
    focus: "center 45%",
    socials: [
      { label: "LinkedIn de Alejandro", href: "https://www.linkedin.com/in/carlos-alejandro-colfer-mendoza-a59a08355/", icon: Linkedin },
      { label: "GitHub de Alejandro", href: "https://github.com/Elkfle", icon: Github },
    ],
  },
  {
    name: "Joaquin del Solar",
    role: "Co-Founder",
    image: "/images/team/delso.jpg",
    accent: "from-rose-500/60 via-orange-500/40 to-amber-500/60",
    focus: "center 38%",
    socials: [
      { label: "LinkedIn de Joaquin", href: "https://www.linkedin.com/in/joaquin-del-solar-383069355", icon: Linkedin },
      { label: "GitHub de Joaquin", href: "https://github.com/JOACODS22", icon: Github },
    ],
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeMember = typeof activeIndex === "number" ? team[activeIndex] : null;
  const displayImage = activeMember?.image ?? groupImage;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-white py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.15),_transparent_45%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 -z-10 hidden rounded-[3.2rem] bg-gradient-to-br from-sky-200/50 via-white to-fuchsia-200/40 blur-3xl lg:block" aria-hidden="true" />
            <div className="relative w-full overflow-hidden rounded-[3.2rem] border border-slate-200 bg-white shadow-[0_45px_140px_rgba(15,118,210,0.2)]">
              <div className="relative aspect-[6/4]">
                <img
                  key={displayImage}
                  src={displayImage}
                  alt={activeMember ? `Retrato de ${activeMember.name}` : "Foto grupal del equipo Elaris"}
                  className="h-full w-full object-cover transition duration-700 ease-out"
                  style={{ objectPosition: activeMember?.focus ?? groupFocus }}
                />
              </div>
            </div>
          </div>

          <div className="order-1 space-y-4 text-center lg:order-2 lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
              Sobre nosotros
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Inteligencia colectiva para crear soluciones extraordinarias
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg lg:mx-0">
              Combinamos estrategia, diseño y desarrollo para transformar de manera responsable los procesos de nuestros clientes. La diversidad de habilidades en el equipo es la clave para materializar experiencias digitales con impacto humano.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={member.name}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onBlur={(event) => {
                  const next = event.relatedTarget as Node | null;
                  if (!next || !event.currentTarget.contains(next)) {
                    setActiveIndex(null);
                  }
                }}
                className={cn(
                  "group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border p-5 text-left transition duration-300 outline-none",
                  "border-slate-200 bg-white/95 hover:border-sky-400 hover:shadow-[0_18px_45px_rgba(14,165,233,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40",
                  isActive && "border-sky-500 shadow-[0_18px_45px_rgba(14,165,233,0.22)]"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition duration-300",
                    member.accent,
                    "group-hover:opacity-30",
                    isActive && "opacity-40"
                  )}
                />
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                  <p className="text-xs text-slate-600">{member.role}</p>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  {member.socials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
