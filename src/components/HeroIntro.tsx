import Image from "next/image";
import Section from "./Section";
import Card from "./ui/Card";
import Pill from "./ui/Pill";

type HeroIntroProps = {
  name: string;
  role: string;
  description: string;
  skills: string[];
};

export default function HeroIntro({
  name,
  role,
  description,
  skills = [],
}: HeroIntroProps) {
  return (
    // sin padding global del wrapper para controlar el aire a mano
    <Section padding="none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
        {/* Avatar */}
        <Card className="card-lg p-5 flex items-center justify-center card-hover">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-[var(--stroke)] bg-[var(--surface-2)]">
            <Image
              src="/images/avatar.jpg"
              alt={`Portrait of ${name}`}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
              priority
            />
          </div>
        </Card>

        {/* Intro */}
        <Card className="md:col-span-2 card-lg p-6 flex items-center card-hover">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{name}</h1>
            <p className="text-[var(--accent)] -mt-2">{role}</p>
            <p className="text-base md:text-lg leading-7 md:leading-8 text-[var(--fg)]/85">
              {description}
            </p>
          </div>
        </Card>

        {/* Skills */}
        {skills.length > 0 && (
          <Card className="md:col-span-3 p-4 mb-3 md:mb-4 card-hover">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            {/* subrayado minimal dorado */}
            <div className="h-[2px] w-12 bg-[var(--accent)] rounded-full mb-3" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
}