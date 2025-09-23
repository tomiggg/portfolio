// src/app/page.tsx
import HeroIntro from "../components/HeroIntro";
import Section from "../components/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Pill from "../components/ui/Pill";
import ExperienceCard from "../components/ExperienceCard";
import ContactButtons from "../components/ContactButtons";
import ProjectCard from "../components/ProjectCard";
import { User, MapPin, Languages, Globe } from "lucide-react";


export default function HomePage() {
  return (
    <div className="space-y-0 container">
      <HeroIntro
        name="Tomás González Bessone"
        role="Full-Stack Developer Jr · Software Engineering Student"
        description="I’m a Software Engineering student and aspiring Full-Stack Developer passionate about building modern, reliable, and user-friendly web applications."
        skills={[
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Python",
          "APIs (REST/GraphQL)",
          "ORMs (Prisma/Sequelize)",
          "Git/GitHub"
        ]}
      />

      {/* EXPERIENCIA + resto del bento */}
      <Section padding="compact" className="-mt-4 md:-mt-6">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5
            auto-rows-[minmax(140px,auto)]
          "
        >
          {/* Experiencia */}
          <ExperienceCard
            title="Freelance"
            role="Full-Stack Web Developer"
            period="2024 — Present"
            bullets={[
              "Building modern web applications with Next.js, React, and PostgreSQL.",
              "Full development cycle: design, backend, frontend, deployment.",
              "Maintenance and continuous improvements for client projects.",
            ]}
          />

          <ExperienceCard
            title="Real Estate Enterprise"
            role="Web Developer & Maintenance"
            period="2024 — Present"
            bullets={[
              "Developed and deployed the company website for property listings.",
              "Integrated responsive UI with Next.js and Tailwind CSS.",
              "Ongoing maintenance and updates to ensure performance and reliability.",
            ]}
          />

          {/* Projects — ahora bloque ancho (estirado) */}
          <Card className="md:col-span-2 p-6 card-hover my-2 md:my-3">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <div className="h-[2px] w-12 bg-[var(--accent)] rounded-full mb-4" />

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <ProjectCard
                title="Pascuali & Bianco"
                subtitle="Real estate website"
                href="https://pascuali-bianco.vercel.app/"
                imageSrc="/images/projects/pascuali-preview.jpg"
              />

              <ProjectCard
                title="Personal Dashboard"
                subtitle="Full-Stack — Coming soon"
                href="#"
                imageSrc="/images/projects/dashboard-preview.jpg"
              />
            </div>
          </Card>

  {/* Languages — card cuadrado */}
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <div className="h-[2px] w-12 bg-[var(--accent)] rounded-full mb-3" />
            <div className="flex flex-wrap gap-2">
              <Pill>
                <Globe className="w-4 h-4 text-[var(--accent)]" />
                Spanish (Native)
              </Pill>
              <Pill>
                <Languages className="w-4 h-4 text-[var(--accent)]" />
                English (B2 Intermediate)
              </Pill>
            </div>
          </Card>

          {/* Education — card cuadrado (ya no estirado) */}
          <Card className="p-6 card-hover">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <div className="h-[2px] w-12 bg-[var(--accent)] rounded-full mb-3" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Software Engineering</div>
                  <div className="subtle text-sm -mt-0.5">
                    Universidad Siglo 21 · Presential
                  </div>
                </div>
                <span className="badge">2021 — Present</span>
              </div>
              <hr className="hr" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">React & TypeScript Course</div>
                  <div className="subtle text-sm -mt-0.5">Online · Bootcamp</div>
                </div>
                <span className="badge">2024</span>
              </div>
            </div>
          </Card>

          {/* Contact & Social — unificado y ancho */}
          <Card className="md:col-span-2 p-6 card-hover my-2 md:my-3">
            <h3 className="text-xl font-semibold mb-2">Contact & Social</h3>
            <div className="h-[2px] w-12 bg-[var(--accent)] rounded-full mb-3" />

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Pill>
                <User className="w-4 h-4 text-[var(--accent)]" />
                Tomás, 23 years
              </Pill>
              <Pill>
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                Córdoba, Argentina
              </Pill>
            </div>

            <ContactButtons
              email="tomasgonzalez3108@gmail.com"
              github="https://github.com/tomiggg"
              linkedin="https://www.linkedin.com/in/tomas-gonzalez-4161891a6/"
            />
          </Card>
        </div>
      </Section>
    </div>
  );
}