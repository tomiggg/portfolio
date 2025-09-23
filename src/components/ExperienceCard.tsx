import Card from "./ui/Card";

type ExperienceCardProps = {
  title: string;
  role: string;
  period: string;
  bullets: string[];
  className?: string;
};

export default function ExperienceCard({
  title,
  role,
  period,
  bullets,
  className = "",
}: ExperienceCardProps) {
  return (
    <Card hover className={`p-6 card-hover ${className}`}>
      <header className="mb-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {/* subrayado minimal dorado */}
            <div className="h-[2px] w-10 bg-[var(--accent)] rounded-full mb-1.5" />
            <p className="text-[var(--accent)] -mt-0.5">{role}</p>
          </div>
          <span className="badge">{period}</span>
        </div>
      </header>

      <ul className="list-disc pl-5 space-y-2 subtle">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}